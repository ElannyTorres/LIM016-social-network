import { components } from '../view/components.js';

// eslint-disable-next-line consistent-return
const changeView = (route) => {
  const container = document.querySelector('#main');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/signUp': {
      return container.appendChild(components.logIn());
    }
    case '#/profile':
      container.appendChild(components.header());
      container.appendChild(components.profile());
      container.appendChild(components.footer());
      break;
    case '#/timeLine': {
      container.appendChild(components.header());
      container.appendChild(components.profileOne());
      container.appendChild(components.newPost());
      container.appendChild(components.timeLine());
      container.appendChild(components.footer());
      break;
    }
    default:
      container.appendChild(components.header());
      container.appendChild(components.different());
      container.appendChild(components.footer());
      break;
  }
};

export { changeView };
