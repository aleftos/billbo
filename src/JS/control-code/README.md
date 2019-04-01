 Summary:
            <h1>Utilities for the national tax billing system of Bolivian country.</h1>
 
 <h2>Description (Legacy: still in use):</h2>
NUEVA ESPECIFICACIÓN TÉCNICA DEL CÓDIGO DE CONTROL
Ver.7.0 (10.09.2007)
<ol>
<li>
ANTECEDENTES
En el marco del Nuevo Sistema de Facturación implementado por la Administración Tributaria, se tiene prevista la incorporación de nuevos elementos de seguridad en las facturas  emitidas por sistemas de facturación computarizada. En este sentido, toda factura emitida por este medio, deberá incorporar un Código de Control generado a partir de información de la misma.<br>
A efectos del Nuevo Sistema de Facturación, solo podrán emitir facturas aquellos sistemas de facturación computarizada que tengan implementado el generador del Código de Control, estén registrados en Impuestos Nacionales, y además pasen por un proceso de certificación que verifique la correcta generación del Código de Control.
</li>
<li>
¿QUE ES EL CÓDIGO DE CONTROL?
Es un dato alfanumérico generado e impreso por un sistema de facturación computarizada a tiempo de emitir una factura. Constituye una representación única de una factura, que será empleada por el SIN para que junto a otra información permitan determinar la validez o no de la misma.<br>
Este código se genera en base a información de dosificación de la factura, información de la transacción comercial, y un dato alfanumérico denominado Llave de Dosificación, que el contribuyente recibirá por Internet cada vez que solicite dosificaciones de facturas para su sistema de facturación computarizada.
</li>
<li>
EMISIÓN DE FACTURAS A TRAVÉS DE SISTEMAS DE FACTURACIÓN COMPUTARIZADA
Todo contribuyente que requiera emitir facturas haciendo uso de un sistema de facturación computarizada, deberá previamente:
<ul>
<li>
Registrar su sistema de facturación computarizada en el SIN, llevando a cabo el trámite de Registro de Autoimpresores en oficinas de Impuestos Nacionales, o a través del Portal Tributario, siempre que el contribuyente sea Newton.
</li>
<li>
Certificar la correcta generación del Código de Control, ingresando al Portal Tributario y sometiéndose a una prueba de certificación, la cual verificará que su sistema de facturación genera correctamente el Código de Control.<br>
Una vez que su sistema de facturación esté registrado y certificado por el SIN, el contribuyente podrá:
</li>
<li>
Solicitar dosificación de facturas para su sistema de facturación computarizada. Este trámite deberá realizarse a través del Portal Tributario, producto del mismo el contribuyente recibirá un Certificado de Activación de Dosificación, que incluirá información de la dosificación realizada.
</li>
<li>
Recabar la Llave de Dosificación que el SIN asignó a su dosificación, esto a partir del Portal Tributario. Dada la sensibilidad de este dato, su conocimiento y divulgación serán de entera y absoluta responsabilidad del contribuyente.
</li>
<li>
Configurar su sistema de facturación computarizada, ingresando información de dosificación contenida en el Certificado de Activación de Dosificación de Facturas, además de la Llave de Dosificación recibida.
</li>
<li>
Finalmente, el sistema de facturación computarizada estará en condiciones de emitir las facturas dosificadas por el SIN, generando e imprimiendo en cada una el Código de Control correspondiente.
</li>
</ul>
</li>
</ol>
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


```javascript
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
```
<h3>Output</h3>
```javascript
Test 0:
{
. ControlCode: "6A-DC-53-05-14",
. QRCodeBase64: "data:image/gif;base64,R0lGODdhlgCWAIAAAAAAAP///ywAAAAAlgCWAAAC/ ...",
. QRCodeText: "4189179011|1503|29040011007|02072007|2500|2500|6A-DC-53-05-14|4189179011|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Dos mil quinientos  con 0/100 Bolivianos",
. . split: {
. . . integer: "Dos mil quinientos ",
. . . cents: "",
. . . centsHTML: "con <sup>0</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB2,500.00"
. . }
. }
}

Test 1:
{
. ControlCode: "FB-A6-E4-78",
. QRCodeBase64: "data:image/gif;base64,R0lGODdhlgCWAIAAAAAAAP///ywAAAAAlgCWAAAC/ ...",
. QRCodeText: "1026469026|152|79040011859|28072007|135|135|FB-A6-E4-78|1026469026|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Ciento treinta y cinco con 0/100 Bolivianos",
. . split: {
. . . integer: "Ciento treinta y cinco",
. . . cents: "",
. . . centsHTML: "con <sup>0</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB135.00"
. . }
. }
}

Test 2:
{
. ControlCode: "71-D5-61-C8",
. QRCodeBase64: "data:image/gif;base64,R0lGODdhlgCWAIAAAAAAAP///ywAAAAAlgCWAAAC/ ...",
. QRCodeText: "1004141023|665|20040010113|08012007|905,23|905,23|71-D5-61-C8|1004141023|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Novecientos cinco con 23/100 Bolivianos",
. . split: {
. . . integer: "Novecientos cinco",
. . . cents: "veintitres",
. . . centsHTML: "con <sup>23</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB905.23"
. . }
. }
}

Test 3:
{
. ControlCode: "62-12-AF-1B",
. QRCodeBase64: "data:image/gif;base64,R0lGODdhlgCWAIAAAAAAAP///ywAAAAAlgCWAAAC/ ...",
. QRCodeText: "0|978256|1904008691195|01022008|26006|26006|62-12-AF-1B|0|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Veintiseis mil seis con 0/100 Bolivianos",
. . split: {
. . . integer: "Veintiseis mil seis",
. . . cents: "",
. . . centsHTML: "con <sup>0</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB26,006.00"
. . }
. }
}

Test 4:
{
. ControlCode: "6A-50-31-01-32",
. QRCodeBase64: "data:image/gif;base64,R0lGODdhlgCWAIAAAAAAAP///ywAAAAAlgCWAAAC/ ...",
. QRCodeText: "1035012010|9901|10040010640|13082007|451,49|451,49|6A-50-31-01-32|1035012010|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Cuatrocientos cincuenta y uno con 49/100 Bolivianos",
. . split: {
. . . integer: "Cuatrocientos cincuenta y uno",
. . . cents: "cuarenta y nueve",
. . . centsHTML: "con <sup>49</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB451.49"
. . }
. }
}

Test 5:
{
. ControlCode: "A8-6B-FD-82-16",
. QRCodeBase64: "data:image/gif;base64,R0lGODdhlgCWAIAAAAAAAP///ywAAAAAlgCWAAAC/ ...",
. QRCodeText: "953387014|10015|30040010595|25082007|5725,90|5725,90|A8-6B-FD-82-16|953387014|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Cinco mil setecientos veinticinco con 90/100 Bolivianos",
. . split: {
. . . integer: "Cinco mil setecientos veinticinco",
. . . cents: "noventa",
. . . centsHTML: "con <sup>90</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB5,725.90"
. . }
. }
}

```
![TBO](https://raw.githubusercontent.com/aleftos/billbo/master/TBO-icon-logo-128.png)
<ul>
 <li>Coder & programmer: Luis Sanabria</li>
 <li>Copyright: &copy <a href="http://arquetic.org">Arquetic.org</a> 2019 </li>
 <li>Date: March, 2019</li>
 <li>Version: 0.0.14</li>
 <li>GitHub: https://github.com/aleftos/billbo</li>
 <li>NPM: https://www.npmjs.com/package/billbo-cuf</li>
</ul>