// import { Map } from 'immutable';
import { Map } from 'immutable';

// Convertss object into Immutable Map
export default function getImmutableObject(object) {
  return Map(object);
}
