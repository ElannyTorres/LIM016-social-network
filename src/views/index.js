import { Home, login, loginAuthGoogle } from './home.js';
// eslint-disable-next-line import/named
import { singUp, registrar, authGoogle } from './singUp.js';
import {
  savePost,
  deleteBtn,
  loadPosts,
  editBtn,
} from '../firebase/timeline_functions.js';
import Posts from './posts.js';
import Profile from './profile.js';
import Default from './default.js';

const components = {
  home: {
    Home,
    login,
    loginAuthGoogle,
  },
  profile: Profile,
  posts: {
    Posts,
    loadPosts,
    savePost,
    editBtn,
    deleteBtn,
  },
  default: Default,
  singUp: {
    singUp,
    registrar,
    authGoogle,
  },
};

export { components };
