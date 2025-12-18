/** @license Apache-2.0 */

'use strict';

/**
* Test whether two single-precision complex floating-point numbers are approximately the same value within a specified number of ULPs (units in the last place).
*
* @module @stdlib/complex-float32-base-assert-is-almost-same-value
*
* @example
* var EPS = require( '@stdlib/constants-float32-eps' );
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
* var isAlmostSameValue = require( '@stdlib/complex-float32-base-assert-is-almost-same-value' );
*
* var z1 = new Complex64( 1.0, 3.0 );
* var z2 = new Complex64( 1.0+EPS, 3.0 );
*
* var bool = isAlmostSameValue( z1, z2, 0 );
* // returns false
*
* bool = isAlmostSameValue( z1, z2, 1 );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
