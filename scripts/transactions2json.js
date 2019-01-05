#!/bin/node

const async = require('async');
const csv = require('csv');
const debug = require('debug')('transaction2json');
const fs = require('fs');
const parse = require('csv-parse');

const filename = 'salaries';
const jobs = {};
const SAMPLE_SIZE = process.env.SAMPLE_SIZE || 10;
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
      if (rows.length > SAMPLE_SIZE) {
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

async.auto(jobs, function(err, results) {
  console.log('results', results);
  fs.appendFile(`ledger/${filename}_${Date.now()}.json`, JSON.stringify(results, null, 2), function(err, result) {
    debug('done writing in file', err, result);
  });
});
