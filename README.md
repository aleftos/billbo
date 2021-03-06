 Summary:
            <h1>Utilities for the national tax billing system of Bolivian country.</h1>
 
 Install:
 
            npm install billbo
            or
            npm install @arquetic/billbo
            or
            git clone https://github.com/aleftos/billbo
 
<h2>Description:</h2>

GENERACION CUF

El Código Único de Factura permite identificar como única una factura, debe ser generado automáticamente por el aplicativo del sujeto pasivo o tercero responsable utilizando para ello los siguientes campos:

<table class="tg">
  <tr>
    <th class="tg-0lax">CAMPO</th>
    <th class="tg-0lax">DESCRIPCION</th>
    <th class="tg-0lax">TIPO</th>
    <th class="tg-0lax">LONGITUD</th>
  </tr>
  <tr>
    <td class="tg-0lax">NIT (Emisor)</td>
    <td class="tg-0lax">NIT del contribuyente</td>
    <td class="tg-0lax">Numérico</td>
    <td class="tg-0lax">13</td>
  </tr>
  <tr>
    <td class="tg-0lax">FECHA/HORA (Emisión)</td>
    <td class="tg-0lax">Fecha y Hora del Emisor</td>
    <td class="tg-0lax">Numérico<br>yyyyMMddHHmmssSSS</td>
    <td class="tg-0lax">17</td>
  </tr>
  <tr>
    <td class="tg-0lax">SUCURSAL (de donde se emite la factura)</td>
    <td class="tg-0lax">
      0 = Casa Matriz<br>
      1 = Sucursal 1<br>
      2 = Sucursal 2<br>
      N = Sucursal N
    </td>
    <td class="tg-0lax">Numérico</td>
    <td class="tg-0lax">4</td>
  </tr>
  <tr>
    <td class="tg-0lax">MODALIDAD</td>
    <td class="tg-0lax">
      1 = Electrónica<br>
      2 = Computarizada<br>
      3 = Manual        
    </td>
    <td class="tg-0lax">Numérico</td>
    <td class="tg-0lax">1</td>
  </tr>
  <tr>
    <td class="tg-0lax">TIPO EMISIÓN</td>
    <td class="tg-0lax">
        1 = Online<br>
        2 = Offline        
    </td>
    <td class="tg-0lax">Numérico</td>
    <td class="tg-0lax">1</td>
  </tr>
  <tr>
    <td class="tg-0lax">CÓDIGO DOCUMENTO FISCAL</td>
    <td class="tg-0lax">
        1 = Factura<br>
        2 = Nota Debito/Crédito<br>
        3 = Nota Fiscal<br>
        4 = Documento Equivalente
    </td>
    <td class="tg-0lax">Numérico</td>
    <td class="tg-0lax">1</td>
  </tr>
  <tr>
    <td class="tg-0lax">TIPO DOCUMENTO SECTOR</td>
    <td class="tg-0lax">
      1 = FACTURA ESTANDAR<br>
      2 = FACTURA SECTORES EDUCATIVOS<br>
      3 = FACTURA DE ALQUILER DE BIENES INMUEBLES<br>
      4 = FACTURA DE COMERCIALIZACION DE HIDROCARBUROS<br>
      5 = FACTURA DE SERVICIOS BASICOS<br>
      6 = FACTURA DE EMBOTELLADORAS<br>
      7 = FACTURA DE ENTIDADES FINANCIERAS<br>
      8 = FACTURA DE HOTELES<br>
      9 = FACTURAS DE HOSPITALES/CLINICAS<br>
      10 = FACTURA DE JUEGOS DE AZAR<br>
      11 = FACTURA DE ARTISTAS INTERNACIONALES<br>
      12 = FACTURA COMERCIAL DE EXPORTACION<br>
      13 = FACTURA COMERCIAL DE EXPORTACIÓN EN LIBRE CONSIGNACION<br>
      14 = NOTA FISCAL DE TASA CERO<br>
      15 = NOTA FISCAL DE EXPORTACIÓN DE SERVICIO  TURÍSTICO Y HOSPEDAJE<br>
      16 = NOTA FISCAL DE ZONA FRANCA<br>
      17 = NOTA FISCAL DE ARTISTAS NACIONALES<br>
      18 = NOTA FISCAL DE COMERCIALIZACIÓN DE ALIMENTOS – SEGURIDAD ALIMENTARIA Y ABASTECIMIENTO<br>
      19 = NOTA FISCAL DE COMPRA Y VENTA DE MONEDA EXTRANJERA<br>
      20 = NOTA DE CREDITO-DEBITO<br>
      21 = NOTA DE CONCILIACION<br>
      22 = BOLETO AEREO
    </td>
    <td class="tg-0lax">Numérico</td>
    <td class="tg-0lax">2</td>
  </tr>
  <tr>
    <td class="tg-0lax">NRO FACTURA</td>
    <td class="tg-0lax">Numero de Factura</td>
    <td class="tg-0lax">Numérico</td>
    <td class="tg-0lax">8</td>
  </tr>
  <tr>
    <td class="tg-0lax">PUNTO DE VENTA (POS)</td>
    <td class="tg-0lax">
      Número de punto de venta<br>
      0 = No corresponde<br>
      1,2,3,4,….n  
    </td>
    <td class="tg-0lax">Numérico</td>
    <td class="tg-0lax">4</td>
  </tr>
  <tr>
    <td class="tg-0lax">CÓDIGO AUTOVERIFICADOR</td>
    <td class="tg-0lax">
      Base 11
    </td>
    <td class="tg-0lax">Numérico</td>
    <td class="tg-0lax">1</td>
  </tr>
  <tr>
    <td class="tg-0lax" colspan="3">Total</td>
    <td class="tg-0lax">52</td>
  </tr>
