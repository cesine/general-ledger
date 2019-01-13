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


Appendix A - Complete Listing of the GIFI
The following is a complete list of the GIFI items. Some of the items include more detail as to the type of information you could report in the item.

Example

1001 Cash

You can use this item to report bank drafts, bank notes, cheques, coins, currency, money orders, postal notes, and postdated cheques, as well as cash.

90122 Road costs

You could use this item to report snow removal as well as road costs.

Balance Sheet Information
Assets
Current assets

1000  Cash and deposits
1001  Cash bank drafts, bank notes, cheques, coins, currency, money orders, postal notes, and postdated cheques
1002  Deposits in Canadian banks and institutions - Canadian currency
1003  Deposits in Canadian banks and institutions - foreign currency
1004  Deposits in foreign banks - Canadian currency
1005  Deposits in foreign banks - foreign currency
1006  Credit union central deposits
1007  Other cash like instruments gold bullion and silver bullion
1060  Accounts receivable
claims receivable, dividends receivable, royalties receivable, and subsidies receivable
1061  Allowance for doubtful accounts
1062  Trade accounts receivable
1063  Allowance for doubtful trade accounts receivable
1064  Trade accounts receivable from related parties
1065  Allowance for doubtful trade accounts receivable from related parties
1066  Taxes receivable GST/HST receivable, income tax refunds receivable, and tax credits receivable
1067  Interest receivable
1068  Holdbacks receivable
1069  Leases receivable
1070  Allowance for doubtful amounts contained in leases receivable
1071  Accounts receivable from employees
1072  Allowance for doubtful accounts receivable from employees
1073  Amounts receivable from members of NPOs
This item is intended for corporations that are non-profit organizations to report amounts receivable from members.
1120  Inventories
1121  Inventory of goods for sale finished goods
1122  Inventory parts and supplies
1123  Inventory properties
This item is intended for companies whose primary activities are real estate, subdividing, or construction, and who have real estate held for sale.
1124  Inventory of aggregates
1125  Work in progress goods in process
1126  Raw materials
1127  Inventory of securities
This item is intended for companies such as brokers, stockbrokers, financial institutions, or investment companies that hold securities for sale.
1180  Short-term investments
short-term marketable securities
1181  Canadian term deposits short-term bearer deposit notes, collateral deposits, and guaranteed investment certificates
1182  Canadian shares
1183  Canadian bonds bond coupons, bond deposits, corporate bonds, government bonds, and debentures shown current
1184  Canadian treasury bills
1185  Securities purchased under resale agreements
1186  Other short-term Canadian investments
1187  Short-term foreign investments all types of foreign investment shown current
1240  Loans and notes receivable
1241  Demand loans receivable amounts such as call loans, day loans, or demand loans
1242  Other loans receivable
1243  Notes receivable
1244  Mortgages receivable
Items 1300 to 1303 - current amounts due from shareholders/directors, such as advances, loans, or notes

1300  Due from shareholder(s)/director(s)
1301  Due from individual shareholder(s)
1302  Due from corporate shareholder(s) due from parent company
1303  Due from director(s)
1360  Investment in joint venture(s)/partnership(s)
current investment or equity in joint venture(s), partnership(s), and syndicate(s)
1380  Due from joint venture(s)/partnership(s)
current amounts due from joint venture(s)/partnership(s), or syndicate(s), such as advances, loans, or notes
Items 1400 to 1403 - Related parties can refer to affiliate, associated, and subsidiary corporations.

Note
Current investment in a parent company should be reported at item 1400. However, item 1302 should be used for current due from a parent company.

