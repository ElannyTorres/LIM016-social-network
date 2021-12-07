import home from '../views/home.js';
import posts from '../views/posts.js';

const content = document.querySelector('#root');

const router = (route) => {
  content.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/': {
      return content.appendChild(home());
    }
    case '#/profile':
      return content.appendChild(posts());
    case '#/posts':
      return console.log('Posts');
    default:
      return console.log('404!!!');
  }
};

export { router };
