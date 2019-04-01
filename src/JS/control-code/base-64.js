/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: Simple BASE64 algorithm.
*/

'use strict'

module.exports = {

  Base64: (value) => {
    var dictionary = [
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
      "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
      "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
      "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
      "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
      "y", "z", "+", "/"
    ];
		var quotient = 1, remainder = 0;
		var word = '';
		while (quotient > 0) {

			quotient = Math.floor(value / 64);
			remainder = value % 64;
			word = dictionary[remainder] + word;
			value = quotient;
		}
    return word;
  }
}
