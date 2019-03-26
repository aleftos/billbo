 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * Version: 0.0.1
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
