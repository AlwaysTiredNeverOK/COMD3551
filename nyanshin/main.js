var modal = document.getElementById('wish-result');
var wishButton = document.getElementbyClass('wish-button');
var closeModal = document.getElementbyId('close-button');

wishButton.addEventListener('click', openModal);

function openModal(){
	modal.style.display = 'block';
}