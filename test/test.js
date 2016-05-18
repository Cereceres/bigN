'use strict'
let assert = require('assert'),
  bigN = require('../index')
describe('Test for routines ob bigN', function () {
  let num = new bigN('23.234')
  it('the sum test with', function () {
    assert.equal(num.add('1234.1224').toString(), '1257.3564')
  })

  it('the rest test with', function () {
    assert.equal(num.rest('1234.1224').toString(), '23.2340')
  })

  it('the multiply test with', function () {
    assert.equal(new bigN('1.6').multiply('1.2').toString(),
      '1.92')
  })

  it('the divition test with', function () {
    assert.equal(new bigN('1.6').div('2').toString(), '0.8')
  })

  it('the divition test with', function () {
    let n = num.div('5', 0).toString()
    console.log('n=', n)
    assert.equal(n, '23.233952')
  })
})
