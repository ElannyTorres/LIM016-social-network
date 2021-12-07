// Este es el punto de entrada de tu aplicacion
/*
import { myFunction } from './lib/index.js';
import { registrar } from './firebase/login.js';

myFunction();

registrar();
 */

import { router } from './router/index.routers.js';

router('#/');

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
