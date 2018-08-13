# Ledger

## Transactions



Import transactions
  Bills
    - Liabilities:accounts payable
    + Expenses

Import transactions
  Employee purchases
    - Liabilities:accounts payable:employee
    + Expenses

Generate splits by template
  Paystub
    + Expenses:salaries (Gross salary)
    - Assets:checking (Net salary)
    - Liabilities:Accounts payable:taxes (employee)
    - Liabilities:Accounts payable:benefits (employee)

    + Expenses:benefits (employer)
    - Liabilities:Accounts payable:benefits (employer)
    + Expenses:taxes (employer)
    - Liabilities:Accounts payable:taxes (employer)

Generate invoices by template?
  Invoice
    + Income
    - Liabilities:TPS
    - Liabilities:TVQ
    + Assets:Accounts receivable (when invoiced)
    + Assets:checking (when paid)

Import transactions
  Canada Statements
    -/+ Liabilities:accounts payable

  Quebec Statements
    -/+ Liabilities:accounts payable



## Accounts

These are the following accounts in the ledger.

### Assets

Assets:Current Assets
Reconciled:

Assets:Current Assets:377036
Reconciled: Yes

Assets:Current Assets:Tangerine
Reconciled: Yes

Assets:Current Assets:Checking Account
Reconciled:

- Need to make sure all paychecks go to accounts liable instead of expenses

Assets:Equipment
Reconciled:

Assets:Equipment:Androids
Reconciled: Yes

Assets:Equipment:Computers, Monitors
Reconciled: Yes

Assets:Equipment:Networking Hardware
Reconciled: Yes

Assets:Equipment:Small Electronics
Reconciled: Yes

Assets:Furniture
Reconciled: Yes

Assets:Startup Costs
Reconciled:

Assets:Accounts Receivable
Reconciled:

### Liabilities

Liabilities:Taxes
Reconciled:

Liabilities:Taxes:Remises Federal RP0001
Reconciled:

AE-EI

https://www.taxtips.ca/cppandei/eirates.htm


```
2016  1.52
2015  1.54
2014  1.53
2013  1.52
2012  1.47
```

Liabilities:Taxes:Remises Quebec RS0001
Reconciled:


FSS-HSF

https://www.simplepay.ca/canada_payroll/hsf.html


TODO the FSS per year is not always 2.7% like the guy said, instead check what it is and update the values before continuing

```
2016 2.70%
2013 2.70%
2012 2.70%
```

RQAP-QPIP

https://www.revenuquebec.ca/en/businesses/source-deductions-contributions/calculating-source-deductions-and-employer-contributions/quebec-parental-insurance-plan-qpip-premiums/maximum-insurable-earnings-and-premium-rate/

```
      Employee  Employer
2016  0.548     0.767
2015  0.559     0.782
2014  0.559     0.782
2013  0.559     0.782
2012  0.559     0.782
```

RRQ-QPP

https://www.taxtips.ca/cppandei/cpprates.htm

```
2016  5.325%
2015  5.250%
2014  5.175%
2013  5.100%
2012  5.025%
```

Liabilities:Taxes:TPS/TVQ
Reconciled:

Liabilities:Taxes:TPS/TVQ:TPS No. 838993681 RT0001
Reconciled:

Liabilities:Taxes:TPS/TVQ:TVQ No. 1218496586 TQ0001
Reconciled:

Liabilities:Accounts Payable
Reconciled:

Liabilities:Expenses Employee1
Reconciled:

Liabilities:Expenses Employee3
Reconciled:


### Income

Income:Interest Income
Reconciled:

Income:Other Income
Reconciled:

Income:Reimbursed Expenses
Reconciled:

Income:Sales
Reconciled:

Income:Sales:Aphasia
Reconciled:

Income:Sales:InSpect
Reconciled:

Income:Sales:Gamify
Reconciled:

Income:Sales:iField
Reconciled:

Income:Sales:PhoPhlo
Reconciled:

Income:Sales:REMOVED88
Reconciled:

Income:Sales:ExpoCite
Reconciled:


### Expenses

Expenses:Advertising
Reconciled:

Advertising and promotion (Line 8520)

Expenses:Advertising:Meals and entertainment
Reconciled:

Expenses:Advertising:Meals and entertainment:Dining
Reconciled:

Expenses:Advertising:Meals and entertainment:Entertainment
Reconciled:

Expenses:Advertising:Meals and entertainment:Meals
Reconciled:

The maximum amount for food, beverages, and entertainment expenses is 50% the amount  incurred for the expenses.

These limits do not apply if any of the following apply:
* Meal and entertainment expenses for an office party or similar event, and the employer invite all employees from a particular location. The limit is six such events per year.

Expenses:Advertising:Printing and Reproduction
Reconciled:

Expenses:Allowance on eligible capital property
Reconciled:

Expenses:Amortization
Reconciled:

Amortization of intangible assets  (Line 8570)

Expenses:Bad debts
Reconciled:

Bad debt expense  (Line 8590)

* you had determined that an account receivable is a bad debt in the year
* you had already included the receivable in income

Employee benefits  (Line 8620)

Deduct employer part of the following amounts payable on employees' remuneration:

* CPP or QPP contributions
* Employment insurance (EI) premiums


Expenses:Business fees
Reconciled:

Business taxes, licences, and memberships  (Line 8760)

* You can deduct any annual licence fees and business taxes you incur to run your business.
* You can also deduct annual dues or fees to keep your membership in a trade or commercial association.

Expenses:Business fees:Licenses and Permits
Reconciled:

Expenses:Interest
Reconciled:

Interest and bank charges  (Line 8710)


