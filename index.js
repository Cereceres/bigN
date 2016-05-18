'use strict'
class bigN {
  constructor (number, numDecimal) {
    number = number || 0
    let decimal = [ ]
    this.number = number.toString().split('.')
    this.number[ 1 ] && (decimal = this.number[ 1 ].split(''))
    this.decimal = numDecimal ? numDecimal : decimal.length
    this.number = this.number[ 0 ].split('')
    this.number = this.number.concat(decimal)
  }
  add (number) {
    let num = number.toString().split('.')
    let decimal = [ ]
    num[ 1 ] && (decimal = num[ 1 ].split(''))
    num = num[ 0 ].split('')
    num = num.concat(decimal)
    let a, b
    let _res = 0,
      res = [ ]
    let numDecimal = decimal.length > this.decimal ? decimal.length : this.decimal
    let max = numDecimal +
      ((num.length - decimal.length) > (this.number.length - this.decimal) ?
        num.length - decimal.length :
        this.number.length - this.decimal)
    let numMax = this.number.length - this.decimal + numDecimal
    let numMax_2 = num.length - decimal.length + numDecimal
    for (let i = 1; i <= max; i++) {
      a = this.number[ numMax - i ] !== undefined ? +(this.number[
        numMax - i ]) : 0
      b = num[ numMax_2 - i ] !== undefined ?
        +(
          num[ numMax_2 - i ]) :
        0
      res[ max - i ] = a + b + _res
      if (res[ max - i ] > 9) {
        _res = 1
        res[ max - i ] = res[ max - i ] % 10
      } else {
        _res = 0
      }
    }
    this.decimal = numDecimal
    this.number = res
    this.number = this.number = this.number.slice(this.toString().search(/0(?=[^0])/))
    return this
  }
  multiply (number) {
    let decimal = [ ]
    let num = number.toString().split('.')
    num[ 1 ] && (decimal = num[ 1 ].split(''))
    num = num[ 0 ].split('')
    num = num.concat(decimal)
    let numDecimal = decimal.length + this.decimal
    let max = num.length + this.number.length
    let res = [ ],
      _res,
      a, b, c
    for (var i = 1; i <= this.number.length; i++) {
      _res = 0

      a = +(this.number[ this.number.length - i ])
      for (var j = 1; j <= num.length; j++) {
        b = +(num[ num.length - j ] ? num[ num.length - j ] : 0)
        c = (i === 1) ? 0 : +(res[ max - j - i + 1 ]) || 0
        res[ max - j - i + 1 ] = a * b + _res + c
        if (res[ max - j - i + 1 ] > 9 && j !== num.length) {
          _res = Math.floor(res[ max - j - i + 1 ] / 10)
          res[ max - j - i + 1 ] = res[ max - j - i + 1 ] % 10
        } else if (res[ max - j - i + 1 ] > 9 && j === num.length) {
          res.splice.apply(res, [ max - j - i + 2 - res[ max - j - i + 1 ].toString()
            .length, res[ max - j - i + 1 ].toString()
            .length
          ].concat(res[ max - j - i + 1 ].toString().split('')))
        } else {
          _res = 0
        }
      }
    }
    this.decimal = numDecimal
    this.number = res(this.number[ 0 ] === undefined) &&
    (this.number = this.number.slice(1))
    this.number = this.number.slice(this.toString().search(/0(?=[^0])/))
    return this
  }
  rest (number) {
    let num = number.toString().split('.')
    let decimal = [ ]
    num[ 1 ] && (decimal = num[ 1 ].split(''))
    num = num[ 0 ].split('')
    num = num.concat(decimal)
    let a, b
    let _res = 0,
      res = [ ]
    let numDecimal = decimal.length > this.decimal ? decimal.length :
      this.decimal
    let max = numDecimal +
      ((num.length - decimal.length) > (this.number.length - this.decimal) ?
        num.length - decimal.length :
        this.number.length - this.decimal)
    let numMax = this.number.length - this.decimal + numDecimal
    let numMax_2 = num.length - decimal.length + numDecimal
    for (var i = 1; i <= max; i++) {
      a = this.number[ numMax - i ] !== undefined ? +(this.number[
        numMax - i ]) : 0
      b = num[ numMax_2 - i ] !== undefined ? +(num[ numMax_2 - i ]) :
        0
      if (a >= b) {
        res[ max - i ] = a - b - _res
        _res = 0
      } else {
        res[ max - i ] = a + 10 - b - _res
        _res = 1
      }
    }
    this.decimal = numDecimal
    this.number = res
    this.number = this.number.slice(this.toString().search(/0(?=[^0])/))
    return this
  }
  div (number, numDecimal) {
    let num = number.toString().split('.')
    let decimal = [ ]
    num[ 1 ] && (decimal = num[ 1 ].split(''))
    num = num[ 0 ].split('')
    num = num.concat(decimal)
    let min, max
    max = this.number.length
    min = num.length
    let dif = max - min
    dif = dif < 0 ? 0 : dif
    let res = [ ],
      a, b, _res
    numDecimal = numDecimal || this.decimal
    let n = numDecimal + dif - this.decimal + decimal.length
    console.log('this.number', this.number, 'num.join', num, 'n===>>', n)
    a = +(this.number.slice(0, (dif = 0) ? max : min).join(''))
    b = +(num.join(''))
    console.log('a=', a, 'b=', b)
    for (var i = 0; i <= n; i++) {
      res[ i ] = Math.floor(a / b)
      _res = a - b * res[ i ]
      console.log('res', res, '_res', _res)
      a = +(_res.toString().concat(this.number[ i + min ] === undefined ?
        0 : this.number[ i + min ]))
      console.log('a=', a, 'b=', b, '_res', _res, 'rss', res)
      if (!_res && ((i + min) > this.number.length)) {
        breack
      }
    }
    this.number = res
    this.number = this.number.slice(this.toString().search(/0(?=[^0])/))
    this.decimal = numDecimal
    return this
  }
  toString () {
    return this.number.slice(0, this.number.length - this.decimal)
      .concat('.')
      .concat(this.number.slice(this.number.length - this.decimal))
      .join('')
  }
}

module.exports = bigN
