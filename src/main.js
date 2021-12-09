// Este es el punto de entrada de tu aplicacion
import { router } from './router/index.routers.js';

router('#/');

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