Expenses:Motor vehicle expenses
Reconciled:

Expenses:Motor vehicle expenses:Fees
Reconciled:

Expenses:Motor vehicle expenses:Gas
Reconciled:

Expenses:Motor vehicle expenses:Parking
Reconciled:

Expenses:Motor vehicle expenses:Repair and Maintenance
Reconciled:

Expenses:Office expenses
Reconciled:

Office expenses  (Line 8810)

Expenses:Other expenses
Reconciled:

Other expenses  (Line 9270)

Expenses:Other expenses:Adjustment
Reconciled:

Expenses:Other expenses:Bank Service Charge
Reconciled:

Expenses:Other expenses:Capital cost allowance
Reconciled:

Expenses:Other expenses:Cash Discounts
Reconciled:

Expenses:Other expenses:Charity
Reconciled:

Expenses:Other expenses:Depreciation
Reconciled:

Expenses:Other expenses:Education
Reconciled:

Expenses:Other expenses:Equipment Rental
Reconciled:

Expenses:Other expenses:Insurance
Reconciled:

Expenses:Other expenses:Insurance:Disability Insurance
Reconciled:

Expenses:Other expenses:Insurance:Liability Insurance
Reconciled:

Expenses:Other expenses:Insurance:Workers Comp
Reconciled:

Expenses:Other expenses:Payroll Expenses
Reconciled:

Expenses:Other expenses:Travel
Reconciled:

* public transportation fares
* hotel accommodations

Expenses:Other expenses:Travel:Meetings and conventions
Reconciled:

Expenses:Other expenses:Utilities
Reconciled:

Expenses:Other expenses:Utilities:Cell Phone
Reconciled:

Expenses:Other expenses:Utilities:Electric
Reconciled:

Expenses:Other expenses:Utilities:Internet
Reconciled:

Expenses:Other expenses:Utilities:Water
Reconciled:

Expenses:Postage and Delivery
Reconciled:

Expenses:Professional fees
Reconciled:

Professional fees  (Line 8860)


Interfund transfer  (Line 9286)


Expenses:Professional fees:Accounting
Reconciled:

Expenses:Professional fees:Legal Fees
Reconciled:

Expenses:Professional fees:Management and administration fees
Reconciled:

Expenses:Rent
Reconciled:

Rental  (Line 8910)

- Missing 2013-05 ->

Expenses:Repairs
Reconciled:


Repairs and maintenance (Line 8960)

Expenses:Repairs:Building Repairs
Reconciled:

Expenses:Repairs:Computer Repairs
Reconciled:

Computer-related expenses (Line 9150)

Expenses:Repairs:Equipment Repairs
Reconciled:

Expenses:Repairs:Janitorial Expenses
Reconciled:

Expenses:Salaries
Reconciled:

- Need to re-export payroll and re-calculate to reconcile the retenue de la source
Salaries and wages  (Line 9060)


Expenses:Salaries:ExpoCite
Reconciled:

Expenses:Salaries:iField
Reconciled:

Expenses:Salaries:InSpect
Reconciled:

Expenses:Salaries:PhoPhlo
Reconciled:

Expenses:Salaries:REMOVED88
Reconciled:

Expenses:Salaries:Taxes and Benefits
Reconciled:

- Need to re-export payroll and re-calculate to reconcile the retenue de la source


Expenses:Salaries:Taxes and Benefits:Canada
Reconciled:

Expenses:Salaries:Taxes and Benefits:Canada:CC-AE(EI)
Reconciled:

Expenses:Salaries:Taxes and Benefits:Canada:CC-RPC
Reconciled:

Expenses:Salaries:Taxes and Benefits:Quebec
Reconciled:

Expenses:Salaries:Taxes and Benefits:Quebec:CC-FSS(Health Service Fund)
Reconciled:

Expenses:Salaries:Taxes and Benefits:Quebec:CC-RQAP(QPIP)
Reconciled:

Expenses:Salaries:Taxes and Benefits:Quebec:CC-RRQ(QPP)
Reconciled:

Expenses:Salaries:Training
Reconciled:

Expenses:Salaries:Vacation
Reconciled:

Expenses:Salaries:Support
Reconciled:

Expenses:Salaries:Lab
Reconciled:

Expenses:Subcontracts
Reconciled:

Sub-contracts  (Line 9110)


Expenses:Subcontracts:iField
Reconciled:

Expenses:Subcontracts:MITACS R&D
Reconciled:

Expenses:Taxes
Reconciled:

Expenses:Taxes:Corporate Impôt Federal
Reconciled:

Expenses:Taxes:Corporate Impôt Quebec
Reconciled:

Expenses:Taxes:TPS/TVQ
Reconciled:

Expenses:Taxes:TPS/TVQ:TPS
Reconciled:

Expenses:Taxes:TPS/TVQ:TVQ
Reconciled:

Expenses:Taxes:TPS/TVQ:TVQ:Fine
Reconciled:

Expenses:Federal Fines
Reconciled:

Expenses:Quebec Fines
Reconciled:

Expenses:Gratuities/Tips
Reconciled:


### Equity

Equity:Opening Balances
Reconciled:

Equity:Owners Contributions
Reconciled:

Equity:Owners Contributions:Employee1
Reconciled:

Equity:Retained Earnings
Reconciled:

Equity:Shareholders Contributions
Reconciled:

Equity:Shareholders Contributions:Employee2
Reconciled:

Equity:Shareholders Contributions:Employee3
Reconciled:

Equity:Shareholders Contributions:Employee1/Employee3
Reconciled:


### Other

Imbalance-CAD
Reconciled:

Orphan-CAD
Reconciled:

