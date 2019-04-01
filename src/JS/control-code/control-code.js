/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: Generation of the "Código de Control" following "Impuestos Nacionales" rules from Bolivian.
 * NÚMERO_AUTORIZACIÓN: 79040011859
 * NÚMERO_FACTURA: 152
 * NIT_CLIENTE: 1026469026
 * FECHA_TRANSACCIÓN: 20070728
 * MONTO_TRANSACCIÓN: 135
 * LLAVE_DOSIFICACIÓN: 'A3Fs4s$)2cvD(eY667A5C4A2rsdf53kw9654E2B23s24df35F5'
*/
'use strict'

const AllegedRC4 = require('./alleged-rc4');
const Base64 = require('./base-64');
const Verhoeff = require('./Verhoeff');

var VerhoeffDigits;       // Step one
var messageToAllegedRC4;  // Step two
var AllegedRC4String;     // Step three
var sums = [];            // Step four
var base64String;         // Step five
var controlCode = '';     // Step six

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length);
}

module.exports = {

  ControlCode: (data) => {
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
        message: 'ControlCode: Data is required to billing.'
      };
    }
    let amount;
    for (const prop in data) {
      if (prop === 'LLAVE_DOSIFICACIÓN') continue;
      data[prop] = data[prop].toString();
      if (prop === 'MONTO_TRANSACCIÓN') {
        if (/^\+?[0-9.,]*$/.test(data[prop]) === false)
          return {
            error: 'ERROR',
            message: 'ControlCode: MONTO_TRANSACCIÓN is malformed.'
          };
        if (data[prop].includes(','))
          data[prop] = data[prop].replaceAt(data[prop].indexOf(','), '.');
        amount = (Number(data[prop]).toFixed()).toString(); // Round without decimals
      }
      else if (/^\+?[0-9][\d]*$/.test(data[prop]) === false)
        return {
          error: 'ERROR',
          message: 'ControlCode: Malformed input data.'
        };
    }
    /**
     * Step ONE --------------------------------------------------------------------
     * Verhoeff Digits
     */
    var stepOneArray = [];
    var billNumber, clientNIT, billDate;
    stepOneArray.push(data.NÚMERO_AUTORIZACIÓN.toString());
    stepOneArray.push(
      billNumber = Verhoeff.VerhoeffConcated(
        Verhoeff.VerhoeffConcated(data.NÚMERO_FACTURA.toString())
      )
    );
    stepOneArray.push(
      clientNIT = Verhoeff.VerhoeffConcated(
        Verhoeff.VerhoeffConcated(data.NIT_CLIENTE.toString())
      )
    );
    stepOneArray.push(
      billDate = Verhoeff.VerhoeffConcated(
        Verhoeff.VerhoeffConcated(data.FECHA_TRANSACCIÓN.toString())
      )
    );
    /*let amount, idx;
    if((idx = data.MONTO_TRANSACCIÓN.toString().indexOf('.')) > -1) {
      if(data.MONTO_TRANSACCIÓN[idx + 1] > 5)
        amount = Math.ceil(data.MONTO_TRANSACCIÓN);
      else
        amount = data.MONTO_TRANSACCIÓN.toString().substring(0, idx);
    } else {
      amount = data.MONTO_TRANSACCIÓN;
    }*/
    stepOneArray.push(
      amount = Verhoeff.VerhoeffConcated(
        Verhoeff.VerhoeffConcated(amount.toString())
      )
    );
    VerhoeffDigits = '';
    var sum = Number(billNumber) + Number(clientNIT)
     + Number(billDate) + Number(amount);
    for(var i = 0; i < 5; i++) {
      sum = Verhoeff.VerhoeffConcated(sum.toString());
      VerhoeffDigits += sum[sum.length - 1];
    }
    // END Step ONE -------------------------------------------------------------------
    /**
     * Step TWO
     * Split auth number with Verhoeff Digits
     */
		messageToAllegedRC4 = '';
		var position = 0;
		for (var i = 0; i < VerhoeffDigits.length; i++) {
			messageToAllegedRC4 +=
				stepOneArray[i] +
				data.LLAVE_DOSIFICACIÓN.substring(
					position,
					Number(VerhoeffDigits.substring(i, i + 1)) + 1 + position
				);
			position = position + Number(VerhoeffDigits.substring(i, i + 1)) + 1;
		}
    // END Step TWO -------------------------------------------------------------------
    /**
     * Step THREE ---------------------------------------------------------------------
     * Alleged RC4 string
     */
    AllegedRC4String = AllegedRC4.Alleged_RC4(
      messageToAllegedRC4,
      data.LLAVE_DOSIFICACIÓN + VerhoeffDigits
    );
    // END Step Three -----------------------------------------------------------------
    /**
     * Step Four ----------------------------------------------------------------------
     * Split & sum AllegedRC4 String with fix length
     */
    var position = 0;
    sums = [0, 0, 0, 0, 0, 0];
		for(var i = 0; i < AllegedRC4String.length; i++) {
			sums[0] += AllegedRC4String.charCodeAt(i);
			switch(position) {
				case 0:
					sums[1] += AllegedRC4String.charCodeAt(i);
					break;
				case 1:
					sums[2] += AllegedRC4String.charCodeAt(i);
					break;
				case 2:
					sums[3] += AllegedRC4String.charCodeAt(i);
					break;
				case 3:
					sums[4] += AllegedRC4String.charCodeAt(i);
					break;
				case 4:
					sums[5] += AllegedRC4String.charCodeAt(i);
					break;
			}
			position = (position < 4) ? position + 1 : 0;
		}
    // END Step Four ------------------------------------------------------------------
    /**
     * Step Five ----------------------------------------------------------------------
     * Gen base 64 string
     */
 		var toBase64 =
			Math.trunc(sums[0]*sums[1] / (Number(VerhoeffDigits.substring(0, 1)) + 1)) +
			Math.trunc(sums[0]*sums[2] / (Number(VerhoeffDigits.substring(1, 2)) + 1)) +
			Math.trunc(sums[0]*sums[3] / (Number(VerhoeffDigits.substring(2, 3)) + 1)) +
			Math.trunc(sums[0]*sums[4] / (Number(VerhoeffDigits.substring(3, 4)) + 1)) +
			Math.trunc(sums[0]*sums[5] / (Number(VerhoeffDigits.substring(4, 5)) + 1));
		base64String = Base64.Base64(toBase64);
    // END Step Five ------------------------------------------------------------------
    /**
     * Step Six -----------------------------------------------------------------------
     * Last step, gen control code
     */
		controlCode = AllegedRC4.Alleged_RC4(
      base64String,
      data.LLAVE_DOSIFICACIÓN + VerhoeffDigits,
      false
    );
    // END Step Six -------------------------------------------------------------------
    return controlCode;
    // END ControlCode
  }
}
