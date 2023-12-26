import { Map } from 'immutable';

//  Creates an Immutable Map with the object passed into Map()
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Modifies values at particular index...
export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');

// export const map2 = map.withMutations( m => {
//     m.set('4', 'Oliver'),
//     m.set('2', 'Benjamin')
//   });

// console.log(map2.toJS());
// console.log(map2);
// console.log(map);
