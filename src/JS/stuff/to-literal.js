/*
 * Coder & programmer: Luis Sanabria
 * Based in: https://gist.github.com/alfchee/e563340276f89b22042a
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: Literal amount currency formating.
 * Usage:
 * Example: 500,34 USD
 *  toLiteral(500.34, {
 *    plural: 'Bolivianos',
 *    singular: 'Boliviano',
 *    centPlural: 'centavos',
 *    centSingular: 'centavo'
 *  });
*/

Unities = (num) => {
  switch(num)
  {
      case 1: return 'uno';
      case 2: return 'dos';
      case 3: return 'tres';
      case 4: return 'cuatro';
      case 5: return 'cinco';
      case 6: return 'seis';
      case 7: return 'siete';
      case 8: return 'ocho';
      case 9: return 'nueve';
  }
  return '';
} // Unities()

Tens = (num) => {
  let ten = Math.floor(num/10);
  let unit = num - (ten * 10);
  switch(ten)
  {
    case 1:
      switch(unit)
      {
          case 0: return 'diez';
          case 1: return 'once';
          case 2: return 'doce';
          case 3: return 'trece';
          case 4: return 'catorce';
          case 5: return 'quince';
          default: return 'dieci' + Unities(unit);
      }
    case 2:
      switch(unit)
      {
          case 0: return 'veinte';
          default: return 'veinti' + Unities(unit);
      }
    case 3: return TensY('treinta', unit);
    case 4: return TensY('cuarenta', unit);
    case 5: return TensY('cincuenta', unit);
    case 6: return TensY('sesenta', unit);
    case 7: return TensY('setenta', unit);
    case 8: return TensY('ochenta', unit);
    case 9: return TensY('noventa', unit);
    case 0: return Unities(unit);
  }
} // Tens()

TensY = (singular, unities) => {
  if (unities > 0)
    return singular + ' y ' + Unities(unities)
  return singular;
} // TensY()

Hundreds = (num) => {
  let hundreds = Math.floor(num / 100);
  let tens = num - (hundreds * 100);
  switch(hundreds)
  {
    case 1:
      if (tens > 0)
        return 'ciento ' + Tens(tens);
      return 'cien';
    case 2: return 'doscientos ' + Tens(tens);
    case 3: return 'trescientos ' + Tens(tens);
    case 4: return 'cuatrocientos ' + Tens(tens);
    case 5: return 'quinientos ' + Tens(tens);
    case 6: return 'seiscientos ' + Tens(tens);
    case 7: return 'setecientos ' + Tens(tens);
    case 8: return 'ochocientos ' + Tens(tens);
    case 9: return 'novecientos ' + Tens(tens);
  }
  return Tens(tens);
} // Hundreds()

Section = (num, divider, singular, plural) => {
  let hundreds = Math.floor(num / divider)
  let resto = num - (hundreds * divider)
  let literal = '';
  if (hundreds > 0)
    if (hundreds > 1)
      literal = Hundreds(hundreds) + ' ' + plural;
    else
      literal = singular;
  if (resto > 0)
    literal += '';
  return literal;
} // Section()

Thousands = (num) => {
  let divider = 1000;
  let hundreds = Math.floor(num / divider)
  let rest = num - (hundreds * divider)
  let strThousands = Section(num, divider, 'un mil', 'mil');
  let strHundreds = Hundreds(rest);
  if(strThousands === '')
    return strHundreds;
  return strThousands + ' ' + strHundreds;
} // Thousands()

Millions = (num) => {
  let divider = 1000000;
  let hundreds = Math.floor(num / divider)
  let rest = num - (hundreds * divider)
  let strMillions = Section(num, divider, 'un millon de', 'millones de');
  let strThousands = Thousands(rest);
  if(strMillions === '')
    return strThousands;
  return strMillions + ' ' + strThousands;
} // Millions()

module.exports = {
  toLiteral: (
    num,
    currency = {},
    cents = false
  ) => {
    currency = currency || {};
    let data = {
      number: num,
      integer: Math.floor(num),
      cents: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
      literalCents: '',
      literalCurrencyPlural: currency.plural || 'Bolivianos',
      literalCurrencySingular: currency.singular || 'Boliviano',
      literalCurrencyCentPlural: currency.centPlural || 'Centavos',
      literalCurrencyCentSingular: currency.centSingular || 'Centavo',
      acronym: currency.acronym || 'BOB'
    };
    let literalCents = Millions(data.cents);
    let literalInteger = Millions(data.integer);
    let literal = '';
    let fraction = ' ' + data.cents + '/100';
    // console.log('data: ', data);
    if (data.cents > 0 && cents === true) {
      data.literalCents = 'con ' + (() => {
      if (data.cents === 1)
        return literalCents
          + ' '
          + data.literalCurrencyCentSingular;
      else
        return literalCents
          + ' '
          + data.literalCurrencyCentPlural;
      })();
    };
    if (cents === false) {
      data.literalCents = ' ' + data.cents + '/100';
    }
    if (data.integer === 1)
      literal = literalInteger.charAt(0).toUpperCase()
        + literalInteger.slice(1)
        + ' con'
        + fraction
        + ' '
        + data.literalCurrencyPlural; // Apply for BOB currency to billing
    else if (data.integer === 0) {
      literal = 'Cero'
        // + data.literalCents
        + ' con'
        + fraction
        + ' '
        + data.literalCurrencyPlural; // Apply for BOB currency to billing
        literalInteger = 'Cero '
      }
    else {
      literal = literalInteger.charAt(0).toUpperCase()
        + literalInteger.slice(1)
        + ' con'
        + fraction
        + ' '
        + data.literalCurrencyPlural; // Apply for BOB currency to billing
    }
    const formatter = new Intl.NumberFormat('es-BO', {
      style: 'currency',
      currency: data.acronym,
      minimumFractionDigits: 2
    });
    return {
      literal: literal,
      split: {
        integer: literalInteger.charAt(0).toUpperCase()
          + literalInteger.slice(1),
        cents: data.cents,
        cents: literalCents,
        centsHTML: 'con <sup>' + data.cents + '</sup>/<sub>100</sub>',
        currency: data.integer = 1 ? data.literalCurrencySingular : data.literalCurrencyPlural,
        format: formatter.format(num)
      }
    };
  },
}
