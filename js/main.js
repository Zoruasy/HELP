
window.addEventListener('load', init);
const apiUrl = 'webservice/index.php';
let charactersGallery; // Het element dat de galerij van karakters bevat
let detailModal; // Het element van de modale pop-up
let detailContent; // Het element dat de inhoud van de modale pop-up bevat
let characterData = {}; // Object om karaktergegevens op te slaan


function init() {
    ajaxRequest(apiUrl, createCharacterData);
    charactersGallery = document.getElementById('characters-gallery');
    detailModal = document.getElementById('character-detail');
    detailContent = document.querySelector('.modal-content');

    // Event listeners toevoegen nadat alle variabelen zijn ingesteld
    detailModal.addEventListener('click', detailModalClickHandler);
    detailModal.addEventListener('close', detailModalCloseHandler);
}

function ajaxRequest(url, successHandler) {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error (${response.status}): ${response.statusText}`);
            }
            return response.json();
        })
        .then(successHandler)
        .catch((error) => {
            if (typeof charactersGallery !== 'undefined') {
                getCharacterDataErrorHandler(error);
            } else {
                console.error('Error fetching characters:', error);
            }
        });
}


function createCharacterData(data) {
    for (const character of data) {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');
        characterCard.dataset.id = character.id;
        charactersGallery.appendChild(characterCard);
        fillCharacterCard(character, characterCard);
        ajaxRequest(character.url, fillCharacterCard);
    }
}

function getCharacterDataErrorHandler(error) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.textContent = 'Er is helaas iets fout gegaan bij het ophalen van de data.';
    charactersGallery.before(errorMessage);
}

function fillCharacterCard(character, card) {
    const title = document.createElement('h2');
    title.textContent = `${character.name} (${character.id})`;

    const image = document.createElement('img');
    image.src = character.img;
    image.alt = character.name;


    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Details';
    detailsButton.dataset.id = character.id;


    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(detailsButton);


    characterData[character.id] = character;
}

function showDetails(e) {
    const clickedItem = e.target;

    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    const characterId = clickedItem.dataset.id;
    const character = characterData[characterId];

    // Clear existing content
    detailContent.textContent = '';

    // Create and append new content elements
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = `${character.name} (${character.id})`;

    const modalImage = document.createElement('img');
    modalImage.src = character.img;
    modalImage.alt = character.name;

    // Add more details as needed
    const modalDescription = document.createElement('p');
    modalDescription.textContent = character.description;

    // Append new elements to the modal content
    detailContent.appendChild(modalTitle);
    detailContent.appendChild(modalImage);
    detailContent.appendChild(modalDescription);

    // Display the modal
    detailModal.style.display = 'block';
}


function detailModalClickHandler(e) {
    if (e.target.nodeName === 'DIALOG' || e.target.classList.contains('modal-close')) {
        detailModal.close();
    }
}

function detailModalCloseHandler (e) {
    charactersGallery.classList.remove('dialog-open');

}
