/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description:
 *
 * GENERACION CUF
 * El Código Único de Factura permite identificar como única una factura, debe ser generado automáticamente por el aplicativo del sujeto pasivo o tercero responsable utilizando para ello los siguientes campos:
 *
 * CAMPO                                     DESCRIPCION               TIPO      LONGITUD
 * NIT (Emisor)                              NIT del contribuyente     Numérico        13
 *
 * FECHA/HORA (Emisión)                      Fecha y Hora del Emisor   Numérico        17
 *                                           yyyyMMddHHmmssSSS
 *
 * SUCURSAL (de donde se emite la factura)   0 = Casa Matriz           Numérico         4
 *                                           1 = Sucursal 1
 *                                           2 = Sucursal 2
 *                                           N = Sucursal N
 *
 * MODALIDAD                                 1 = Electrónica           Numérico         1
 *                                           2 = Computarizada
 *                                           3 = Manual
 *
 * TIPO EMISIÓN                              1 = Online                Numérico         1
 *                                           2 = Offline
 *
 * CÓDIGO DOCUMENTO FISCAL                   1 = Factura               Numérico         1
 *                                           2 = Nota Debito/Crédito
 *                                           3 = Nota Fiscal
 *                                           4 = Documento Equivalente
 *
 * TIPO DOCUMENTO SECTOR                     1 = FACTURA ESTANDAR      Numérico         2
 *                                           2 = FACTURA SECTORES EDUCATIVOS
 *                                           3 = FACTURA DE ALQUILER DE BIENES INMUEBLES
 *                                           4 = FACTURA DE COMERCIALIZACION DE HIDROCARBUROS
 *                                           5 = FACTURA DE SERVICIOS BASICOS
 *                                           6 = FACTURA DE EMBOTELLADORAS
 *                                           7 = FACTURA DE ENTIDADES FINANCIERAS
 *                                           8 = FACTURA DE HOTELES
 *                                           9 = FACTURAS DE HOSPITALES/CLINICAS
 *                                           10 = FACTURA DE JUEGOS DE AZAR
 *                                           11 = FACTURA DE ARTISTAS INTERNACIONALES
 *                                           12 = FACTURA COMERCIAL DE EXPORTACION
 *                                           13 = FACTURA COMERCIAL DE EXPORTACIÓN EN LIBRE CONSIGNACION
 *                                           14 = NOTA FISCAL DE TASA CERO
 *                                           15 = NOTA FISCAL DE EXPORTACIÓN DE SERVICIO  TURÍSTICO Y HOSPEDAJE
 *                                           16 = NOTA FISCAL DE ZONA FRANCA
 *                                           17 = NOTA FISCAL DE ARTISTAS NACIONALES
 *                                           18 = NOTA FISCAL DE COMERCIALIZACIÓN DE ALIMENTOS – SEGURIDAD ALIMENTARIA Y ABASTECIMIENTO
 *                                           19 = NOTA FISCAL DE COMPRA Y VENTA DE MONEDA EXTRANJERA
 *                                           20 = NOTA DE CREDITO-DEBITO
 *                                           21 = NOTA DE CONCILIACION
 *                                           22 = BOLETO AEREO
 *
 * NRO FACTURA                               Numero de Factura         Numérico         8
 *
 * PUNTO DE VENTA (POS)                      Número de punto de venta  Numérico         4
 *                                           0 = No corresponde
 *                                           1,2,3,4,….n
 *
 * CÓDIGO AUTOVERIFICADOR                    Base 11                   Numérico         1
 *
 * TOTAL                                                                               52
 *
 * Nota: Todos los campos deben completarse conforme a la longitud indicada.
 *
 * Incorporar a la cadena (52 dígitos) resultante, un digito auto verificador utilizando Modulo
 * 11. La cadena resultante debe ser codificada utilizando para ello Base 16 dando como resultado el CUF buscado (código Único de Factura).
 *
 * Ejemplo:
 * Con los siguientes datos:
 *                             • NIT EMISOR = 123456789
 *                             • FECHA / HORA = 20190113163721231
 *                             • SUCURSAL = 0
 *                             • MODALIDAD = 1
 *                             • TIPOEMISIÓN = 1
 *                             • CODIGO DOCUMENTO FISCAL = 1
 *                             • TIPO DOCUMENTO SECTOR = 1
 *                             • NUMERO DE FACTURA = 1
 *                             • POS: 0
 *
 * 1. Se completa cada campo según la longitud definida con ceros a la izquierda:
 *
 *                             • NIT EMISOR = 0000123456789
 *                             • FECHA / HORA = 20190113163721231
 *                             • SUCURSAL = 0000
 *                             • MODALIDAD = 1
 *                             • TIPOEMISIÓN = 1
 *                             • CODIGO DOCUMENTO FISCAL = 1
 *                             • TIPO DOCUMENTO SECTOR = 01
 *                             • NUMERO DE FACTURA = 00000001
 *                             • POS: 0000
 *
 * 2. Se concatena los campos:
 *
 *                     000012345678920190113163721231000011101000000010000
 *
 * 3. Se obtiene el módulo 11 de la cadena y se lo adjunta al final de la cadena
 *
 *                     0000123456789201901131637212310000111010000000100003
 *
 * 4. Se aplica a la cadena resultante Base 16
 *
 *                     159FFE6FB1986A24BB32DBE5A2A34214B245A6A3
