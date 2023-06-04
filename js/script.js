console.log('JS OK');

/*************  OPERAZIONI INIZIALI ***************/

// RECUPERO GLI ELEMENTI PREV E NEXT DAL DOM

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
console.log(prevButton, nextButton);

// RECUPERO L'ELEMENTO GALLERY DAL DOM

const galleryElements = document.querySelector('.gallery');
console.log(galleryElements);

// PREPARIAMO LE IMMAGINI

const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// PREPARO HTML PER LE IMMAGINI

let imageElements = '';

// PER OGNI URL DELL'IMMAGINE CREO UN TAG <IMG>

for(let i = 0; i < sources.length; i++){
    imageElements += `<img src= "${sources[i]}">`;
}

// INSERISCO LE IMMAGINI NEL DOM

galleryElements.innerHTML = imageElements;

// RECUPERO TUTTE LE IMMAGINI

const images = document.querySelectorAll('#carousel img');

// PREPARO LA GESTIONE DELL'INDEX

let currentIndex = 0;

// DO LA CLASSE ACTIVE ALLA PRIMA IMMAGINE

images[currentIndex].classList.add('active');


/*********** LOGICA EFFETTIVA ************/

// !METTO IN ASCOLTO IL PULSANTE NEXT

nextButton.addEventListener('click', function(){
    // RIMUOVO LA CLASSE ACTIVE DALL'IMMAGINE
    images[currentIndex].classList.remove('active');

    // INCREMENTO IL CURRENT INDEX
    currentIndex++;

    // SE SONO ALL'ULTIMA FOTO TORNO ALLA PRIMA
    if (currentIndex === images.length){
        currentIndex = 0;
    }

    // AGGIUNGO LA CLASSE ACTIVE ALLA PROSSIMA IMMAGINE
    images[currentIndex].classList.add('active');
});

// !METTO IN ASCOLTO IL PULSANTE PREV

prevButton.addEventListener('click', function(){
    // RIMUOVO LA CLASSE ACTIVE DALL'IMMAGINE
    images[currentIndex].classList.remove('active');

    // INCREMENTO IL CURRENT INDEX
    currentIndex--;

    // SE SONO ALL'ULTIMA FOTO TORNO ALLA PRIMA
    if (currentIndex < 0){
        currentIndex = images.length - 1;
    }

    // AGGIUNGO LA CLASSE ACTIVE ALLA PROSSIMA IMMAGINE
    images[currentIndex].classList.add('active');
});

