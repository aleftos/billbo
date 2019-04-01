/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: Character left filler.
*/
'use strict'

module.exports = {
    paddy: (num, length, charMask) =>  {
      let padChar = typeof charMask !== 'undefined' ? charMask : '0';
      let pad = new Array(1 + length).join(padChar);
      return (pad + num).slice(-pad.length);
  }
}

/*
  * Example:
  * var fu = paddy(14, 5); // 00014
  * var bar = paddy(2, 4, '#'); // ###2
*/