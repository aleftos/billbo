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
. QRCodeBase64: "data:image/gif;base64,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",
. QRCodeText: "4189179011|1503|29040011007|02072007|2500|2500|6A-DC-53-05-14|4189179011|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Dos mil quinientos  con 0/100 Bolivianos",
. . split: {
. . . integer: "Dos mil quinientos ",
. . . cents: "",
. . . centsHTML: "con <sup>0</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB 2,500.00"
. . }
. }
}

Test 1:
{
. ControlCode: "FB-A6-E4-78",
. QRCodeBase64: "data:image/gif;base64,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
Ds=",
. QRCodeText: "1026469026|152|79040011859|28072007|135|135|FB-A6-E4-78|1026469026|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Ciento treinta y cinco con 0/100 Bolivianos",
. . split: {
. . . integer: "Ciento treinta y cinco",
. . . cents: "",
. . . centsHTML: "con <sup>0</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB 135.00"
. . }
. }
}

Test 2:
{
. ControlCode: "71-D5-61-C8",
. QRCodeBase64: "data:image/gif;base64,R0lGODdhlgCWAIAAAAAAAP///ywAAAAAlgCWAAAC/4yPqcvtD6OcdIKLs94cZY+BlwhQ38GlJRo+6qsa8KyRNjviq3TKdO4DNn6/IPF1MyYDvUjzuGQcZ
8ZpR7d8tnhbJjG6sCK9QlOXRMWGz7q0oillc3Nwi5xMAyvXRf5ueAdxUjf3hwajhxfX9xaoVqEYCUmI5yaZQAnlJ+joMNhlqTXWWPZYeeWJeiokGqPWmpKFuElbpbpY0wa6OxoJq/q7gTusK+wCjMw6uxecu
2drTGpoaonbLNv7qZzN6wottj39fBlLvezbXT4eCp4sTp7efRiNHq4Oz93ufIn9d9/cat05gPH0JQpYzF/BfdoU5nP4jp29gfJqYVqIkGC4g/8UJz7kWErgR3zeSFpzN68kQmnEvmXEWHFcypWrVMa8GJLkv
xaUOOVMCdRUUJH7fL4zKtPOz4RD+TE1Rw8ppHpHjy391jQTyqeFplL12pNrTZAMF5q5CoiOvrIboULsB9ftTDEu6cq9SzRuXrdrV/SlCfhm4LZ761oxPEWvSbyLC+tc6zVy45r3FLeUjDlzKsKUbzG+rDm06
MF5LIZNKjp1ZNLVPltUnbY0S76eEc+ldxpnxI5+v5iGmVOibKebd4/UNJto5YQa2VZNrnunWka6+y23zXxrVz/SpzU3Svrs87FCy2+/3FpaeKXju4NmX/x2e+3EY4O/mUgq+nMnOef/zi+WVmi91x9EAg733
2+4deLEHQl2d6BwYJllXgUHFnINd7xN6NFbmF3Y4IJRZSfiePuVmBmI8hG4moMujqgcfhUul159HBqHo4rkoVYfjfxVeCOL1z3GGVl11JjgedVpGByFPEbIho5DQgicc1P6ht1eUta2Y5fIddYkdRK+8qKBZ
WaI2HdM2jQSM2U2lZU7wl0p5oblQYlWc1T2ol+PMkL3JJfWYQlmUVZ5CF1uR57JoJ5y/hjfjH8uaWSjVe5ZUp9b5hklpF3CSVuR7NE06ICFFoiqgs7dSGqoJp66ZqqJ0ideqzGaiiSXdJopKoaTormmeyRmG
it8U+lIVpqC/9lVXJI2Hirkm4WyRqisIb4KqKRh9lZnhzWCGukk0mbrJozR2aksiq8Fi+6n53LaLa8Ijhvbl8CqZ2m88glL7rvzdthsvv/KO2a/+9I3JL7mJssuwMYqnFjD3nnKMMT3QitxrnzCGi6l/l7c8
cEbZzlsn5WW6CyeEVvcqcPpYutxrQxW7G5SwH4pHqszayvvezdX+7CFgq57K46zokwxxuIuTDSRRnMsNHU0l2poyDyzbCrWVfu57YpBTw21zCNz/TTJJl/98c5aI4u22UrHfCdv4KTmaK8tMu31ywkfe+mkO
uMqN7Oa1Y3o4EPnPW3SSxNM64eHN30f3nBbDTHYR/9X5SziZ1Pur+Ueh5V5yV+/bS3bl3Me+dYsrh4gvSdOjLR/j3turecXY0p1zpAX2++mhuLuqu4G8z452aACX7Twxdfe9uez3721xmVHPV/XQKq2666so
9586H/nqKvro/fuN/bhj236tZtPVrmqr6fOr/qqxt+Q7+8fWrD8l9PP0/mFW5ax8pHPW8uaTvR+JcDE2S1aBJTdUuz3tm+1LmteUtyzINgxCWLleu1z2/AwaB/RBWyBxNPgBemlqCqlDkAdDNu6UiY+x9iLU
ZJbH/cGOD3CnUx14yOdDwPlwIEVyHvLC6GSaKZDnu3tiEZ0nsucdr8Nng5/AmtIFCv4RMX/aI+DNeuc8YIHxilK0YnV4+EGQcg/c1HLejwClxdft8QuspB9IlTgyiJowTim0G5z+gvgGljGPZZxh4TDWRNNq
EeBEbJvh4EN8eKkLiAGsopOcmT2KmmrZ42xdM/7Hicj+cURTjKL5lPjo4K4PTlOMBd+ZGMX04fGAh7QgH2BYwxDSUYt+k9vngIZLpEoSzfWDzLzuyUsgxnGJRFRZXMEZps0+UtoMnBVPVSTY6Y5PM7Fb33Wp
CMOs9lESMLMd2kc5AtVyEXNNW1uVGzkGdHZRolxU3BDJFQ5ugnDsS1Sn8PqowERl09i4dCQawvcP+uITwvOMX3qfCcgqdZNGzavmp7bsiJC4enCG0ZTa6lK6EPrKFFJwo+G3GIcKuX5w3oBTYwn/Og1Qbq7g
kpuPbYEpcoEKbbhXBF0GM0kItVmR5y6ppnuS6cjdQkvaqZyp0A9Kk1VSsJlIvOoSsqkODXKVAo6dapQ/V/a3DmZNY4yhxj1WisL99REmjKIlzTGWZGK1sdtsWg37Z8f4Zq7dpLVpV+FGVX/CliqFgAAOw=="
,
. QRCodeText: "1004141023|665|20040010113|08012007|905,23|905,23|71-D5-61-C8|1004141023|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Novecientos cinco con 23/100 Bolivianos",
. . split: {
. . . integer: "Novecientos cinco",
. . . cents: "veintitres",
. . . centsHTML: "con <sup>23</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB 905.23"
. . }
. }
}

