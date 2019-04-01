/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: Alleged standard algorithm.
*/

'use strict'

module.exports = {

  Alleged_RC4: (message, key, unscripted = 'true') => {

    var hexadecimalReference = [];
    
    for (var i = 0; i < 256; i++) {
      hexadecimalReference[i] = i;
    }

    var index = 0, aux = 0;

    for(var i = 0; i < 256; i++) {
      index =  ((key.charCodeAt(i % key.length)) +  hexadecimalReference[i] + index) % 256;
      aux = hexadecimalReference[i];
      hexadecimalReference[i] = hexadecimalReference[index];
      hexadecimalReference[index] = aux;
    }

    var x = 0, y = 0;
    var messageEncryption = '';
    var posMessage = 0;
    var posMessageHex = '';

    for (var i = 0; i < message.length; i++) {
      x = (x + 1) % 256;
      y = (hexadecimalReference[x] + y) % 256;
      
      aux = hexadecimalReference[x];
      hexadecimalReference[x] = hexadecimalReference[y];
      hexadecimalReference[y] = aux;

      posMessage =
        message.charCodeAt(i) ^ hexadecimalReference[
          (hexadecimalReference[x] + hexadecimalReference[y]) % 256
      ];
      posMessageHex = posMessage.toString(16).toUpperCase();

      messageEncryption = messageEncryption + ((unscripted) ? '' : '-') +
        ((posMessageHex.length == 1)?('0' + posMessageHex) : posMessageHex);
      
      //console.log('posMessage: ' + posMessage + ' posMessageHex: ' + posMessageHex);
    }
    return (
      unscripted ?
      messageEncryption :
      messageEncryption.substring(1, (messageEncryption.length))
    );
  }
}
