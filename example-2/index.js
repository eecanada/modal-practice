'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const openModalButtons = document.querySelectorAll('.show-modal');

openModalButtons.forEach((openModalButton) =>
  openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
);

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

window.addEventListener('keydown', (e) => {
  console.log(e)
  if (e.key === 'Escape') closeModal()
});

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
