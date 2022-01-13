/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import { showModal } from './showModal.js';

const profileData = JSON.parse(sessionStorage.userData);

export default () => {
  const views = `
    <section class="profile">
  <div class="profilePhoto">
  <img src="${profileData.photoUrl}" alt="Profile Photo">
  </div>
  <div class="profileInfo">
  <h4 class="name">${profileData.displayName}</h4>
  <h6 class="status">Amante de la comida</h6>
  </div>
  </section>
  <section class="postContainer">
  <form id="postForm" name="postForm" class="createPostContainer">
  <textarea rows="3" id="textDescription" class="textToCreate" placeholder="¿Qué deseas compartir?" autofocus></textarea>
  <div class="btnsToCreate">
  <ul>
  <li><button class="btnPicture"><i class="fas fa-image"></i></button></li>
  <li><button type="submit" id="btnShare" class="btnShare">Compartir</button></li>
  </ul>
  </div>
  </form>
  <div class="posted">
  </div>
  <div id="modal"></div>
  </section>
  <footer>
  <div class="titleContainer">
  <ul>
  <li><a href="#/profile"><i class="fas fa-user"></i></a></li>
  <li>
  <a href="#/posts"><i class="fas fa-home"></i></a>
  </li>
  <li><a href="#/"><i class="fas fa-sign-out-alt"></i></a></li>
  </ul>
  </div>
  </footer>
        `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'postGridView');
  divElement.innerHTML = views;

  return divElement;
};
