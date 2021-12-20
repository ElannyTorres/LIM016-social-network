import { components } from '../views/index.js';

const content = document.querySelector('#root');

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
    case '#/profile': {
      return content.appendChild(components.profile());
    }
    case '#/posts':
      content.appendChild(components.posts.Posts());
      components.posts.loadPosts();
      components.posts.savePost();
      components.posts.deleteBtn();
      break;
    default:
      return content.appendChild(components.default());
  }
};

export { router };