1400  Due from/investment in related parties
1401  Demand notes from related parties amounts due from related parties such as call loans, day loans, or demand loans
1402  Interest receivable from related parties
1403  Loans/advances due from related parties
1460  Customers' liability under acceptances
This item is for financial institutions. Any amount reported in this item should be equal to the amount reported in the Liabilities section as "acceptances" (meaning, Item 2940 - Bankers' acceptances).
1480  Other current assets
1481  Deferred income taxes income taxes applicable to future years, and reserve for income taxes, shown current
1482  Accrued investment income
1483  Taxes recoverable/refundable
1484  Prepaid expenses
1485  Drilling advances
1486  Security/tender deposits
1599  Total current assets
Capital assets

Items 1600 to 2179 - capital assets - Throughout the GIFI, depreciation is referred to as amortization of tangible assets, depletion is referred to as amortization of natural resource assets, and amortization is referred to as amortization of intangible assets.

Items 1600 to 2009 - tangible capital assets - Item 2008 - Total tangible capital assets, represents the sum of all tangible capital assets reported, and item 2009 - Total accumulated amortization of tangible capital assets, represents the sum of all the accumulated amortization of the tangible capital assets reported, within items 1600 to 1922.

When reporting this breakdown, the net final amount of the tangible capital assets is not to be shown anywhere on the GIFI. However, if your financial statements show an amount for "fixed assets (net)" for which there is no breakdown, this could be reported in Item 2008 - Total tangible capital assets.

1600  Land
1601  Land improvements landscaping
1602  Accumulated amortization of land improvements
1620  Depletable assets
costs for mine-stripping, well drilling, or waste removal
1621  Accumulated amortization of depletable assets
1622  Petroleum and natural gas properties
1623  Accumulated amortization of petroleum and natural gas properties
1624  Mining properties
1625  Accumulated amortization of mining properties
1626  Deferred exploration and development charges
1627  Accumulated amortization of deferred exploration and development charges
1628  Quarries
1629  Accumulated amortization of quarries
1630  Gravel pits
1631  Accumulated amortization of gravel pits
1632  Timber limits
1633  Accumulated amortization of timber limits
1680  Buildings
1681  Accumulated amortization of buildings
1682  Manufacturing and processing plant
1683  Accumulated amortization of manufacturing and processing plant
1684  Buildings under construction
1740  Machinery, equipment, furniture, and fixtures
1741  Accumulated amortization of machinery, equipment, furniture, and fixtures
1742  Motor vehicles
1743  Accumulated amortization of motor vehicles
1744  Tools and dies
1745  Accumulated amortization of tools and dies
1746  Construction and excavating equipment
1747  Accumulated amortization of construction and excavating equipment
1748  Forestry and logging equipment
1749  Accumulated amortization of forestry and logging equipment
1750  Fishing gear and nets sonar equipment
1751  Accumulated amortization of fishing gear and nets
1752  Mining equipment
1753  Accumulated amortization of mining equipment
1754  Oil and gas systems pipelines and distribution systems
1755  Accumulated amortization of oil and gas systems
1756  Production equipment for resource industries
1757  Accumulated amortization of production equipment for resource industries
1758  Production equipment for other than resource industries
1759  Accumulated amortization of production equipment for other than resource industries
1760  Exploration equipment
1761  Accumulated amortization of exploration equipment
1762  Shipping equipment
1763  Accumulated amortization of shipping equipment
1764  Ships and boats
1765  Accumulated amortization of ships and boats
1766  Aircraft
1767  Accumulated amortization of aircraft
1768  Signs
1769  Accumulated amortization of signs
1770  Small tools
1771  Accumulated amortization of small tools
1772  Radio and communication equipment
1773  Accumulated amortization of radio and communication equipment
1774  Computer equipment/software
1775  Accumulated amortization of computer equipment/software
1776  Musical instruments
1777  Accumulated amortization of musical instruments
1778  Satellites
1779  Accumulated amortization of satellites
1780  Earth stations
1781  Accumulated amortization of earth stations
1782  Machinery and equipment under construction
1783  Transportation equipment
1784  Accumulated amortization of transportation equipment
1785  Other machinery and equipment
1786  Accumulated amortization of other machinery and equipment
1787  Furniture and fixtures
1788  Accumulated amortization of furniture and fixtures
1900  Other tangible capital assets
art, books, chinaware, cutlery, utensils, culverts, dams, golf courses, grain elevators, grandstands, swimming pools, towers, trailer parks, and uniforms
1901  Accumulated amortization of other tangible capital assets
1902  Logging roads
1903  Accumulated amortization of logging roads
1904  Asphalt and parking areas
1905  Accumulated amortization of asphalt and parking areas
1906  Wharves docks, float walks, and marinas
1907  Accumulated amortization of wharves
1908  Fences
1909  Accumulated amortization of fences
1910  Capital leases - buildings
1911  Accumulated amortization of capital leases - buildings
1912  Capital leases - equipment
1913  Accumulated amortization of capital leases - equipment
1914  Capital leases - vehicles
1915  Accumulated amortization of capital leases - vehicles
1916  Capital leases - others rented signs
1917  Accumulated amortization of capital leases - others
1918  Leasehold improvements
1919  Accumulated amortization of leasehold improvements
1920  Other capital assets under construction
1921  Campsites
1922  Accumulated amortization of campsites
2008  Total tangible capital assets
2009  Total accumulated amortization of tangible capital assets
Items 2010 to 2179 - intangible capital assets Item 2178 - Total intangible capital assets, represents the sum of all intangible capital assets reported, and item 2179 - Total accumulated amortization of intangible capital assets, represents the sum of all the accumulated amortization of the intangible capital assets reported, within items 2010 to 2077. When reporting this breakdown, the net final amount of the intangible capital assets is not to be shown anywhere on the GIFI. However, if your financial statements show an amount for "intangibles" for which there is no breakdown, this item could be reported in Item 2178 - Total intangible capital assets.

2010  Intangible assets
concessions, formulas, franchises, and organization costs
2011  Accumulated amortization of intangible assets
2012  Goodwill
2013  Accumulated amortization of goodwill
2014  Quota
2015  Accumulated amortization of quota
2016  Licences
2017  Accumulated amortization of licences
2018  Incorporation costs
2019  Accumulated amortization of incorporation costs
2020  Trademarks/patents
2021  Accumulated amortization of trademarks/patents
2022  Customer lists
2023  Accumulated amortization of customer lists
2024  Rights
2025  Accumulated amortization of rights
2026  Research and development
2027  Accumulated amortization of research and development
2070  Resource rights
2071  Accumulated amortization of resource rights
2072  Timber rights
2073  Accumulated amortization of timber rights
2074  Mining rights
2075  Accumulated amortization of mining rights
2076  Oil and gas rights
2077  Accumulated amortization of oil and gas rights
2178  Total intangible capital assets
2179  Total accumulated amortization of intangible capital assets
Long term assets
Items 2180 to 2183 - long term amounts due from shareholder(s)/director(s), such as advances, loans, or notes

2180  Due from shareholder(s)/director(s)
2181  Due from individual shareholder(s)
2182  Due from corporate shareholder(s) Due from parent company
2183  Due from director(s)
2190  Due from members
advances, loans, or notes to members of co-operatives or credit unions
2200  Investment in joint venture(s)/partnership(s) long-term investment or equity in joint venture(s), partnership(s), and syndicate(s)
2220  Due from joint venture(s)/partnership(s)
long-term amounts due from joint venture(s)/partnership(s), or syndicate(s), such as advances, loans, or notes
Items 2240 to 2250 - Related parties can refer to affiliate, associated, and subsidiary corporations.

Note
Long-term investment in a parent company should be reported in the appropriate item in this block. However, item 2182 should be used for long-term amounts due from a parent company.

2240  Due from/investment in related parties
2241  Due from/investment in Canadian related parties
2242  Shares in Canadian related corporations
2243  Loans/advances to Canadian related corporations
2244  Investment in Canadian related corporations at cost
2245  Investment in Canadian related corporations at equity
2246  Due from/investment in foreign related parties
2247  Shares in foreign related corporations
2248  Loans/advances to foreign related corporations
2249  Investment in foreign related corporations at cost
2250  Investment in foreign related corporations at equity
2280  Investment in co-tenancy investment in co-ownerships
2300  Long term investments
2301  Foreign shares
2302  Other types of foreign investments foreign investments in joint ventures, partnerships, bonds, and debentures
2303  Canadian shares
2304  Government of Canada debt government of Canada long-term bonds and debentures
2305  Canadian, provincial, and municipal government debt
2306  Canadian corporate bonds and debentures long-term bond coupons and bond deposits
2307  Debt securities
2308  Equity securities
2309  Securities purchased under resale agreements
2310  Central credit union shares
2311  Other Canadian long-term investments
2360  Long-term loans advances and notes shown long-term
2361  Mortgages
2362  Personal and credit card loans
2363  Business and government loans
2364  Line of credit
2420  Other long-term assets
investment tax credits, stock exchange seats, and utilities deposits
2421  Deferred income taxes income taxes applicable to future years, and reserve for income taxes, shown long term
2422  Deferred pension charges
2423  Deferred unrealized exchange losses
2424  Other deferred items/charges debt discount and expense, deferred development costs, deferred finance charges, deferred organization expense, lease inducements, tenant inducements, and cost on incomplete contracts
2425  Accumulated amortization of deferred charges
2426  Reserve fund
2427  Cash surrender value of life insurance
2589  Total long-term assets
2590  Assets held in trust
trust fund, trust assets, or funds held in escrow corporations such as collection agencies, funeral homes, insurance agencies, real estate agencies, travel agencies, and travel wholesalers would use this item. If an amount is reported in this item, there should be a balancing amount reported in Item 3470 - Amounts held in trust, in the liabilities section.
2599  Total assets
This item represents the total of all current, capital, long-term assets, and assets held in trust and must be reported (see "Validity check items" on page 5).
Liabilities
Current liabilities
2600  Bank overdraft
bank indebtedness
2620  Amounts payable and accrued liabilities
accrued liabilities, agreements payable, claims payable, rent payable, and utilities payable
2621  Trade payables
2622  Trade payables to related parties
2623  Holdbacks payable
2624  Wages payable
2625  Management fees payable
2626  Bonuses payable
2627  Employee deductions payable payroll deductions for employee benefits such as Employment Insurance, Canada Pension Plan, group insurance, and pension plans
2628  Withholding taxes payable
2629  Interest payable accrued interest payable
2630  Amounts payable to members of NPOs Intended for corporations that are non-profit organizations to report amounts payable to members.
2680  Taxes payable
capital taxes, foreign taxes, GST/HST, current income taxes, logging taxes, sales taxes, and tax credits payable
2700  Short term debt
corporate loans, demand loans, loans from foreign banks, and notes payable shown short term
2701  Loans from Canadian banks
2702  Liability for securities sold short
2703  Liability for securities sold under repurchase agreements
2704  Gold and silver certificates
2705  Cheques and other items in transit
2706  Lien notes
2770  Deferred income
deferred capital or book gain, unearned income, unearned interest, unearned service charges, and unrealized foreign exchange gain shown current
Items 2780 to 2783 - current amounts due to shareholder(s)/director(s), such as advances, loans, or notes

2780  Due to shareholder(s)/director(s)
2781  Due to individual shareholder(s)
2782  Due to corporate shareholder(s) due to parent company
2783  Due to director(s)
2840  Due to joint venture(s)/partnership(s)
current amounts due to joint venture(s)/partnership(s), and syndicate(s) such as advances, loans, or notes
Items 2860 to 2863 - Related parties can refer to affiliate, associated, and subsidiary corporations.
2860  Due to related parties
2861  Demand notes due to related parties
2862  Interest payable to related parties
2863  Advances due to related parties
2920  Current portion of long-term liability
2940  Bankers' acceptances
This item is for financial institutions. Any amount reported in this item should be equal to the amount reported in Assets as Item 1460 - Customers' liability under acceptances.
2960  Other current liabilities
progress payments shown current
2961  Deposits received bids, contract deposits, rental deposits, tenders, and security deposits
2962  Dividends payable
2963  Deferred income taxes income taxes applicable to future years and reserve for income taxes shown current
2964  Reserves for guarantees, warranties, or indemnities
2965  General provisions/reserves contingent liabilities, provision for losses on loans, and pension reserves shown current
2966  Crew shares
3139  Total current liabilities
Long-term liabilities

3140  Long-term debt
3141  Mortgages
3142  Farm credit corporation loan
3143  Chartered bank loan
3144  Credit Union/Caisse Populaire loan
3145  Provincial government loan
3146  Supply company loan
3147  Private loan
3148  Central, league, and federation loans
3149  Line of credit
3150  Liability for securities sold short
3151  Liability for securities sold under repurchase agreements
3152  Lien notes
3200  Deposit liabilities of financial institutions
This item applies to financial institutions and represents deposits made by customers.
3210  Bonds and debentures
3220  Deferred income
deferred capital or book gain, unearned income, unearned interest, unearned service charges, and unrealized foreign exchange gain shown long term
3240  Deferred income taxes
income taxes applicable to future years and reserve for income taxes shown long term
Items 3260 to 3263 - long-term amounts due to shareholder(s)/director(s), such as advances, loans, or notes

3260  Due to shareholder(s)/director(s)
3261  Due to individual shareholder(s)
3262  Due to corporate shareholder(s) due to parent company
3263  Due to director(s)
3270  Due to members advances
loans, or notes from members of co-operatives or credit unions
3280  Due to joint venture(s)/partnership(s)
. long-term amounts due to joint venture(s)/partnership(s), and syndicate(s) such as advances, loans, or notes
Items 3300 to 3302 - Related parties can refer to affiliate, associated, and subsidiary corporations.
3300  Due to related parties
3301  Amounts owing to related Canadian parties
3302  Amounts owing to related foreign parties
3320  Other long-term liabilities
minority shareholder interest and other deferred credits shown long term
3321  Long-term obligations/commitments/capital leases
3322  Reserves for guarantees, warranties, or indemnities
3323  Provision for site restoration dismantlement and abandonment costs, future removal, and site restoration costs
3324  Contributions to qualifying environmental trust environmental trust, mine reclamation, and reclamation of waste disposal sites
3325  General provisions/reserves contingent liabilities, provision for losses on loans, and pension reserves shown long term
3326  Preference shares restated
This item applies to preferred shares that have been restated as a liability and reported as a long-term liability.
3327  Member allocations allocation to members of credit unions and co- operatives
3328  Deferred revenue from incomplete contracts This is intended for contractors using the completion method of reporting revenue to report deferred revenue from incomplete contracts.
3450  Total long-term liabilities
3460  Subordinated debt
3470  Amounts held in trust
trust fund, trust liabilities, or funds held in escrow, corporations such as collection agencies, funeral homes, insurance agencies, real estate agencies, travel agencies, and travel wholesalers would use this item. If an amount is reported in this item, there should be a balancing amount reported in Item 2590 - Assets held in trust, in the assets section.
3499  Total liabilities
This item represents the total of all current and long-term liabilities and must be reported (see "Validity check items" on page 5).
Shareholder equity

3500  Common shares
3520  Preferred shares
3540  Contributed and other surplus
3541  Contributed surplus capital donations, capital grants, and paid-in surplus
3542  Appraisal surplus excess of appraisal value over cost, revaluation account, and revaluation surplus
3543  General reserve general reserves, inventory reserves, mortgage reserves, and security reserves
3570  Head office account
home office account and head office investment
3600  Retained earnings/deficit
3620  Total shareholder equity
This item represents the sum of all shareholder equity amounts and must be reported (see "Validity check items" on page 5).
3640  Total liabilities and shareholder equity
Retained Earnings Information
Retained earnings/deficit

3660  Retained earnings/deficit - start
3680  Net income/loss
Any amount reported in this item should be equal to the amount reported at Item 9999 Net income/loss after taxes and extraordinary items.
3700  Dividends declared
liquidating dividends, premium paid on redemption of shares, and stock dividends declared on shares
3701  Cash dividends
3702  Patronage dividends
3720  Prior period adjustments
3740  Other items affecting retained earnings
dividends credited to investment account You may choose to report dividends received in retained earnings rather than on the income statement. In this case, you should add the dividend back on Schedule 1 - Net income (loss) for income tax purposes.
3741  Share redemptions
3742  Special reserves
3743  Currency adjustments
3744  Unusual revenue items
3745  Interfund transfer
This is intended for corporations that are non-profit organizations to report fund amounts transferred to/from retained earning from/to the income statement.
3849  Retained earnings/deficit - end
This item represents the sum of all retained earnings amounts and must be reported if you are reporting retained earnings (see "Validity check items" on page 5). If there is an amount reported in this item, the same amount should be reported in Item 3600 - Retained earnings/deficit, in the shareholder equity section.
Income Statement Information
0001  Operating name
You should complete this section if your operating name is different from the corporation name (e.g., 111111 Ontario Ltd., operating as Maggie's Muffins).
0002  Description of the operation
You must complete the description of the operation when you are reporting more than one income statement, and the activity is different from the major business activity. For more information on reporting multiple lines of business, refer to Appendix B of this guide.
0003  Sequence Number
When you report more than one income statement, you need a sequence number for each statement. The income statement relating to the main activity must have sequence number 01. The supplementary income statements would be numbered consecutively from 02.
Revenue

8000  Trade sales of goods and services
This item is for corporations who are not involved in the resource industry (Items 8040 to 8053) or the fishing industry (Items 8160 to 8166), but whose main source of income is the sale of a product or service. Amounts in this item may be reported net of discounts allowed on sales, sales rebates, volume discounts, returns, and allowances.
8020  Sales of goods and services to related parties
See explanation for item 8000 above.
8030  Interdivisional sales
8040  Sales from resource properties
8041  Petroleum and natural gas sales
8042  Petroleum and natural gas sales to related parties
8043  Gas marketing
8044  Processing revenue
8045  Pipeline revenue
8046  Seismic sales
8047  Mining revenue
8048  Coal revenue
8049  Oil sands revenue
8050  Royalty income
8051  Oil and gas partnership/joint venture income/loss
8052  Mining partnership/joint venture income/loss
8053  Other production revenue well operating fees and sulfur revenue
8089  Total sales of goods and services
8090  Investment revenue
8091  Interest from foreign sources This item may be reported gross of withholding taxes. Withholding taxes would then be reported in Item 9283 Withholding taxes.
8092  Interest from Canadian bonds and debentures
8093  Interest from Canadian mortgage loans
8094  Interest from other Canadian sources finance income, guaranteed investment certificates interest, interest on overpaid taxes, and loan interest
8095  Dividend income
8096  Dividends from Canadian sources
8097  Dividends from foreign sources
This item may be reported gross of withholding taxes. Withholding taxes would then be reported in Item 9283 Withholding taxes.
8100  Interest income (financial institutions)
8101  Loan interest
8102  Securities interest
8103  Deposits with banks interest
8120  Commission revenue
commissions earned on the sale of products or services by businesses such as advertising agencies, brokers, insurance agents, lottery ticket sales, sales representatives, or travel agencies Some corporations may present sales and cost of sales on their income statement, with commission earned being the net amount. In these situations, corporations should report only the commission on the GIFI.
Example
Lottery ticket sales  $40,000
Cost of lottery tickets $25,000
Commission  $15,000
This would be reported as: Item 8120 Commission revenue 15000
Compensation could also be reported in this item (for example, compensation for collecting sales tax).
8121  Commission income on real estate transactions
8140  Rental revenue
revenue from the renting of boats, hotel or motel rooms, machinery or equipment, and storage lockers
8141  Real estate rental revenue amounts received as income from renting or leasing of apartments, commercial buildings, land, office space, residential housing, and shopping centres This item could also be used to report income from investments in co-tenancies and co-ownerships.
8142  Film rental revenue
8150  Vehicle leasing
long-term vehicle leasing and short term vehicle leasing
8160  Fishing revenue
8161  Fish products
8162  Other marine products amounts received from the sale of flippers, herring roe, herring scales, Irish moss, kelp, seal meat, and seaweed
8163  Fishing grants, credits, and rebates
8164  Fishing subsidies
8165  Compensation for loss of fishing income or property amounts received from The Atlantic Groundfish Strategy (TAGS) or insurance proceeds
8166  Sharesman income
Items 8210 to 8212 - realized gains/losses on disposal of assets - These items represent the net amount of proceeds over net book value on the disposal or sale of an asset.

Note
Losses on disposal/sale of assets shown as an expense should be reported in these items as a negative.

8210  Realized gains/losses on disposal of assets
Gain/loss or profit/loss on disposal/sale of capital assets
8211  Realized gains/losses on sale of investments Profit/loss on disposal of investments or marketable securities
8212  Realized gains/losses on sale of resource properties
8220  NPO amounts received
8221  Membership fees
8222  Assessments
8223  Gifts
8224  Gross sales and revenues from organizational activities
Items 8230 to 8250 - other revenue - This block of items is for secondary sources of income. Although there are items in this block that are often main sources of income, Item 8000 - Trade sales of goods and services, should still be used to report the main income.

Example
A corporation, whose main source of revenue is consulting fees, would choose Item 8000 - Trade sales of goods and services, to report this income.

However, if the corporation's main source of income is from architectural design, but there is secondary income from consulting, the architectural income would be reported in Item 8000 and the consulting income in Item 8241 - Consulting fees.

8230  Other revenue
gain on settlement of a debt and miscellaneous revenue
8231  Foreign exchange gains/losses amortization of deferred exchange gains and losses and realized gains and losses on foreign currency
8232  Income/loss of subsidiaries/affiliates This item is for corporations that report investment in subsidiary corporations on the equity basis.
8233  Income/loss of other divisions
8234  Income/loss of joint ventures This item is for corporations that report investments in joint ventures on the equity basis.
8235  Income/loss of partnerships This item is for corporations that report investments in partnerships on the equity basis.
Note
A loss on foreign exchange, subsidiaries/affiliates, other divisions, joint ventures or partnerships shown as an expense should be reported in the appropriate item (Items 8231 to 8235) as a negative.

8236  Realization of deferred revenues realization of interest income, realization of instalment payments, and realization of service charges
8237  Royalty income other than resource royalty income or royalty fees from computer programs, copyrights, motion pictures, or patents
8238  Alberta royalty tax credits
8239  Management and administration fees
8240  Telecommunications revenue
8241  Consulting fees
8242  Subsidies and grants government assistance and subvention payments (for non-fishing corporations), federal, provincial, or municipal grants received by corporations that are non-profit organizations
8243  Sale of by-products secondary income earned by a garage selling discarded oil or tires to be used for other than the intended use, or a restaurant selling discarded food as pig feed
8244  Deposit services
8245  Credit services
8246  Card services
8247  Patronage dividends
8248  Insurance recoveries life insurance proceeds on the death of insured executives
8249  Expense recoveries
8250  Bad debt recoveries
8299  Total revenue
This item represents the sum of all revenue amounts. It must be reported if there is no farming revenue (see "Validity check items" on page 5).
Cost of sales
8300  Opening inventory
8301  Opening inventory - finished goods
8302  Opening inventory - raw materials
8303  Opening inventory - goods in process opening inventory - work in progress
8320  Purchases/cost of materials
cost of merchandise sold, fuel and purchased power, manufacturing supplies used, materials, and merchandise purchased This item could be reported net of discounts earned on purchases.
8340  Direct wages
commissions, labour, production wages, and supervision when shown in cost of sales
8350  Benefits on direct wages
8360  Trades and sub-contracts
contract labour, custom work, sub-contract labour, and outside labour
8370  Production costs other than resource
8400  Resource production costs
gas processing, oil and gas operating expenses, oil and gas production, milling, smelting, and refining
8401  Pipeline operations
8402  Drilling
8403  Site restoration costs future removal costs
8404  Gross overriding royalty
8405  Freehold royalties
8406  Other producing properties rental freehold lease rentals and freehold delay rentals
8407  Prospect/geological digital processing, geochemical work, geophysical work, gravity meters, magnetic playbacks, seismographs, staking, and velocity surveys
8408  Well operating, fuel and equipment
8409  Well abandonment and dry holes
8410  Other lease rentals
8411  Exploration expenses aerial surveys
8412  Development expenses stripping costs
8435  Crown charges
8436  Crown royalties
8437  Crown lease rentals
8438  Freehold mineral tax
8439  Mining taxes
8440  Oil sand leases
8441  Saskatchewan resource surcharge
8450  Other direct costs
8451  Equipment hire and operation
8452  Log yard barker, bucking, clipper, log sorting, and sawing
8453  Forestry costs cutting, firefighting supplies, scaling, and silviculture
8454  Logging road costs road clearing, ploughing, and grating
8455  Stumpage costs
8456  Royalty costs royalties paid to holders of copyrights, movies, patents, performing rights, and trademarks, found in cost of sales
8457  Freight in and duty customs and excise duty
8458  Inventory write down revaluation of inventory and inventory adjustments
8459  Direct cost amortization of tangible assets amortization of leasehold improvements and amounts referred to as depreciation shown in cost of sales
8460  Direct cost amortization of natural resource assets amounts referred to as depletion shown in cost of sales
8461  Overhead expenses allocated to cost of sales amounts reported under cost of sales that are normally considered operating expenses
8500  Closing inventory
8501  Closing inventory - finished goods
8502  Closing inventory - raw materials
8503  Closing inventory - goods in process closing inventory - work in progress
8518  Cost of sales
This item represents the sum of all cost of sales amounts.
8519  Gross profit/loss
This item represents the net amount of Item 8089 Total sales of goods and services, less Item 8518 Cost of sales. It may also be referred to as gross margin.
Operating expenses
8520  Advertising and promotion
8521  Advertising catalogues, media expenses, and publications
8522  Donations charitable donations, donations to the crown, and political donations
8523  Meals and entertainment tickets (theatre, concert, athletic event, etc.)
8524  Promotion booths, demonstrations/presentations, displays, prospectus, samples, and seminars (given)
8570  Amortization of intangible assets
amortization of intangible assets such as deferred charges, goodwill, patents, franchises, copyrights, trademarks, organization costs, and research and development costs
8590  Bad debt expense
allowance for bad debts, allowance/provision for doubtful accounts, bad debt, bad debt written-off, provision for bad debts, and reserve for bad debt
8610  Loan losses
This item is for loans, mortgages, and other loan-type amounts written off.
8611  Provision for loan losses provision/allowance for loan, mortgage, or credit losses
8620  Employee benefits
association dues, clothing allowance, lodging, payroll deductions/levies/taxes, and room and board
8621  Group insurance benefits medical, dental, and life insurance plans
8622  Employer's portion of employee benefits Canada Pension Plan, company pension plan, Employment Insurance, and Workers' Compensation
8623  Contributions to deferred income plans contributions to a registered pension plan, deferred profit sharing plan, employee profit sharing plan, and registered supplementary unemployment benefit plan
8650  Amortization of natural resource assets
amounts referred to as depletion
8670  Amortization of tangible assets
amortization of leasehold improvements and amounts referred to as depreciation
8690  Insurance
bonding, fire insurance, liability insurance, premium expenses, property insurance, and vehicle insurance
8691  Life insurance on executives insurance policies where the beneficiary is the corporation rather than the estate of the executive
8710  Interest and bank charges
finance charges, bank charges, and interest payments on capital leases
8711  Interest on short-term debt
8712  Interest on bonds and debentures amortization of bond discounts
8713  Interest on mortgages amortization of mortgage discount or expense
8714  Interest on long-term debt
8715  Bank charges
8716  Credit card charges interest on credit cards
8717  Collection and credit costs
8740  Interest paid (financial institutions)
8741  Interest paid on deposits
8742  Interest paid on bonds and debentures
8760  Business taxes, licences, and memberships
beverage licences, business charges, motor vehicle licences and/or registration permits, and trade licences
8761  Memberships dues and subscriptions
8762  Business taxes business tax, provincial capital tax (excluding Nova Scotia and New Brunswick taxes on large corporations), bridge tolls, gross receipt tax, health and education tax, hospital tax, permits, road tolls, and taxes on leases
8763  Franchise fees
8764  Government fees
8780  New Brunswick tax on large corporations
8790  Nova Scotia tax on large corporations
8810  Office expenses
8811  Office stationery and supplies
8812  Office utilities utility expenses related to an office such as electricity, gas, heating, hydro, and telephone
8813  Data processing word processing
8860  Professional fees
engineering fees, professional services, and surveyor fees
8861  Legal fees lawyer and notary fees
8862  Accounting fees bookkeeping
8863  Consulting fees
8864  Architect fees architectural design and illustration fees and landscape architect fees
8865  Appraisal fees real estate and jewellery appraisal, and financial valuation services
8866  Laboratory fees
8867  Medical fees
8868  Veterinary fees breeding fees
8869  Brokerage fees
8870  Transfer fees land and property transfer fees
8871  Management and administration fees
8872  Refining and assay
8873  Registrar and transfer agent fees
8874  Restructuring costs reorganization costs
8875  Security commission fees
8876  Training expense animal training, management training, and staff development
8877  Studio and recording
8910  Rental
rental expenses for arena, boat/vessel/ship, coal and lumber yards, railway sidings, safety deposit box/vaults, and parking charges
8911  Real estate rental apartment, building, land, and office rentals
8912  Occupancy costs
8913  Condominium fees
8914  Equipment rental rental expenses for computer equipment, film, office machines, and road and construction equipment
8915  Motor vehicle rentals
8916  Moorage (boat) dock and wharf space
8917  Storage rental expense for garages and warehouses
8918  Quota rental forestry and logging quota rental expenses
8960  Repairs and maintenance
aircraft repairs and maintenance
8961  Repairs and maintenance - buildings premises upkeep
8962  Repairs and maintenance - vehicles
8963  Repairs and maintenance - boats
8964  Repairs and maintenance - machinery and equipment gas and power line repairs and maintenance
9010  Other repairs and maintenance
janitorial services, landscaping, and yard maintenance
9011  Machine shop expense
9012  Road costs snow removal costs
9013  Security alarm system and surveillance equipment repairs and maintenance
9014  Garbage removal
9060  Salaries and wages
amounts not found in cost of sales such as administrative salaries, casual labour, cost of living allowance, down time, fees to employees, minimum wage levies, payroll remuneration, severance pay, supervision, and vacation pay
9061  Commissions
9062  Crew share
9063  Bonuses incentive compensation
9064  Directors fees
9065  Management salaries officers salaries
9066  Employee salaries office salaries
9110  Sub-contracts
contract labour, contract work, custom work, and hired labour
9130  Supplies
medical supplies, veterinary drugs and supplies, wrapping and packing supplies
9131  Small tools
9132  Shop expense
9133  Uniforms
9134  Laundry dry cleaning
9135  Food and catering
9136  Fishing gear
9137  Nets and traps
9138  Salt, bait, and ice
9139  Camp supplies
9150  Computer-related expenses
9151  Upgrade updates to computer software
9152  Internet
9180  Property taxes
municipal and realty taxes
9200  Travel expenses
airfare, hotel rooms, travel allowance, travel, and accommodations
9201  Meetings and conventions seminars attended
9220  Utilities
9221  Electricity hydro
9222  Water
9223  Heat
9224  Fuel costs coal, diesel, fuel, natural gas, oil, and propane for heating and cooking
9225  Telephone and telecommunications cellular telephone, fax machine, and pager
9270  Other expenses
9271  Cash over/short
9272  Reimbursement of parent company expense portion of expenses owing to parent
9273  Selling expenses
9274  Shipping and warehouse expense
9275  Delivery, freight and express courier, customs, delivery and installation, distribution, ferry charges, freight and cartage, freight and duty, shipping and transportation
9276  Warranty expenses guarantee costs
9277  Royalty expenses - resident amounts reported as non-resource royalties paid to Canadian residents such as copyrights, movies, patents, performing rights, and trademarks
9278  Royalty expenses - non-resident amounts reported as non-resource royalties paid to non-residents such as copyrights, movies, patents, performing rights, and trademarks
9279  Dumping charges
9280  Land fill fees
9281  Vehicle expenses automobile expenses, gas, motor vehicle fuel, tires, and vehicle washing
9282  Research and development
9283  Withholding taxes
9284  General and administrative expenses marketing and administration, office and general expenses, selling and administrative expenses
9285  Interdivisional expenses
9286  Interfund transfer for corporations including non-profit organizations to report fund amounts transferred to or from the income statement from or to retained earnings
9367  Total operating expenses
This item represents the sum of all operating expense amounts.
9368  Total expenses
This item must be reported if there are no farming expenses (see "Validity check items" on page 5). Any amount reported in this item should be equal to the amount reported at Item 8518 Cost of sales plus the amount reported at Item 9367 Total operating expenses.
9369  Net non-farming income
The amount reported should be equal to the amount reported at Item 8299 Total revenue, minus the amount reported at Item 9368 Total expenses.
Farming Income Statement Information
Cash vs. Accrual
As a farming corporation, you may choose to report your income using the cash method rather than the accrual method. If you are involved in more than one business activity, only your farming business can use the cash method.

0001  Operating name
You should complete this section if your operating name is different from the corporation name (for example, 111111 Ontario Ltd., operating as Maggie's Muffins).
0002  Description of the operation
You must complete the description of the operation when you are reporting more than one income statement, and the activity is different than the major business activity. For more information on reporting multiple lines of business, refer to page 27 of this guide.
0003  Sequence Number
When you report more than one income statement, you need a sequence number for each statement. The income statement relating to the main activity must have sequence number 01. The supplementary income statements would be numbered consecutively from 02.
Farming revenue

9370  Grains and oilseeds
mustard seed, rye, and sunflower seeds
9371  Wheat Durum
9372  Oats
9373  Barley
9374  Mixed grains
9375  Corn
9376  Canola
9377  Flaxseed
9378  Soya beans
9379  Wheat board payments
9420  Other crop revenues
herbs, hops, and sugar beets
9421  Fruit
9422  Potatoes
9423  Vegetables
9424  Tobacco
9425  Greenhouse and nursery products greenhouse or nursery products such as flowers, greenhouse vegetables, horticultural products, ornamental plants, rooted cuttings, seeds and bulbs, shrubs, sod and turf, and trees
9426  Forage crops alfalfa, alsike, clover, clover seeds, fescue, grass seed, hay, and timothy
9470  Livestock and animal products revenue
revenue received from animal pelts, apiary operation, bison, chinchilla, deer, dog, elk, fox, goats, honey products, mink, market livestock income, rabbit, and wool
9471  Cattle revenue received from the sale of bulls, calves, and cows
9472  Swine revenue received from the sale of hogs and pigs
9473  Poultry revenue received from the sale of chicken, ducks, geese, and turkeys
9474  Sheep and lambs
9475  Pregnant mare urine (PMU)
9476  Milk and cream (excluding dairy subsidies)
9477  Eggs for consumption
9478  Hatching eggs
9479  Aquaculture (hatching and raising)
9480  Horses (breeding and meat) revenue received from the sale of ponies, and other equine animals
9520  Other commodities
revenue received from ginseng, mushrooms, ostriches, and stud services
9521  Maple products
9522  Artificial insemination
9523  Semen production
9524  Embryo production revenue received from embryo transplants
9540  Program payment revenues
Animal Contagious Diseases Act payments, farm subsidy, farm-support payments, grants, and stabilization subsidy
9541  Dairy subsidies
9542  Crop insurance insurance proceeds from federal or provincial programs for loss of crops
9543  NISA payments
9544  Disaster Assistance Program payments
9570  Rebates
9571  Rebates - fuel
9572  Rebates - interest
9573  Rebates - property taxes
9574  Resales, rebates, GST for NISA eligible expenses
9575  Rebates, GST for NISA non-eligible expenses
9600  Other farm revenues/losses
sale of land, soil or stone, payment in kind, personal consumption benefit, and quality bonus
9601  Custom or contract work seed cleaning/drying/packing/treating, crop dusting or spraying, custom combining/harvesting, custom seeding, custom spraying, and custom trucking/hauling
9602  Wood sales amounts reported as income from a farmer's woodlot such as Christmas trees, firewood, logs, lumber, and poles
9603  Horse racing
9604  Insurance proceeds insurance proceeds for the loss of a building to fire or the loss of livestock to disease
9605  Patronage dividends certificate of indebtedness
9606  Rental income building, land, and pasture rental
9607  Interest income
9608  Dividend income
9609  Gains/losses on disposal of assets book gains/losses, gain/loss on disposal of fixed assets, profit/loss on disposal of fixed assets, profit/loss on sale of investments, and recaptured depreciation
Note
Losses on disposal/sale of assets shown as a farm expense should be reported in this item as a negative.
9610  Gravel
9611  Trucking
9612  Resale of commodities purchased
9613  Leases (gas, oil, well, surface, etc.)
9614  Machine rentals
9615  Farming partnership income/loss
9616  Farming joint venture income/loss
9650  Non-farming income
If you are not using items 8000 to 8299, use this item to report any non- farming income of a farming corporation.
9659  Total farm revenue
This item represents the sum of all farm revenue amounts plus any amount in item 9650. Item 9659 must be reported if there are no amounts in any of items 8000 to 8299 (see "Validity check items").
Farming expenses

Cost of Sales - The farming income and expense section of the GIFI does not include an item for cost of sales. If a farming corporation has cost of sales with no breakdown, this should be reported in the most appropriate farm expense item.

Example
A cost of sales that consists mainly of hog purchases would be reported in Item 9712 - Livestock purchases.

9660  Crop expenses
water purchases or water rights for irrigation, seed cleaning, and crop supplies
9661  Containers, twine and baling wire
9662  Fertilizers and lime chemicals
9663  Pesticides fungicides, herbicides, and insecticides
9664  Seeds and plants
9665  Insurance premiums (crop) NISA ACS
9710  Livestock expenses
Dairy Herd Improvement Association animal grading, dairy, or livestock supplies
9711  Feed, supplements, straw, and bedding purchased dairy rations and forage
9712  Livestock purchases
9713  Veterinary fees, medicine, and breeding fees artificial insemination, disease testing, embryo transplants, neutering, semen, spaying, and stud service
9714  Minerals and salts
9760  Machinery expenses
9761  Machinery insurance
9762  Machinery licences
9763  Machinery repairs
9764  Machinery fuel lubricants
9765  Machinery lease
9790  General farm expenses
milk testing, negative farm support payments, and silage preservation
9791  Amortization of tangible assets amortization of leasehold improvements and amounts referred to as depreciation
9792  Advertising, marketing costs, and promotion
9793  Bad debt allowance for bad debts, allowance/provision for doubtful accounts, bad debt, bad debt written-off, provision for bad debts, and reserve for bad debt
9794  Benefits related to employee salaries contributions to deferred income plans (DPSP/EPSP/RPP), employer's portion of employee benefits (CPP/EI/WCB), group insurance benefits (dental/life/medical plans), payroll deductions, and lodging/room and board
9795  Building repairs and maintenance
9796  Clearing, levelling, and draining land expenses from building a road, digging/drilling a water well, installing land drainage, ploughing land, and bringing public utilities to the farm
9797  Crop insurance, Revenue Protection Program, and stabilization premiums
9798  Custom or contract work egg cleaning/grading/sorting/spraying, cheese aging, and contract harvesting/combining/crop dusting
9799  Electricity
9800  Fence repairs and maintenance
9801  Freight and trucking delivery and distribution costs and shipping
9802  Heating fuel and curing fuel coal, oil, natural gas, and fuel for curing tobacco/crop drying/greenhouses
9803  Insurance program overpayment recapture
9804  Other insurance premiums farm insurance, private crop insurance, livestock insurance, and business interruption insurance premiums
9805  Interest and bank charges finance charges, interest on a farm loan, interest on long-term debt, and interest on a mortgage
9806  Marketing board fees
9807  Memberships/subscription fees association fees
9808  Office expenses farm-related office expenses such as accounting/receipt books, invoices, and stationery
9809  Professional fees amounts reported as farm-related expenses such as accounting/bookkeeping fees, data processing costs, and legal fees
9810  Property taxes land, municipal, and realty taxes
9811  Rent - land and buildings
9812  Rent - machinery
9813  Other rental expenses
9814  Salaries and wages
9815  Salaries and wages other than spouse or dependants salaries for farmhand and self
9816  Salaries and wages paid to dependants
9817  Selling costs
9818  Supplies
9819  Motor vehicle expenses automobile expenses, gas, motor vehicle fuel, propane, tires, vehicle repairs and maintenance, and vehicle washing
9820  Small tools
9821  Soil testing
9822  Storage/drying
9823  Licences/permits
9824  Telephone
9825  Quota rental (tobacco, dairy)
9826  Gravel
9827  Purchases of commodities resold
9828  Salaries and wages paid to spouse
9829  Motor vehicle interest and leasing costs
9830  Prepared feed
9831  Custom feed
9832  Amortization of intangible assets
9833  Amortization of milk quota
9834  Travel expenses
9835  Capital/business taxes capital taxes and business taxes
9850  Non-farming expenses
If you are not using items 8300 to 9368, use this item to report any non- farming expenses of a farming corporation.
9870  Net inventory adjustment
This item could be used to report the farm's opening inventory less closing inventory.
Note
If the closing inventory is greater than the opening inventory, this item should be reported as a negative.
9898  Total farm expenses
This item represents the sum of all farm expense amounts including any amount in item 9850. Item 9898 must be reported if there are no amounts in any of items 8300 to 9368 (see "Validity check items".
9899  Net farm income
The amount reported should be equal to the amount reported at Item 9659 Total farm revenue, minus the amount reported at Item 9898 Total farm expenses.
9970  Net income/loss
before taxes and extraordinary items This item represents the sum of Item 9369 - Net non-farming income, and Item 9899 - Net farm income.
Extraordinary items and income taxes

9975  Extraordinary item(s)
Included in this item are gains/losses resulting from events that:
are not expected to occur regularly over a period of years;
do not typify normal business activities; and
do not depend primarily on decisions or determinations by management.

Examples include the expropriation of a corporation's land and buildings for a highway, the destruction of a large portion of a wheat crop by a tornado, or an explosion in a nuclear reactor resulting in high-level radioactive emission.
9976  Legal settlements settlement of royalties
9980  Unrealized gains/losses
unrealized gains/losses resulting from the adjustment of book values on the revaluation of assets
9985  Unusual items
asset valuation adjustments such as write-downs and write- offs to net realizable values, items to be scrapped, and gains/losses from discontinued operations or wind-up of subsidiaries/affiliates This item represents unusual and non-recurring items that do not meet the criteria set out for extraordinary gains/losses.
9990  Current income taxes
Canadian income taxes, federal income/large corporation tax, previous year adjustment to federal income/large corporation tax, and provincial income taxes
9995  Deferred income tax provision
Canadian income taxes deferred, provision for deferred income taxes, and provision for future income taxes
9999  Net income/loss after taxes and extraordinary items
This item represents the net amount of:
Item 9970 - Net income/loss before taxes and extraordinary items minus
Item 9975 - Extraordinary item(s) minus
Item 9976 - Legal settlements plus
Item 9980 - Unrealized gains/losses minus
Item 9985 - Unusual items minus
Item 9990 - Current income taxes minus
Item 9995 - Deferred income tax provision

and must be reported (see "Validity check items").