</table>

Nota: Todos los campos deben completarse conforme a la longitud indicada.

Incorporar a la cadena (52 dígitos) resultante, un digito auto verificador utilizando Modulo
11. La cadena resultante debe ser codificada utilizando para ello Base 16 dando como resultado el CUF buscado (código Único de Factura).

Ejemplo:<br>

0. Con los siguientes datos:


                            • NIT EMISOR = 123456789
                            • FECHA / HORA = 20190113163721231
                            • SUCURSAL = 0
                            • MODALIDAD = 1
                            • TIPOEMISIÓN = 1
                            • CODIGO DOCUMENTO FISCAL = 1
                            • TIPO DOCUMENTO SECTOR = 1
                            • NUMERO DE FACTURA = 1
                            • POS: 0

1. Se completa cada campo según la longitud definida con ceros a la izquierda:

                            • NIT EMISOR = 0000123456789
                            • FECHA / HORA = 20190113163721231
                            • SUCURSAL = 0000
                            • MODALIDAD = 1
                            • TIPOEMISIÓN = 1
                            • CODIGO DOCUMENTO FISCAL = 1
                            • TIPO DOCUMENTO SECTOR = 01
                            • NUMERO DE FACTURA = 00000001
                            • POS: 0000

2. Se concatena los campos:

                    000012345678920190113163721231000011101000000010000

3. Se obtiene el módulo 11 de la cadena y se lo adjunta al final de la cadena

                    0000123456789201901131637212310000111010000000100003

4. Se aplica a la cadena resultante Base 16

                    159FFE6FB1986A24BB32DBE5A2A34214B245A6A3

<h2>Usage:</h2>

