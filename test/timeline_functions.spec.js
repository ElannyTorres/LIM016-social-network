/* eslint-disable no-unused-vars */
import TimeLine from '../src/views/posts';
import { loadPosts } from '../src/firebase/timeline_functions.js';

jest.mock('../src/firebase/app.js');

describe('loadPost', () => {
  const timeLine = TimeLine();
  it('debería cargar todos los post que se publicaron', () => {
    expect(typeof loadPosts).toBe('function');
  });
});
