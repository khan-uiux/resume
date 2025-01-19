const myArray = ["Web Designer", "Graphic Designer", "Visual Designer", "Frontend Developer"];
const lastH1 = document.querySelector('.lastH1');

let letterIndex = 0;
let wordIndex = 0;
let currentWord = "";
let intervalID;

function typeWord() {
    if (letterIndex < myArray[wordIndex].length) {
        currentWord += myArray[wordIndex][letterIndex];
        lastH1.textContent = currentWord; 
        letterIndex++; 
    } else {
        clearInterval(intervalID);

        setTimeout(() => {
            letterIndex = 0;
            currentWord = "";
            wordIndex = (wordIndex + 1) % myArray.length;
            intervalID = setInterval(typeWord, 100);
        }, 1000);
    }
}

<<<<<<< HEAD
intervalID = setInterval(typeWord, 100); 
=======
intervalID = setInterval(typeWord, 100); 
>>>>>>> 88a1fa7a37c45b8b62a3c070b8d5390c8f2d6885
