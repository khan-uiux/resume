const myArray = ["UI UX Designer", "Web Designer", "Graphic Designer", "Visual Designer", "Frontend Developer"];
const lastH1 = document.querySelector('.lastH1');
const firstH1Span = document.querySelector('.firstH1Span')

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

        if (lastH1.textContent === "UI UX Designer") {
            firstH1Span.textContent = "A"
        } else {
            firstH1Span.textContent = "An"
        }

        setTimeout(() => {
            letterIndex = 0;
            currentWord = "";
            wordIndex = (wordIndex + 1) % myArray.length;
            intervalID = setInterval(typeWord, 100);
        }, 1000);
    }
}

intervalID = setInterval(typeWord, 100); 