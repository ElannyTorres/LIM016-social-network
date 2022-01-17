import { loadPosts } from '../src/firebase/timeline_functions.js';

jest.mock('../src/firebase/app.js');

describe('loadPost', () => {
  it('debería ser una función', () => {
    expect(typeof loadPosts).toBe('function');
  });
});
