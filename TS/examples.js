"use strict";
exports.__esModule = true;
/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: Test
*/
var cufind_1 = require("../TS/cufind");
var test = new cufind_1.CUFind({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '1',
    FECHA_HORA: '20190113163721231'
});
console.log('Test: ', test.billData);
console.log('Test 1 NIT_EMISOR = 123456789, NÚMERO_FACTURA = 1, FECHA_HORA = 20190113163721231 :\n', new cufind_1.CUFind({
    NIT_EMISOR: 123456789,
    NÚMERO_FACTURA: 1,
    FECHA_HORA: 20190113163721231
}).billData);
console.log('Test 2 most common call:\n', new cufind_1.CUFind({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '1',
    FECHA_HORA: '20190113163721231'
}).billData);
console.log('Test 3 FECHA_HORA takes data from module:\n', new cufind_1.CUFind({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '1',
    FECHA_HORA: new cufind_1.CUFTime().getCUFTime() // * local time new
}).billData);
console.log('Test 4 FECHA_HORA is no present:\n', new cufind_1.CUFind({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '29',
    // FECHA_HORA: cuf.getCUFTime(),  // * FECHA_HORA is no present
    SUCURSAL: '0',
    MODALIDAD: '1',
    TIPO_EMISIÓN: '2',
    CÓDIGO_DOCUMENTO_FISCAL: '2',
    TIPO_DOCUMENTO_SECTOR: '6',
    POS: '0'
}).billData);
console.log('Test 5 NIT_EMISOR is number type, FECHA_HORA is no present:\n', new cufind_1.CUFind({
    NIT_EMISOR: 123456789,
    NÚMERO_FACTURA: '29',
    // FECHA_HORA: cuf.getCUFTime(),  // * FECHA_HORA is no present
    SUCURSAL: '0',
    MODALIDAD: '1',
    TIPO_EMISIÓN: '2',
    CÓDIGO_DOCUMENTO_FISCAL: '2',
    TIPO_DOCUMENTO_SECTOR: '6',
    POS: '0'
}).billData);
console.log('Test 6 FECHA_HORA is number type, TIPO_EMISIÓN contains non numeric type:', new cufind_1.CUFind({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '29',
    FECHA_HORA: 20190113163721249,
    SUCURSAL: '0',
    MODALIDAD: '1',
    TIPO_EMISIÓN: '2A',
    CÓDIGO_DOCUMENTO_FISCAL: '2',
    TIPO_DOCUMENTO_SECTOR: '6',
    POS: '0'
}).billData);
console.log('Local time: ', new cufind_1.CUFTime().getCUFTime());
