/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description:
 *   NIT_EMISOR,
 *   NÚMERO_FACTURA,
 *   FECHA_HORA = getCUFTime(),    // default = getTime
 *   SUCURSAL = 0,                 // default = CASA MATRÍZ
 *   MODALIDAD = 1,                // default = ELECTRÓNICA
 *   TIPO_EMISION = 1,             // default = ONLINE
 *   CÓDIGO_DOCUMENTO_FISCAL = 1,  // default = FACTURA
 *   TIPO_DOCUMENTO_SECTOR = 1,    // default = FACTURA ESTÁNDAR
 *   POS = 0                       // default = NO CORRESPONDE
*/
let cuf = require('../lib/cuf');

console.log(
  cuf.cuf(
    123456789,
    1,
    20190113163721231
  )
)

console.log(
  cuf.getCUF({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '1',
    FECHA_HORA: '20190113163721231'
  })
)

console.log(
  cuf.getCUF({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '1',
    FECHA_HORA: cuf.getCUFTime()  // * local time
  })
)

console.log(
  cuf.getCUF(
    {
      NIT_EMISOR: '123456789',
      NÚMERO_FACTURA: '29',
      FECHA_HORA: 20190113163721249,  // * Numfer type is accepted
      SUCURSAL: '0',
      MODALIDAD: '1',
      TIPO_EMISIÓN: '2',
      CÓDIGO_DOCUMENTO_FISCAL: '2',
      TIPO_DOCUMENTO_SECTOR: '6',
      POS: '0'
    }
  )
)

console.log(
  cuf.getCUF(
    {
      NIT_EMISOR: '123456789',
      NÚMERO_FACTURA: '29',
      FECHA_HORA: 20190113163721249,
      SUCURSAL: '0',
      MODALIDAD: '1',
      TIPO_EMISIÓN: '2A',           // * return ERROR
      CÓDIGO_DOCUMENTO_FISCAL: '2',
      TIPO_DOCUMENTO_SECTOR: '6',
      POS: '0'
    }
  )
)

console.log(cuf.getCUFTime());
