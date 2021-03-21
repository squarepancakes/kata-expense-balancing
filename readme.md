### SUPERMARKET

## DESCRIPTION

An implementation of the Checkout problem/kata in JS.

## INSTALLATION

Clone this repositiory and run `npm install`

## PROBLEM DEFINITION

For an online store:

**Code Name Price**

- 001 Travel Card Holder $9
- 002 Personalised cufflinks $45
- 003 Kids T-shirt $19

Our marketing team want to offer promotions as an incentive for our customers to purchase these items.

If you spend over $60, then you get 10% off your purchase If you buy 2 or more travel card holders then the price drops to $8.50.

Our check-out can scan items in any order, and because our promotions will change, it needs to be flexible regarding our promotional rules.

Implement a checkout system that fulfills these requirements.

**Test data**

- Basket: 001,002,003 Total price expected: $71.10
- Basket: 001,003,001 Total price expected: $36
- Basket: 001,002,001,003 Total price expected: $81
