//import { componentes } from '../views/indice.js';
import posts from '../views/posts.js';
import home from '../views/home.js';

const content = document.querySelector('#root');

const router = (route) => {
  content.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/': 
      return content.appendChild(/*componentes.home.*/home());
      //componentes.home.authGoogle();
      //break;
    case '#/profile':
      return content.appendChild(posts());
    case '#/posts':
      return console.log('Posts');
    default:
      return console.log('404!!!');
  }
};

export { router };
