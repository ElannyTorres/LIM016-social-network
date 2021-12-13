// Este es el punto de entrada de tu aplicacion
import { router } from './router/index.routers.js';
/*
router('#/');

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

import { changeTmp } from './view-controller/router.js'; */

const init = () => {
  router(window.location.hash);
  window.addEventListener('hashchange', () => router(window.location.hash));
};

window.addEventListener('load', init);
