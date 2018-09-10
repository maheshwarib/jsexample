// alert('File is attached');

// const myPElements = document.querySelector('p');
// myPElements.textContent = 'I am being changed using Js';
const myPElements = document.querySelectorAll('p');
myPElements.forEach(function (p) {
    p.textContent ='I am changed using loop in Js';
    
});
myPElements.forEach( (p) =>p.textContent ='I am changed using arrow loop in Js');