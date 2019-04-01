/*
 * NÚMERO_AUTORIZACIÓN: 79040011859
 * NÚMERO_FACTURA: 152
 * NIT_CLIENTE: 1026469026
 * FECHA_TRANSACCIÓN: 20070728
 * MONTO_TRANSACCIÓN: 135
 * LLAVE_DOSIFICACIÓN: 'A3Fs4s$)2cvD(eY667A5C4A2rsdf53kw9654E2B23s24df35F5'
*/
const jsome = require('jsome');
jsome.level.show = true;

let billing = require('../billing/qrcode-plus-control-code');

let billingData = billing.getDataToBilling({
  NÚMERO_AUTORIZACIÓN: '29040011007',
  LLAVE_DOSIFICACIÓN: '9rCB7Sv4X29d)5k7N%3ab89p-3(5[A',
  NIT_CLIENTE: '4189179011',
  NÚMERO_FACTURA: '1503',
  FECHA_TRANSACCIÓN: '20070702',
  MONTO_TRANSACCIÓN: '2500'
});

console.log('Test 0:');
jsome(billingData);
/*
  Número de Autorización: 79040011859
  Número de Factura: 152
  NIT / CI del Cliente: 1026469026
  Fecha de la Transacción: 20070728
  Monto de la Transacción: 135
  Llave de Dosificación: A3Fs4s$)2cvD(eY667A5C4A2rsdf53kw9654E2B23s24df35F5
*/

console.log('\nTest 1:');
jsome(billing.getDataToBilling(
  {
  NÚMERO_AUTORIZACIÓN: 79040011859,
  NÚMERO_FACTURA: 152,
  NIT_CLIENTE: 1026469026,
  FECHA_TRANSACCIÓN: 20070728,
  MONTO_TRANSACCIÓN: 135,
  LLAVE_DOSIFICACIÓN: 'A3Fs4s$)2cvD(eY667A5C4A2rsdf53kw9654E2B23s24df35F5'
}));

/*
  Número de Autorización: 20040010113
  Número de Factura: 665
  NIT / CI del Cliente: 1004141023
  Fecha de la Transacción: 20070108
  Monto de la Transacción: 905.23
  Llave de Dosificación: 442F3w5AggG7644D737asd4BH5677sasdL4%44643(3C3674F4
*/
console.log('\nTest 2:');
jsome(billing.getDataToBilling(
  {
  NÚMERO_AUTORIZACIÓN: 20040010113,
  NÚMERO_FACTURA: 665,
  NIT_CLIENTE: 1004141023,
  FECHA_TRANSACCIÓN: 20070108,
  MONTO_TRANSACCIÓN: 905.23,
  LLAVE_DOSIFICACIÓN: '442F3w5AggG7644D737asd4BH5677sasdL4%44643(3C3674F4'
}));

/*
  Número de Autorización: 1904008691195
  Número de Factura: 978256
  NIT / CI del Cliente: 0
  Fecha de la Transacción: 20080201
  Monto de la Transacción: 26006
  Llave de Dosificación: pPgiFS%)v}@N4W3aQqqXCEHVS2[aDw_n%3)pFyU%bEB9)YXt%xNBub4@PZ4S9)ct
*/
console.log('\nTest 3:');
jsome(billing.getDataToBilling(
  {
  NÚMERO_AUTORIZACIÓN: 1904008691195,
  NÚMERO_FACTURA: 978256,
  NIT_CLIENTE: 0,
  FECHA_TRANSACCIÓN: 20080201,
  MONTO_TRANSACCIÓN: 26006,
  LLAVE_DOSIFICACIÓN: 'pPgiFS%)v}@N4W3aQqqXCEHVS2[aDw_n%3)pFyU%bEB9)YXt%xNBub4@PZ4S9)ct'
}));

/*
  Número de Autorización: 10040010640
  Número de Factura: 9901
  NIT / CI del Cliente: 1035012010
  Fecha de la Transacción: 20070813
  Monto de la Transacción: 451,49
  Llave de Dosificación: DSrCB7Ssdfv4X29d)5k7N%3ab8p3S(asFG5YU8477SWW)FDAQA
*/
console.log('\nTest 4:');
jsome(billing.getDataToBilling(
  {
  NÚMERO_AUTORIZACIÓN: 10040010640,
  NÚMERO_FACTURA: 9901,
  NIT_CLIENTE: 1035012010,
  FECHA_TRANSACCIÓN: 20070813,
  MONTO_TRANSACCIÓN: '451,49',
  LLAVE_DOSIFICACIÓN: 'DSrCB7Ssdfv4X29d)5k7N%3ab8p3S(asFG5YU8477SWW)FDAQA'
}));
/*
  Número de Autorización: 30040010595
  Número de Factura: 10015
  NIT / CI del Cliente: 953387014
  Fecha de la Transacción: 20070825
  Monto de la Transacción: 5725,90
  Llave de Dosificación: 33E265B43C4435sdTuyBVssD355FC4A6F46sdQWasdA)d56666fDsmp9846636B3
*/
console.log('\nTest 5:');
jsome(billing.getDataToBilling(
  {
  NÚMERO_AUTORIZACIÓN: 30040010595,
  NÚMERO_FACTURA: 10015,
  NIT_CLIENTE: 953387014,
  FECHA_TRANSACCIÓN: 20070825,
  MONTO_TRANSACCIÓN: '5725,90',
  LLAVE_DOSIFICACIÓN: '33E265B43C4435sdTuyBVssD355FC4A6F46sdQWasdA)d56666fDsmp9846636B3'
}));
