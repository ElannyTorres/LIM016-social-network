import { components } from '../views/index.js';

const content = document.querySelector('#root');

const router = (route) => {
  content.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/': {
      return content.appendChild(components.home());
    }
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
