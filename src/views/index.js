import { Home,login }from './home.js';
import { singUp, registrar, authGoogle } from './singUp.js';
//import { login } from './login.js';
import Posts from './posts.js';
import Profile from './profile.js';
import Default from './default.js';

const components = {
  home: { Home, login },
  profile: Profile,
  posts: Posts,
  default: Default,
  singUp: { singUp, registrar, authGoogle },
  //login: { login },

};

export { components };
