// importamos la funcion que vamos a testear
import { loadPost } from '../src/firebase/timeline_functions.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
