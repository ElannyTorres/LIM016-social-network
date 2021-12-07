// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { registrar, authGoogle } from './firebase/login.js';
//import { app } from './firebase/app.js';

myFunction();

registrar();

authGoogle()