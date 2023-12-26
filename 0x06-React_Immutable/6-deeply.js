import { Map } from 'immutable';

/* Returns a List containing the values of the two pages: Both are objects.
        If two values are the same, they should combine each other */
export default function mergeDeeplyElements(page1, page2) {
  const list1 = Map(page1);
  const list2 = Map(page2);
  const deepMergedList = list1.mergeDeep(list2);

  return deepMergedList;
}
// UASGE:
// const listA = { ad: 1, value: 'a' };
// const listB = { id: 2, value: 'b' };
// console.log(mergeDeeplyElements(listA, listB).toJS());

// const listA = {
//     'user-1': {
//       id: 1,
//       name: 'test',
//       likes: {
//         1: {
//           uid: 1234,
//         }
//       }
//     },
//   };
//   const listB = {
//     'user-1': {
//       likes: {
//         2: {
//           uid: 134,
//         }
//       }
//     },
//   };
// console.log(mergeDeeplyElements(listA, listB).toJS());
