/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: Get data for billing.
 * billing.getDataToBilling({
 *  NÚMERO_AUTORIZACIÓN: 79040011859
 *  NÚMERO_FACTURA: 152
 *  NIT_CLIENTE: 1026469026
 *  FECHA_TRANSACCIÓN: 20070728
 *  MONTO_TRANSACCIÓN: 135
 *  LLAVE_DOSIFICACIÓN: 'A3Fs4s$)2cvD(eY667A5C4A2rsdf53kw9654E2B23s24df35F5'
 * });
*/
'use strict'

const ctrlCode = require('../control-code/control-code');
const qrcode = require('./get-qrcode');
const literalNumber = require('../stuff/to-literal');

module.exports = {

  getDataToBilling: (data) => {

    if (
      typeof data !== 'object' ||
      !('NÚMERO_AUTORIZACIÓN' in data) ||
      !('NÚMERO_FACTURA' in data) ||
      !('NIT_CLIENTE' in data) ||
      !('FECHA_TRANSACCIÓN' in data) ||
      !('MONTO_TRANSACCIÓN' in data) ||
      !('LLAVE_DOSIFICACIÓN' in data)
    ) {
      return {
        error: 'ERROR',
        message: 'getDataToBilling: Data is required to billing.'
      };
    }
    for (const prop in data) {
      if (prop === 'LLAVE_DOSIFICACIÓN') continue;
      if (/^\+?[0-9.,]*$/.test(data[prop]) === false)
        return {
          error: 'ERROR',
          message: 'getDataToBilling: Malformed input data.'
        };
      else data[prop] = data[prop].toString();
    }

    // * Generation Control Code

    let controlCode = ctrlCode.ControlCode(data);
    let dateQRCFormat =
      data.FECHA_TRANSACCIÓN.substring(6, 8) +
      data.FECHA_TRANSACCIÓN.substring(4, 6) +
      data.FECHA_TRANSACCIÓN.substring(0, 4);

    let amountQRCFormat =
      (data.MONTO_TRANSACCIÓN.toString().indexOf('.') > -1) ?
        data.MONTO_TRANSACCIÓN.toString().replace('.', ',') : data.MONTO_TRANSACCIÓN;

    let qrcodeText =
      data.NIT_CLIENTE.toString() + '|' +
      data.NÚMERO_FACTURA.toString() + '|' +
      data.NÚMERO_AUTORIZACIÓN.toString() + '|' +
      dateQRCFormat + '|' +
      amountQRCFormat + '|' +
      amountQRCFormat + '|' +
      controlCode + '|' +
      data.NIT_CLIENTE.toString() + '|' +
      '0.00|0.00|0.00|0.00'
    ;
    // * Generation QR Code in Base 64 image format
    let qrcodeBase64 = qrcode.getQRCodeBase64(
      qrcodeText,
      {
        errorCorrectLevel: 'L',
        typeNumber: 5,
        size: 150
      }
    );
    return {
      ControlCode: controlCode,
      QRCodeBase64: qrcodeBase64,
      QRCodeText: qrcodeText,
      LiteralBillAmount: literalNumber.toLiteral(data.MONTO_TRANSACCIÓN)
    }
  }
}