```javascript
let cuf = require('../lib/cuf');

console.log(
  'Test 1 NIT_EMISOR = 123456789, NÚMERO_FACTURA = 1, FECHA_HORA = 20190113163721231 :\n',
  cuf.cuf(
    123456789,
    1,
    20190113163721231
  )
)

console.log(
  'Test 2 most common call:\n',
  cuf.getCUF({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '1',
    FECHA_HORA: '20190113163721231'
  })
)

console.log(
  'Test 3 FECHA_HORA takes data from module:\n',
  cuf.getCUF({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '1',
    FECHA_HORA: cuf.getCUFTime()  // * local time
  })
)

console.log(
  'Test 4 FECHA_HORA is no present:\n',
  cuf.getCUF(
    {
      NIT_EMISOR: '123456789',
      NÚMERO_FACTURA: '29',
      // FECHA_HORA: cuf.getCUFTime(),  // * FECHA_HORA is no present
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
  'Test 5 NIT_EMISOR is number type, FECHA_HORA is no present:\n',
  cuf.getCUF(
    {
      NIT_EMISOR: 123456789,            // * number type
      NÚMERO_FACTURA: '29',
      // FECHA_HORA: cuf.getCUFTime(),  // * FECHA_HORA is no present
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
  'Test 6 FECHA_HORA is number type, TIPO_EMISIÓN contains non numeric type:',
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

console.log('Local time: ', cuf.getCUFTime());

// Output:

// Test 1 NIT_EMISOR = 123456789, NÚMERO_FACTURA = 1, FECHA_HORA = 20190113163721231 :
 { NIT_EMISOR: '123456789',
  'NÚMERO_FACTURA': '1',
  FECHA_HORA: '20190113163721230',
  SUCURSAL: '0',
  MODALIDAD: '1',
  'TIPO_EMISIÓN': '1',
  'CÓDIGO_DOCUMENTO_FISCAL': '1',
  TIPO_DOCUMENTO_SECTOR: '1',
  POS: '0',
  CUF: '159FFE6FB1986A24BB32D9C788C2785A0005A6A7' }

// Test 2 most common call:
 { NIT_EMISOR: '123456789',
  'NÚMERO_FACTURA': '1',
  FECHA_HORA: '20190113163721231',
  SUCURSAL: '0',
  MODALIDAD: '1',
  'TIPO_EMISIÓN': '1',
  'CÓDIGO_DOCUMENTO_FISCAL': '1',
  TIPO_DOCUMENTO_SECTOR: '1',
  POS: '0',
  CUF: '159FFE6FB1986A24BB32DBE5A2A34214B245A6A3' }

// Test 3 FECHA_HORA takes data from module:
 { NIT_EMISOR: '123456789',
  'NÚMERO_FACTURA': '1',
  FECHA_HORA: '20190328113205475',
  SUCURSAL: '0',
  MODALIDAD: '1',
  'TIPO_EMISIÓN': '1',
  'CÓDIGO_DOCUMENTO_FISCAL': '1',
  TIPO_DOCUMENTO_SECTOR: '1',
  POS: '0',
  CUF: '159FFE6FB198D41F2B9F4EDD635C98B1CF45A6A9' }

// Test 4 FECHA_HORA is no present:
 { NIT_EMISOR: '123456789',
  'NÚMERO_FACTURA': '29',
  FECHA_HORA: '20190328113205478',
  SUCURSAL: '0',
  MODALIDAD: '1',
  'TIPO_EMISIÓN': '2',
  'CÓDIGO_DOCUMENTO_FISCAL': '2',
  TIPO_DOCUMENTO_SECTOR: '6',
  POS: '0',
  CUF: '159FFE6FB198D41F2B9F5537B12637CC82F50027' }

// Test 5 NIT_EMISOR is number type, FECHA_HORA is no present:
 { NIT_EMISOR: '123456789',
  'NÚMERO_FACTURA': '29',
  FECHA_HORA: '20190328113205479',
  SUCURSAL: '0',
  MODALIDAD: '1',
  'TIPO_EMISIÓN': '2',
  'CÓDIGO_DOCUMENTO_FISCAL': '2',
  TIPO_DOCUMENTO_SECTOR: '6',
  POS: '0',
  CUF: '159FFE6FB198D41F2B9F5755CB07018735350023' }

// Test 6 FECHA_HORA is number type, TIPO_EMISIÓN contains non numeric type
 ERROR

// Get local time in required format

Local time:  20190328113205481

```
![TBO](https://raw.githubusercontent.com/aleftos/billbo/master/TBO-icon-logo-128.png)
<ul>
 <li>Coder & programmer: Luis Sanabria</li>
 <li>Copyright: &copy <a href="http://arquetic.org">Arquetic.org</a> 2019 </li>
 <li>Date: March, 2019</li>
 <li>Version: 0.0.13</li>
 <li>GitHub: https://github.com/aleftos/billbo</li>
 <li>NPM: https://www.npmjs.com/package/billbo-cuf</li>
</ul>