*/

/*
 * Function:  fill
 * Description: Left filled with character '0' if field length is less length.
 * Arguments:
 *            f: field to fill
 *            l: reference length
 * Return:
 *            String filled
*/

lengths = [13, 8, 17, 4, 1, 1, 1, 2, 4];

fill = (f, l) => {
  let d = l - f.length;
  if (d !== 0) for (let i = 0; i < d; i++) f = '0' + f;
  return f;
}

/*
 * Function: Validate
 * Description: Check if field is Number and proper length.
 * Return: Object adding validated field.
*/
validate = (f, l) => {
  if (f.constructor === Number) {
    let fo = f.toString();
    if (fo.length <= l) return { f: fo, ok: true }
  } else if (f.constructor === String) {
    if (/^\+?[0-9][\d]*$/.test(f) === true && f.length <= l)
      return { f: f, ok: true }
    else return { ok: false };
  } else return { ok: false };
}

/*
 * Function: mod11
 * Description: Bolivian "Impuestos Nacionales" module 11 algorithm.
 * Return: String with module 11 code.
*/
mod11 = (toMod11, numDig = 1, limMult = 9, ten = false) => {
  let mult, add, i, n, dig;
  if (!ten) numDig = 1;
  for (n = 1; n <= numDig; n++) {
    add = 0; mult = 2;
    for (i = toMod11.length - 1; i >= 0; i--) {
      add += (mult * parseInt(toMod11.substring(i, i + 1)));
      if (++mult > limMult) mult = 2;
    }
    if (ten) { dig = ((add * 10) % 11) % 10;
    } else { dig = add % 11; }
    if (ten) { dig = ((add * 10) % 11) % 10;
    } else { dig = add % 11; }
    if (dig == 10) { toMod11 += '1'; }
    if (dig == 11) { toMod11 += '0'; }
    if (dig < 10) { toMod11 += dig.toString(); }
  }
  return toMod11.substring(toMod11.length - numDig, toMod11.length);
}

/*
 * Function: calCUF
 * Description: Bolivian "Impuestos Nacionales" CUF (Código Único de Factura) calculation.
 * Argument: Object with bill data
 * Return: String with CUF
*/
calCUF = (data) => {
  let CUF =
    fill(data.NIT_EMISOR, 13) +
    data.FECHA_HORA +
    fill(data.SUCURSAL, 4) +
    data.MODALIDAD +
    data.TIPO_EMISIÓN +
    data.CÓDIGO_DOCUMENTO_FISCAL +
    fill(data.TIPO_DOCUMENTO_SECTOR, 2) +
    fill(data.NÚMERO_FACTURA, 8) +
    fill(data.POS, 4);
    CUF = BigInt(CUF + mod11(CUF));
  return CUF.toString(16).toUpperCase();
}

/*
 * Function: CUFTime
 * Description: Bolivian "Impuestos Nacionales" CUF (Código Único de Factura) calculation.
 * Return: Return current date in required format.
*/
CUFTime = () => {
  let dt = new Date();
  current_date = dt.getDate();
  current_month = dt.getMonth() + 1;
  current_year = dt.getFullYear();
  current_hrs = dt.getHours();
  current_mins = dt.getMinutes();
  current_secs = dt.getSeconds();
  current_milliseconds = dt.getMilliseconds();

  // * Fill to left
  current_date = current_date < 10 ? '0' + current_date : current_date;
  current_month = current_month < 10 ? '0' + current_month : current_month;
  current_hrs = current_hrs < 10 ? '0' + current_hrs : current_hrs;
  current_mins = current_mins < 10 ? '0' + current_mins : current_mins;
  current_secs = current_secs < 10 ? '0' + current_secs : current_secs;
  current_milliseconds =
    current_milliseconds = 0 ? '000' :
      current_milliseconds < 10 ? '00' + current_milliseconds :
        current_milliseconds < 100 ? '0' + current_milliseconds :
          current_milliseconds;
  // * Concat in required way
  current_datetime =
    current_year +
    current_month +
    current_date +
    current_hrs +
    current_mins +
    current_secs +
    current_milliseconds;

  return current_datetime;
}

