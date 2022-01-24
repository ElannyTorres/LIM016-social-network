/* eslint-disable import/named */
import { components } from '../views/index.js';

const content = document.querySelector('#root');

// eslint-disable-next-line consistent-return
const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    case '':
    case '#/':
      content.appendChild(components.home.Home());
      components.home.login();
      components.home.loginAuthGoogle();
      break;
    case '#/singUp':
      content.appendChild(components.singUp.singUp());
      components.singUp.registrar();
      components.singUp.authGoogle();
      break;
    case '#/profile':
      content.appendChild(components.posts.header());
      components.posts.cerrarSesion();
      content.appendChild(components.profile());
      break;
    case '#/posts':
      content.appendChild(components.posts.header());
      content.appendChild(components.posts.Posts());
      components.posts.loadPosts();
      components.posts.savePost();
      components.posts.editBtn();
      components.posts.deleteBtn();
      components.posts.cerrarSesion();
      content.appendChild(components.posts.Links());
      break;
    default:
      return content.appendChild(components.default());
  }
};

export { router };
