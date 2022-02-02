const xButton = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const openModalButton = document.querySelector('.open');
const modal = document.querySelector('.modal-container');

function openModal() {
  openModalButton.classList.add('hidden');
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
}

function closeModal() {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
  openModalButton.classList.remove('hidden');
}

overlay.addEventListener('click', closeModal)

openModalButton.addEventListener('click', openModal);

xButton.addEventListener('click', closeModal);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
