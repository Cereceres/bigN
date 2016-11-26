# bigN
big numbers operation 
## Install

```bash
$ npm install bign
```

## Test

```bash
mocha test
```
## Using

```js
let BigN = require('../index')
let num = new BigN('23.234')
num.add('1234.1224').toString() // -> '1257.3564'
num.rest('1234.1224').toString() // -> '23.234'
new BigN('1.6').multiply('1.2').toString() // -> '1.92'
```
## Class  BigN(number[, decimalNumber])

receive the number like  string to be used and decimalNumber, if the decimalNumber is not
passed then the length of number is used

## Instance  rest(number) -> this

receive the number to be rested to instance number. Return itself instance.


## Instance  add(number) -> this

receive the number to be added to instance number. Return itself instance.

## Instance  multiply(number) -> this

receive the number to be multiplied to instance number. Return itself instance.
