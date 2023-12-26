import { is } from 'immutable';

/* Accepts two arguments map1 and map2. Both are Immutable.js Maps:
        It should return 'true' if the Maps are equal */
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}

// USAGE:

// const map1 = new Map(
//     {
//       firstName: 'Guillaume',
//       lastName: 'Salva',
//     }
//   );
//   const map2 = new Map(
//     {
//       firstName: 'Guillaume',
//       lastName: 'Salva',
//     }
//   );

// console.log(areMapsEqual(map1, map2));
