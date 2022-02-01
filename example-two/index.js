'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const openModalButtons = document.querySelectorAll('.show-modal');

openModalButtons.forEach((openModalButton) =>
  openModalButton.addEventListener('click', () =>
    modal.classList.remove('hidden')
  )
);
