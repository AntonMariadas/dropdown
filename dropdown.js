// Etape 1: Récupérer l'élément à cliquer
const boutonDropdown = document.querySelector('.dropdown');
console.log(boutonDropdown);

// Etape 2: Créer la fonction d'action (pour le clic)
// const ouvrirFermerDropdown = () => {
//     const liens = document.querySelector('.dropdown-links');

//     // (liens.style.display === 'block') equivaut à (liens.style.display == 'block' && typeof liens.style.display == typeof 'block')
//     if (liens.style.display === 'block') {
//         liens.style.display = 'none';
//     } else {
//         liens.style.display = 'block';
//     }
// }

// const ouvrirFermerDropdown = () => {
//     const liens = document.querySelector('.dropdown-links');
//     if(liens.classList.contains('dropdown-links-opened')) {
//         liens.classList.remove('dropdown-links-opened');
//     } else {
//         liens.classList.add('dropdown-links-opened');
//     }
// }

const ouvrirFermerDropdown = () => {
    const liens = document.querySelector('.dropdown-links');
    liens.classList.toggle('dropdown-links-opened');
}

// Etape 3: Ajouter eventListener
// ELEMENT_ICI.addEventListener('nomEvenement', fonctionDAction)
// Liste des events https://www.w3schools.com/jsref/dom_obj_event.asp
boutonDropdown.addEventListener('click', ouvrirFermerDropdown);
// boutonDropdown.addEventListener('mouseover', ouvrirFermerDropdown);
