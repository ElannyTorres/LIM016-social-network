import { Home, login, loginAuthGoogle } from './home.js';
import { singUp, registrar, authGoogle } from './singUp.js';
import { savePost, deleteBtn, loadPosts } from '../firebase/timeline.js';
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