/*
 * Module: CUF
 * Description: Accessible methods to get CUF calculation.
 * Methods:
 *        cuf: Get CUF from individual bill data.
 *        getCUF: Get CUF from object bill data.
 *        getBOTime: Return current date in required format.
 * All arguments input must be string type.
 * 
*/
module.exports = {
  /*
   * Get CUF from individual bill data
  */
  cuf: (
    NIT_EMISOR,
    NÚMERO_FACTURA,
    FECHA_HORA = CUFTime(),         // default = getTime
    SUCURSAL = '0',                 // default = CASA MATRÍZ
    MODALIDAD = '1',                // default = ELECTRÓNICA
    TIPO_EMISIÓN = '1',             // default = ONLINE
    CÓDIGO_DOCUMENTO_FISCAL = '1',  // default = FACTURA
    TIPO_DOCUMENTO_SECTOR = '1',    // default = FACTURA ESTÁNDAR
    POS = '0'                       // default = NO CORRESPONDE
  ) => {
    if (NIT_EMISOR === undefined) return 'ERROR';
    if (NÚMERO_FACTURA === undefined) return 'ERROR';
    let data = {
      NIT_EMISOR: NIT_EMISOR,
      NÚMERO_FACTURA: NÚMERO_FACTURA,
      FECHA_HORA: FECHA_HORA,
      SUCURSAL: SUCURSAL,
      MODALIDAD: MODALIDAD,
      TIPO_EMISIÓN: TIPO_EMISIÓN,
      CÓDIGO_DOCUMENTO_FISCAL: CÓDIGO_DOCUMENTO_FISCAL,
      TIPO_DOCUMENTO_SECTOR: TIPO_DOCUMENTO_SECTOR,
      POS: POS
    };
    let i = 0;
    for (const prop in data) {
      let st = validate(data[prop], lengths[i]); i++;
      if (st.ok === true) data[prop] = st.f;
      else return 'ERROR';
    }
    return Object.assign(data, { CUF: calCUF(data) });
  },
  /*
   * Get CUF from object bill data
  */
  getCUF: (data = {
    NIT_EMISOR,
    NÚMERO_FACTURA,
    FECHA_HORA: CUFTime(),         // default = getTime
    SUCURSAL: '0',                 // default = CASA MATRÍZ
    MODALIDAD: '1',                // default = ELECTRÓNICA
    TIPO_EMISIÓN: '1',             // default = ONLINE
    CÓDIGO_DOCUMENTO_FISCAL: '1',  // default = FACTURA
    TIPO_DOCUMENTO_SECTOR: '1',    // default = FACTURA ESTÁNDAR
    POS: '0'                       // default = NO CORRESPONDE
  }) => {
    if (!('NIT_EMISOR' in data)) return { messge: 'ERROR', cause: 'NIT_EMISOR is required'};
    if (!('NÚMERO_FACTURA' in data)) return { messge: 'ERROR', cause: 'NÚMERO_FACTURA is required'};
    let reData = {
      NIT_EMISOR: data.NIT_EMISOR,
      NÚMERO_FACTURA: data.NÚMERO_FACTURA,
      FECHA_HORA: 'FECHA_HORA' in data ? data.FECHA_HORA : CUFTime(),
      SUCURSAL: 'SUCURSAL' in data ? data.SUCURSAL : '0',
      MODALIDAD: 'MODALIDAD' in data ? data.MODALIDAD : '1',
      TIPO_EMISIÓN: 'TIPO_EMISIÓN' in data ? data.TIPO_EMISIÓN : '1',
      CÓDIGO_DOCUMENTO_FISCAL: 'CÓDIGO_DOCUMENTO_FISCAL' in data ? data.CÓDIGO_DOCUMENTO_FISCAL : '1',
      TIPO_DOCUMENTO_SECTOR: 'TIPO_DOCUMENTO_SECTOR' in data ? data.TIPO_DOCUMENTO_SECTOR : '1',
      POS: 'POS' in data ? data.POS : '0'
    }
    // console.log('reData: ', reData);
    let i = 0;
    for (const prop in reData) {
      let st = validate(reData[prop], lengths[i]); i++;
      if (st.ok === true) reData[prop] = st.f;
      else return 'ERROR';
    }
    return Object.assign(reData, { CUF: calCUF(reData)});
  },
  /*
   * Return current date in required format
  */
   getCUFTime: () => {
    return CUFTime();
  }
}
