let l = require('../stuff/to-literal');

console.log(
  'Test 1, tens with cents:\n',
  l.toLiteral(541.34, {
    plural: 'Bolivianos',
    singular: 'Boliviano',
    centPlural: 'centavos',
    centSingular: 'centavo'
  })
);

console.log(
  '\nTest 2, thousands with cents:\n',
  l.toLiteral(9541.34, {
    plural: 'Dólares',
    singular: 'Dólar',
    centPlural: 'centavos',
    centSingular: 'centavo',
    acronym: 'USD'
  })
);

console.log(
  '\nTest 3, Zero with cents:\n',
  l.toLiteral(0.50)
);

console.log(
  '\nTest 4, One unit with cents:\n',
  l.toLiteral(1.11, {
    plural: 'Pesos',
    singular: 'Peso'
  })
);

console.log(
  '\nTest 5, One unit without cents:\n',
  l.toLiteral(1, {
    plural: 'Bolivianos',
    singular: 'Boliviano',
    centPlural: 'centavos',
    centSingular: 'centavo'
  })
);

console.log(
  '\nTest 6, hundreds with cents:\n',
  l.toLiteral(987654.34, {
    plural: 'Bolivianos',
    singular: 'Boliviano',
    centPlural: 'centavos',
    centSingular: 'centavo'
  })
);
