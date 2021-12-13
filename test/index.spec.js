// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/indice.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
