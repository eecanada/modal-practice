const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const closeModalButton = document.querySelector('.close-modal-button');
modalBtn.addEventListener('click', () => {
  modalBg.classList.add('bg-active');
});

function closeModal() {
  modalBg.classList.remove('bg-active');
}

closeModalButton.addEventListener('click', closeModal);

// modalBg.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
