#!/bin/node

const async = require('async');
const csv = require('csv');
const uuid = require('uuid/v4');
const json2csv = require('json2csv').parse;
const debug = require('debug')('transaction2json');
const fs = require('fs');
const parse = require('csv-parse');

const filename = '2014_Employee1_expenses';
const jobs = {};
const SAMPLE_SIZE = process.env.SAMPLE_SIZE ? parseInt(process.env.SAMPLE_SIZE) : 10;
const ID_FIELD = process.env.ID_FIELD || 'Transaction_ID';
const ACCOUNT_NAME_FIELD = process.env.ACCOUNT_NAME_FIELD || 'Full_Account_Name';
const VALUE_FIELD = process.env.VALUE_FIELD || 'Amount_Num';

jobs.csv = function(next) {
  const transactionsFile = fs.createReadStream(`./2014/supporting_documents/reimbursements/${filename}.csv`);
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

jobs.xml = ['csv', function(results, next) {
  const xml = results.csv.map(function(transaction) {
    const tps = Math.round(transaction.Total/1.14975 * 0.05 * 100);
    const tvq = Math.round(transaction.Total/1.14975 * 0.09975 * 100);
    const expense = Math.round(transaction.Total * 100) - tps - tvq;
    return `
<gnc:transaction version="2.0.0">
  <trn:id type="guid">${uuid()}</trn:id>
  <trn:currency>
    <cmdty:space>CURRENCY</cmdty:space>
    <cmdty:id>CAD</cmdty:id>
  </trn:currency>
  <trn:num>1</trn:num>
  <trn:date-posted>
    <ts:date>${transaction.Date1} 05:59:00 -0500</ts:date>
  </trn:date-posted>
  <trn:date-entered>
    <ts:date>${transaction.Date1} 07:13:44 -0500</ts:date>
  </trn:date-entered>
  <trn:description>${transaction.Payee3}</trn:description>
  <trn:slots>
    <slot>
      <slot:key>date-posted</slot:key>
      <slot:value type="gdate">
        <gdate>${transaction.Date1}</gdate>
      </slot:value>
    </slot>
    <slot>
      <slot:key>notes</slot:key>
      <slot:value type="string">${transaction.MemoField}</slot:value>
    </slot>
  </trn:slots>
  <trn:splits>
    <trn:split>
      <split:id type="guid">${uuid()}</split:id>
      <split:reconciled-state>n</split:reconciled-state>
      <split:value>${Math.round(transaction.Expense * 100)}/100</split:value>
      <split:quantity>${Math.round(transaction.Expense * 100)}/100</split:quantity>
      <split:account type="guid">${transaction.CategoryID}</split:account>
    </trn:split>
    <trn:split>
      <split:id type="guid">${uuid()}</split:id>
      <split:reconciled-state>n</split:reconciled-state>
      <split:value>${Math.round(transaction.TPS * 100)}/100</split:value>
      <split:quantity>${Math.round(transaction.TPS * 100)}/100</split:quantity>
      <split:account type="guid">8fefddb1076d81c8369b6474529b52dd</split:account>
    </trn:split>
    <trn:split>
      <split:id type="guid">${uuid()}</split:id>
      <split:reconciled-state>n</split:reconciled-state>
      <split:value>${Math.round(transaction.TVQ * 100)}/100</split:value>
      <split:quantity>${Math.round(transaction.TVQ * 100)}/100</split:quantity>
      <split:account type="guid">8fefddb1076d81c8369b6474529b52dd</split:account>
    </trn:split>
    <trn:split>
      <split:id type="guid">${uuid()}</split:id>
      <split:reconciled-state>n</split:reconciled-state>
      <split:value>-${Math.round(transaction.Total * 100)}/100</split:value>
      <split:quantity>-${Math.round(transaction.Total * 100)}/100</split:quantity>
      <split:account type="guid">${transaction.AccountNumber2}</split:account>
    </trn:split>
  </trn:splits>
</gnc:transaction>`;
  }).join('');
  fs.appendFile(`2014/supporting_documents/reimbursements/${filename}_${Date.now()}.xml`, xml, function(err, result) {
    debug('done writing data', err, result);
    next(err, xml);
  });
}];

async.auto(jobs, function(err, results) {
  console.log('results', results);

});
