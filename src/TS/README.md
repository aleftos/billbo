 Summary:
            <h1>Utilities for the national tax billing system of Bolivian country.</h1>
 
 <h2>Install:</h2>
 
            npm install billbo
            or
            npm install @arquetic/billbo
            or
            git clone https://github.com/aleftos/billbo
 
<h2>Requirements:</h2>

            npm install -g typescript
            and
            npm install -g ts-node

To transpiler:

            tsc src/TS/examples.ts

To run:

            ts-node src/TS/examples.ts

```javascript
import { CUFind, CUFTime } from '../TS/cufind';

let test = new CUFind({
  NIT_EMISOR: '123456789',
  NÚMERO_FACTURA: '1',
  FECHA_HORA: '20190113163721231'
});

console.log('Test: ', test.billData);

console.log(
  'Test 1 NIT_EMISOR = 123456789, NÚMERO_FACTURA = 1, FECHA_HORA = 20190113163721231 :\n',
  new CUFind({
    NIT_EMISOR: 123456789,
    NÚMERO_FACTURA: 1,
    FECHA_HORA: 20190113163721231
  }).billData
)

console.log(
  'Test 2 most common call:\n',
  new CUFind({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '1',
    FECHA_HORA: '20190113163721231'
  }).billData
)

console.log(
  'Test 3 FECHA_HORA takes data from module:\n',
  new CUFind({
    NIT_EMISOR: '123456789',
    NÚMERO_FACTURA: '1',
    FECHA_HORA:  new CUFTime().getCUFTime()  // * local time new
  }).billData
)

console.log(
  'Test 4 FECHA_HORA is no present:\n',
  new CUFind(
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
  ).billData
)

console.log(
  'Test 5 NIT_EMISOR is number type, FECHA_HORA is no present:\n',
  new CUFind(
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
  ).billData
)

console.log(
  'Test 6 FECHA_HORA is number type, TIPO_EMISIÓN contains non numeric type:',
  new CUFind(
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
  ).billData
)

console.log('Local time: ', new CUFTime().getCUFTime());
```
<h3>Output:</h3>

```javascript
Test:  { NIT_EMISOR: '123456789',
  'NÚMERO_FACTURA': '1',
  FECHA_HORA: '20190113163721231',
  SUCURSAL: '0',
  MODALIDAD: '1',
  'TIPO_EMISIÓN': '1',
  'CÓDIGO_DOCUMENTO_FISCAL': '1',
  TIPO_DOCUMENTO_SECTOR: '1',
  POS: '0',
  CUF: '159FFE6FB1986A24BB32DBE5A2A34214B245A6A3' }

Test 1 NIT_EMISOR = 123456789, NÚMERO_FACTURA = 1, FECHA_HORA = 20190113163721231 :
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

Test 2 most common call:
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

Test 3 FECHA_HORA takes data from module:
 { NIT_EMISOR: '123456789',
  'NÚMERO_FACTURA': '1',
  FECHA_HORA: '20190329165622385',
  SUCURSAL: '0',
  MODALIDAD: '1',
  'TIPO_EMISIÓN': '1',
  'CÓDIGO_DOCUMENTO_FISCAL': '1',
  TIPO_DOCUMENTO_SECTOR: '1',
  POS: '0',
  CUF: '159FFE6FB198D4A4010BF368A1018AAD6EC5A6A6' }

Test 4 FECHA_HORA is no present:
 { NIT_EMISOR: '123456789',
  'NÚMERO_FACTURA': '29',
  FECHA_HORA: '20190329165622388',
  SUCURSAL: '0',
  MODALIDAD: '1',
  'TIPO_EMISIÓN': '2',
  'CÓDIGO_DOCUMENTO_FISCAL': '2',
  TIPO_DOCUMENTO_SECTOR: '6',
  POS: '0',
  CUF: '159FFE6FB198D4A4010BF9C2EECB29C822750024' }

Test 5 NIT_EMISOR is number type, FECHA_HORA is no present:
 { NIT_EMISOR: '123456789',
  'NÚMERO_FACTURA': '29',
  FECHA_HORA: '20190329165622389',
  SUCURSAL: '0',
  MODALIDAD: '1',
  'TIPO_EMISIÓN': '2',
  'CÓDIGO_DOCUMENTO_FISCAL': '2',
  TIPO_DOCUMENTO_SECTOR: '6',
  POS: '0',
  CUF: '159FFE6FB198D4A4010BFBE108ABF382D4B50020' }

Test 6 FECHA_HORA is number type, TIPO_EMISIÓN contains non numeric type: { NIT_EMISOR: '123456789',
  'NÚMERO_FACTURA': '29',
  FECHA_HORA: '20190113163721250',
  SUCURSAL: '0',
  MODALIDAD: '1',
  'TIPO_EMISIÓN': '2A',
  'CÓDIGO_DOCUMENTO_FISCAL': '2',
  TIPO_DOCUMENTO_SECTOR: '6',
  POS: '0',
  CUF:
   'ERROR: Malformed arguments to CUF constructor: TIPO_EMISIÓN: 2A' }

// Get CUF local time

Local time:  20190329165622389
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
