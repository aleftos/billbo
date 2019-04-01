/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: QR code generation.
*/
'use strict';

const qrcode = require('../qrcode/qrcode.js');

module.exports = {
/**
 * qrcode
 * @param typeNumber 1 to 40
 * @param errorCorrectLevel 'L','M','Q','H'
 */
  getQRCodeBase64: (text, options) => {
    options = options || {};
    var typeNumber = options.typeNumber || 4;
    var errorCorrectLevel = options.errorCorrectLevel || 'M';
    var size = options.size || 500;

    var qr;

    try {
      qr = qrcode(typeNumber, errorCorrectLevel || 'M');
      qr.addData(text);
      qr.make();
    } catch (e) {
      if(typeNumber >= 40) {
          throw new Error('Text too long to encode');
      } else {
          return genQRCodeBase64 (text, {
            size: size,
            errorCorrectLevel: errorCorrectLevel,
            typeNumber: typeNumber + 1
          });
        }
    }

    // * calc cellsize and margin
    var cellsize = parseInt(size / qr.getModuleCount());
    var margin = parseInt((size - qr.getModuleCount() * cellsize) / 2);

    return qr.createImgTag(cellsize, margin, size);
  }
}

