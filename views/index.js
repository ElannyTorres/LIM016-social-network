/* eslint-disable import/no-duplicates */
import { Home, login, loginAuthGoogle } from './home.js';
import { singUp, registrar, authGoogle } from './singUp.js';
import {
  savePost,
  deleteBtn,
  loadPosts,
  editBtn,
} from '../firebase/timeline_functions.js';
import Posts from './posts.js';
import Links from './links.js';
import Profile from './profile.js';
import header from './header.js';
import { cerrarSesion } from './header.js';
import Default from './default.js';

const components = {
  home: {
    Home,
    login,
    loginAuthGoogle,
  },
  profile: Profile,
  posts: {
    header,
    cerrarSesion,
    Posts,
    loadPosts,
    savePost,
    editBtn,
    deleteBtn,
    Links,
  },
  default: Default,
  singUp: {
    singUp,
    registrar,
    authGoogle,
  },
};

export { components };
