import { fromJS } from 'immutable';

// This function returns the value of the object at the defined path
export default function accessImmutableObject(object, array) {
  // convert 'object' to immutable object
  const immutableObject = fromJS(object);

  // Used the `getIn` method to access the value at the defined path
  return immutableObject.getIn(array);
}
