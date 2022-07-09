// const plantList = [
//   {
//     name: 'monstera',
//     category: 'classique',
//     id: '1ed',
//   },
//   {
//     name: 'ficus lyrata',
//     category: 'classique',
//     id: '2ab',
//   },
//   {
//     name: 'pothos argenté',
//     category: 'classique',
//     id: '3sd',
//   },
//   {
//     name: 'yucca',
//     category: 'classique',
//     id: '4kk',
//   },
//   {
//     name: 'olivier',
//     category: 'extérieur',
//     id: '5pl',
//   },
//   {
//     name: 'géranium',
//     category: 'extérieur',
//     id: '6uo',
//   },
//   {
//     name: 'basilique',
//     category: 'extérieur',
//     id: '7ie',
//   },
//   {
//     name: 'aloe',
//     category: 'plante grasse',
//     id: '8fp',
//   },
//   {
//     name: 'succulente',
//     category: 'plante grasse',
//     id: '9vn',
//   },
// ];

// const categories = plantList.reduce(
//   (acc, plant) => (acc.includes(plant.category) ? acc : acc.concat(plant.category)),

//   [],
// );

const input = ['toto', 'tata', 'toto', 'toto'];

const output = input.reduce((acc, mot) => {
  console.log(acc[mot]);
  acc[mot] = ++acc[mot] || 1;
  //console.log(acc);
  return acc;
}, []);

//console.log(output);
