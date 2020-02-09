const body = document.querySelector("body");
const bg = document.querySelector("#bg");

const IMG_NUMBER = 8;
let randomNumber;
let randomBefore = 0;
let imageBefore = null;

function handleImgLoad() {
    console.log("finished load");
}

function paintImage() {
    console.log('test');
    genRandom();


    const image = new Image();
    image.src = `Images/${randomNumber}.jpg`;
    image.className = "bgImage";
    body.appendChild(image);

    if (imageBefore === null) {
        imageBefore = image;
    } else {
        body.removeChild(imageBefore);
        imageBefore = image;
    }



    // bg.style.backgroundImage =`url('Images/${randomNumber}.jpg')`;
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER + 1);

    console.log(`randomNumber : ${number}`);

    if (randomBefore !== 0) {
        randomCheck(randomBefore, number);
    } else {
        randomNumber = number;
    }

    randomBefore = number;
}

function randomCheck(oldVar, newVar) {

    let notSame = false;

    while (notSame === false) {
        if (oldVar === newVar) {
            newVar = Math.floor(Math.random() * IMG_NUMBER + 1);
        } else {
            notSame = true;
            randomNumber = newVar;
        }
    }
}

function init() {
    // randomNumber = genRandom();
    paintImage();

    setInterval(paintImage, 10000);
}


init();