import { Home, login, loginAuthGoogle } from './home.js';
import { singUp, registrar, authGoogle } from './singUp.js';
<<<<<<< HEAD
=======
import { savePost, deleteBtn, loadPosts } from '../firebase/timeline.js';
>>>>>>> f698e943281b72b27166dd8fc746eb332e351275
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
<<<<<<< HEAD
  singUp: { singUp, registrar, authGoogle },

=======
  singUp: {
    singUp,
    registrar,
    authGoogle,
  },
>>>>>>> f698e943281b72b27166dd8fc746eb332e351275
};

export { components };
