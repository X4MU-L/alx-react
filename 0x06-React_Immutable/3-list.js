import { List } from 'immutable';

/* Accepts an array as parameter and converts it into an
immutable List using the Immutable.js library */
export function getListObject(array) {
  // Converts the array to an immutable List structure and returns it.
  const immutableList = List(array);
  return immutableList;
}

/* Accepts two arguments: first one is a List and second one is a string:
        append the string to the list and returns the list */
export function addElementToList(list, element) {
  /*   const newListPush = list.push(element); // The push method mutates
the original array and returns the new length of the array instead */
  const newList = list.concat(element);
  return newList;
}

// const myList = [ 'a', 'f', 'd' ];
// const myString = 'chicken';
// // const func = getListObject(myList); // Internal structure of the immutable List
// // const func2 = getListObject(myList).toJS(); // human readable structure of the immutable List
// // console.log(func);

// const appendString = addElementToList(myList, myString);
// console.log(appendString);
