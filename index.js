let noOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < noOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",  () => {

        let buttonKey = document.querySelectorAll(".drum")[i].innerHTML;
        playDrum(buttonKey);
        animateButton(buttonKey);
    });
}

document.addEventListener("keypress", (evt) => {
    playDrum(evt.key);
    animateButton(evt.key);
});


function playDrum(key) {
    switch (key) {

        case "w":
            let tom1Sound = new Audio("sounds/tom-1.mp3");
            tom1Sound.play();
            break;

        case "a":
            let tom2Sound = new Audio("sounds/tom-2.mp3");
            tom2Sound.play();
            break;

        case "s":
            let tom3Sound = new Audio("sounds/tom-3.mp3");
            tom3Sound.play();
            break;

        case "d":
            let tom4Sound = new Audio("sounds/tom-4.mp3");
            tom4Sound.play();
            break;

        case "j":
            let crashSound = new Audio("sounds/crash.mp3");
            crashSound.play();
            break;

        case "k":
            let kickBassSound = new Audio("sounds/kick-bass.mp3");
            kickBassSound.play();
            break;

        case "l":
            let snareSound = new Audio("sounds/snare.mp3");
            snareSound.play();
            break;

        default:
            break;
    }
}


function  animateButton (key) {

    let animateBtn = document.querySelector("." + key);

    animateBtn.classList.add("pressed");

    setTimeout( () => {
        animateBtn.classList.remove("pressed");
        },100);
}
