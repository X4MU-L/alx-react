import { Seq } from 'immutable';

/* Operations on a lazy Seq do not modify the original data; instead,
they create new Seq instances. This computations are deferred until the final
result is needed i.e. when you explicitly request a result.

It accepts one object as argument:
    Calling the function should filter any student with a score < 70 and print
    to the console the first name and the last name with the first letter capitalized */
export default function printBestStudents(obj) {
  const filtererdObj = Seq(obj)
    .filter((x) => x.score >= 70)
    .map((x) => ({
      ...x,
      firstName: x.firstName.charAt(0).toUpperCase() + x.firstName.slice(1),
      lastName: x.lastName.charAt(0).toUpperCase() + x.lastName.slice(1),
    }))
    .toObject();

  console.log(filtererdObj);
}

// const grades = {
//     1: {
//       score: 99,
//       firstName: 'guillaume',
//       lastName: 'salva',
//     },
//     2: {
//         score: 60,
//         firstName: 'Nana',
//         lastName: 'alva',
//       }
//   };

// // USAGE:
// printBestStudents(grades);
