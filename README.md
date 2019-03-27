 Summary:
            <h1>Utilities for the national tax billing system of Bolivian country.</h1>
 
 Install:
 
            npm install billbo
 
Description:

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

Ejemplo:
Con los siguientes datos:
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

![TBO](https://raw.githubusercontent.com/aleftos/billbo/TBO-icon-logo-256.png)
<p>
 • Coder & programmer: Luis Sanabria
 • Copyright: (c) <a href="http://arquetic.org">Arquetic.org</a> 2019 
 • Date: March, 2019
 • Version: 0.0.1
 • GitHub: https://github.com/aleftos/billbo
</p>
