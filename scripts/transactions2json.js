#!/bin/node

const async = require('async');
const csv = require('csv');
const uuid = require('uuid/v4');
const json2csv = require('json2csv').parse;
const debug = require('debug')('transaction2json');
const fs = require('fs');
const parse = require('csv-parse');

const filename = 'salaries';
const jobs = {};
const SAMPLE_SIZE = process.env.SAMPLE_SIZE ? parseInt(process.env.SAMPLE_SIZE) : 10;
const ID_FIELD = process.env.ID_FIELD || 'Transaction_ID';
const ACCOUNT_NAME_FIELD = process.env.ACCOUNT_NAME_FIELD || 'Full_Account_Name';
const VALUE_FIELD = process.env.VALUE_FIELD || 'Amount_Num';

jobs.transactionRows = function(next) {
  const transactionsFile = fs.createReadStream(`./ledger/${filename}.csv`);
  const rows = [];
  const parser = parse({
    columns: true,
    // to: 5
  });

  transactionsFile.on('end', function() {
    next(null, rows);
  });

  transactionsFile
    .pipe(parser)
    .pipe(csv.transform(function(record) {
      if (SAMPLE_SIZE && rows.length > SAMPLE_SIZE) {
        console.log('SAMPLE_SIZE', SAMPLE_SIZE);
        return;
      }
      rows.push(record);
    }));
};

jobs.transactionJSON = ['transactionRows', function(results, next) {
  const transactions = {};

  results.transactionRows.forEach(function(row) {
    const id = row[ID_FIELD];
    const key = row[ACCOUNT_NAME_FIELD].replace(/ /g, '_');
    const value = row[VALUE_FIELD];

    if (!id) {
      console.log('transaction is missing an id', id);
      return;
    }
    transactions[id] = transactions[id] || row;
    transactions[id][key] = value;
  });

  next(null, transactions);
}];

jobs.fields = ['transactionJSON', function(results, next) {
  const fields = [];

  Object.keys(results.transactionJSON).forEach(function(transactionId) {
    const transaction = results.transactionJSON[transactionId];
    console.log('transaction', transaction);
    Object.keys(transaction).forEach(function(field) {
      if (fields.indexOf(field) > -1) {
        return;
      }
      fields.push(field);
    });
  });

  next(null, fields);
}];

jobs.transactions = ['transactionJSON', function(results, next) {
  const transactions = [];

  Object.keys(results.transactionJSON).forEach(function(transactionId) {
    const transaction = results.transactionJSON[transactionId];
    transactions.push(transaction);
  });

  fs.appendFile(`ledger/${filename}_${Date.now()}.json`, JSON.stringify(results, null, 2), function(err, result) {
    debug('done writing in file', err, result);
    next(err, transactions);
  });
}];

jobs.csv = ['fields', 'transactions', function(results, next) {
  const csv = json2csv(results.transactions, {
    fields: results.fields,
    eol: '\n'
  });

  fs.appendFile(`ledger/${filename}_${Date.now()}.csv`, csv, function(err, result) {
    debug('done writing data', err, result);
    next(err, csv);
  });
}];

jobs.xml = ['csv', function(results, next) {
  const xml = results.transactions.map(function(transaction) {
    return `
      <gnc:transaction version="2.0.0">
        <trn:id type="guid">${uuid()}</trn:id>
        <trn:currency>
          <cmdty:space>ISO4217</cmdty:space>
          <cmdty:id>CAD</cmdty:id>
        </trn:currency>
        <trn:num>1</trn:num>
        <trn:date-posted>
          <ts:date>${new Date(transaction.Date)}</ts:date>
        </trn:date-posted>
        <trn:date-entered>
          <ts:date>${new Date(transaction.Date)}</ts:date>
        </trn:date-entered>
        <trn:description>${transaction.Description}</trn:description>
        <trn:slots>
          <slot>
            <slot:key>date-posted</slot:key>
            <slot:value type="gdate">
              <gdate>${new Date(transaction.Date)}</gdate>
            </slot:value>
          </slot>
          <slot>
            <slot:key>notes</slot:key>
            <slot:value type="string"></slot:value>
          </slot>
        </trn:slots>
        <trn:splits>
          <trn:split>
            <split:id type="guid">${uuid()}</split:id>
            <split:reconciled-state>n</split:reconciled-state>
            <split:value>192320/100</split:value>
            <split:quantity>192320/100</split:quantity>
            <split:account type="guid">c87183e7840e44458b0548f9595b993f</split:account>
          </trn:split>
        </trn:splits>
      </gnc:transaction>
    `;
  });
  fs.appendFile(`ledger/${filename}_${Date.now()}.xml`, xml, function(err, result) {
    debug('done writing data', err, result);
    next(err, xml);
  });
}];

async.auto(jobs, function(err, results) {
  console.log('results', results);

});
