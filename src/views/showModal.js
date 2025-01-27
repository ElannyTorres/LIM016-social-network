/* eslint-disable no-unused-expressions */
export const showModal = (message) => {
  const modalBox = document.querySelector('#modal');
  modalBox.classList.toggle('hideIt');
  modalBox.innerHTML = `
          <div class='modalContent'>
          <p class='modalText'>${message}</p>
          <button class='agreeBtn' id ="closeModalBtn">OK</button>
          </div>`;
  const modalClose = document.querySelector('#closeModalBtn');
  modalClose.addEventListener('click', () => {
    modalBox.classList.toggle('hideIt');
  });
  window.addEventListener('click', (e) => {
    if (e.target === modalBox) {
      modalBox.classList.toggle('hideIt');
    }
  });
};
