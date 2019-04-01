/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: Formatting date into Bolivian bill way.
*/
'use strict'

module.exports = {
  billDateFormat: (billDate) => {
    let months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre'
    ];
    return billDate.substring(8, 10)
      + ' de '
      + months[Number(billDate.substring(5, 7)) - 1]
      + ' de '
      + billDate.substring(0, 4);
  }
}
