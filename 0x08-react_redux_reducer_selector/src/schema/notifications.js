// import * as data from '../../datas.json';
// const {data} = require('../../datas.json');

import { createRequire } from 'node:module'; // used to create a custom 'require' function, so that i can import a commonJS(.json) module into an ecmascript module
const require = createRequire(import.meta.url);
const all_data = require('../../notifications.json');

export function getAlldatasByUser(userId) {
  // console.log('data:', data);

  return all_data
    .filter((data) => data.author.id === userId)
    .map((data) => data.context);
}

// console.log(getAlldatasByUser("5debd764ec7c8d21449be7d7"));
