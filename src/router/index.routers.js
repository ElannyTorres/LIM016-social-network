import { components } from '../views/index.js';

const content = document.querySelector('#root');

const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    case '': {
      return content.appendChild(components.home());
    }
    case '#/': {
      return content.appendChild(components.home());
    }
    case '#/singUp':
      content.appendChild(components.singUp.singUp());
      components.singUp.registrar();
      components.singUp.authGoogle();
      break;
    case '#/login':
      content.appendChild(components.login.login());
      components.login.login();
      break;
    case '#/profile': {
      return content.appendChild(components.profile());
    }
    case '#/posts': {
      return content.appendChild(components.posts());
    }
    default:
      return content.appendChild(components.default());
  }
};

export { router };
