'use strict';
let assert = require( 'assert' ),
  bigN = require( '../index' )
describe( 'Test for routines ob bigN', function ( ) {
  let num = new bigN( '23.234' )
  it( 'the sum test with', function ( ) {
    assert.equal( num.add( '1234.1224' ).toString( ), '1257.3564' );
  } );

  it( 'the rest test with', function ( ) {
    assert.equal( num.rest( '1234.1224' ).toString( ), '23.2340' );
  } );

  it( 'the multiply test with', function ( ) {
    console.log( 'multiply', num.number );
    assert.equal( num.multiply( '123.23' ).toString( ), '2863.125820' );
  } );

  it( 'the divition test with', function ( ) {
    console.log( 'divition', num.number );
    assert.equal( num.div( '123.23' ).toString( ), '23.233952' );
  } );

  it( 'the divition test with', function ( ) {
    assert.equal( num.div( '5', 0 ).toString( ), '23.233952' );
  } );
} );