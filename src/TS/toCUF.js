/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: BigInt patch to Typescript 3.4.1
*/

module.exports = {
  toCUF: (data) => {
    return BigInt(data).toString(16).toUpperCase();
  }
}