Test 3:
{
. ControlCode: "62-12-AF-1B",
. QRCodeBase64: "data:image/gif;base64,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",
. QRCodeText: "0|978256|1904008691195|01022008|26006|26006|62-12-AF-1B|0|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Veintiseis mil seis con 0/100 Bolivianos",
. . split: {
. . . integer: "Veintiseis mil seis",
. . . cents: "",
. . . centsHTML: "con <sup>0</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB 26,006.00"
. . }
. }
}

Test 4:
{
. ControlCode: "6A-50-31-01-32",
. QRCodeBase64: "data:image/gif;base64,R0lGODdhlgCWAIAAAAAAAP///ywAAAAAlgCWAAAC/4yPqcvtD6OcdIKLs94cZY+BXHh8i6mMDNqM7gsY8KyJcUnKsL3miXry9Wg0HXHGw11sQOMtJVTWg
svHsRi4IqVJZzMbdQ6n0KpDuwObKyxmutLyoddjuFj9ZIfxWzs1P5dXZ2fSZrF35TfodQRhKFG454jYqFgGODdJd1jF0ofntrH4I9fxN9oFKvUVufbp+Ua6ecc4q3o5CvuSpOuS+pn6a4p7WkzLN6zay1q6a
yyLKfoczFVdS6bc7GuNLH0dun0sbNsLXn7bjb2czExEffyIvu6d7Ro7r85eKc4df359Dt+/dPjM6SOnLZe2djcEJuQGTqE7iFYo2XN2x+HFaP+CVlnk+ErStH73SGjk+C6dRCz8znw0uBFeyZh//C2c2dElw
o0MW0aIF5GizIk6c8oTWdSnJqNBfZ4EKvSoraVKK071SJMYwGSoSF5Nio4C1G9RnyIN65Wp1YaBDqJMO+7tULlS27ay+3Bu3L1w+25F81cLX71+6w6ui5dt4qyGCw98nJdgJkuEItukdznfV8qcOUPeqdloz
86kSzv+OLApWtOsKzPOnBor3dZjgJ3G+PPm5rHQarsNnDnuF6qyiUNC/VsyvcO2wZJ1nhv06ETPTorVrbaqVmijlw6vid3P59Bdt/O+9B19eNd0u/dem7Joeu7r4YyPrb3xddy+eZ7/XalacPBF9Zx+yrEUB
2jlIYYcY+q9hh110KUkYIEBiuSeWfyN5NRLxYHnIH0Q+gfYgNtRWJ+Is+mhIIGF9ZedSh+e6OJ+okUG4Fq8MVThe555mB9+KnqXIoqbHddikDiCGCOPQPrI5I5LPtjkPioWJNt4gRm32pA6xgITSBFaZhKY1
Z01X5iwuWVdX81BKeVyUXKVZYohhaiajXmm5Z6eZ+6GIZ1IipnkgfGZCCeagco56J5z9cnJjXhCSaV4RfKZnH1PxqmWlpEaKWmMhx1qmqeNlvUklz3SdpuoL6J65Kv5kWZqdCt2GCthNP644awzJlglie0J2
iWWb57364LC/5HJaLHrHftfshwmitmluBKqWDiUfglot9guWyi4HXFa652uPkpshsTu6qWuhtZIrbYXCnuqfMxiK+RK86nbLLvzDosbsug2yy82mgZsJpWQTlgnUVdGa26aDZP36ZwOhzmok/1OnO+0icGIb
MTrcjwlsCBbiTGwa25cr4xbchvqglDtmzCL305MZLiwdppuzX4W+KajzuosdNAVA+2ztNcOIrDKKGNKL85Q32pylzZKGC+WLw9MNdPR2nvx1P8W3DExTZ/cK4NRb61218WYq+bXLre9sNVMZpzpgU2TjZOyd
9vKd9owilv33iOnzLXElU5duNyKtzr4zkJqCDDF7v+6uzLVjQsbeOXU1Ppv5EuTPKLlBmLeoOZ5E553waRKzXWpcr+u7+pOV7t2Z2fDWzvursKttCK7+2pe34C3frjNluaate05WgKtdPeuuvPBbuNNcOriy
pyqrbTDTD3SuYPq9/PC15z59h53z3rp5gey/M1sBzSm+3/imzR0Gpt+F+Knt4q1n80NeBmpn+fuFzeWVU182upYj/anqslYz3x+eyCbFMW5/C0wXlxil9bm1jsECXBU0xodAzmVQIMdjYOIstCvaJY96TFvc
zE7ngzl165tuRBsqiPa3xa3QxBKznHOG9rveua79K1PgaFbIs/sx0PuMU9oKTScNED3Qx3/2i2K4NNgULAIRC0OT4gK8+KHwJhD8rGHXE/jYgfFBkfiGXF/H1Pe/e5TMik2cDFMFKOd/jjD1FEugN674/Ty6
EQ64oVVZZxU3dAmwiw+DnrGC6MV25IzHLaGgDm8JPxgRkXdVbKTRLRLJr/Ix1DV0V+lwWOLUqnKRZawlYd8ZSohSUg5xk99ZrulxQQzS1rVsoZjVGLikKjJFjqRlQxjYApDOMJlavGNziRdDYNYPiMyc4NNB
M6mkvc66rXpWo+DpdG8Kbjm+Q6SmTQnBjFZyPkJ8p3uVOAqEcVJ/+HSlzzMpSHXCa/JDVNkGUznOP9XvEINEpDADCEaSYi6Ep2wj42Mu1cEFWpACFpzZgZsnwrJWcpgXZOM/+QfRY0ZT27GEZ+j9CdKqenH8
W2Qky7V3gr1GMrvJVRe1cui6LaY0m06lH1zpCciWybUkoavqN4qW1CnydK0LbWcRYxmFXECQ/ylU3/fLGi27hk9rfK0ZRb0KjoRFNarTlFWBtoCLPVZ0a3OtKtiZaRd74rXCBQAADs=",
. QRCodeText: "1035012010|9901|10040010640|13082007|451,49|451,49|6A-50-31-01-32|1035012010|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Cuatrocientos cincuenta y uno con 49/100 Bolivianos",
. . split: {
. . . integer: "Cuatrocientos cincuenta y uno",
. . . cents: "cuarenta y nueve",
. . . centsHTML: "con <sup>49</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB 451.49"
. . }
. }
}

Test 5:
{
. ControlCode: "A8-6B-FD-82-16",
. QRCodeBase64: "data:image/gif;base64,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",
. QRCodeText: "953387014|10015|30040010595|25082007|5725,90|5725,90|A8-6B-FD-82-16|953387014|0.00|0.00|0.00|0.00",
. LiteralBillAmount: {
. . literal: "Cinco mil setecientos veinticinco con 90/100 Bolivianos",
. . split: {
. . . integer: "Cinco mil setecientos veinticinco",
. . . cents: "noventa",
. . . centsHTML: "con <sup>90</sup>/<sub>100</sub>",
. . . currency: "Boliviano",
. . . format: "BOB 5,725.90"
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