import { List, Map } from 'immutable';

// Returns a List containing the values of the two pages: Both are arrays
export function concatElements(page1, page2) {
  const array1 = List(page1);
  const array2 = List(page2);
  const concatenatedList = array1.concat(array2);

  return concatenatedList;
}

/* Returns a List containing the values of the two pages: Both are objects:
    If two values are the same, page2 values should be used */
export function mergeElements(page1, page2) {
  const obj1 = Map(page1);
  const obj2 = Map(page2);
  const mergedObjects = obj1.merge(obj2);

  return mergedObjects;
}

// USAGE:
// const list1 = [1, 2, 4];
// const list2 = ['a', 'b', 'c'];
// console.log(concatElements(list1, list2).toJS());

// const obj1 = {f: 'b', d: 'c'};
// const obj2 = {a: 1, b: 2};
// console.log(mergeElements(obj1, obj2).toJS()); // returns { f: 'b', d: 'c', a: 1, b: 2 }

// const obj1 = {a: 'b', b: 'c'};
// const obj2 = {a: 1, b: 2};
// console.log(mergeElements(obj1, obj2).toJS()); // returns { a: 1, b: 2 }
