

const supporter = document.getElementById('supporter');
const supporterTexture = document.getElementById('supporter-texture');

const messages = [
    "Du Schaffst das!",
    "Ich Glaub ganz fest an dich!",
    "Das wird super!",
    "Du bist die Beste!",
    "Die Quokka Dreams GmbH ist da!"
];

supporterTexture.addEventListener('click', () => {
    vibrate();
    showSpeechBubble();
    console.log('Thanks for supporting us!');
});

supporter.addEventListener('click', () => {
    vibrate();
    showSpeechBubble();
    console.log('Thanks for supporting us!');
});

supporterTexture.addEventListener('touchstart', () => {
    supporterTexture.src='src/bunny_closed_eyes.png';
});


supporter.addEventListener('touchstart', () => {
    supporterTexture.src='src/bunny_closed_eyes.png';
});

supporterTexture.addEventListener('touchend', () => {
    setTimeout(() => {
        supporterTexture.src='src/bunny_open_eyes.png';
        call_confetti();

    }, 500);
});


supporter.addEventListener('touchend', () => {
    setTimeout(() => {
        supporterTexture.src='src/bunny_open_eyes.png';
        call_confetti();

    }, 500);
});

function showSpeechBubble() {
    const speechBubble = document.getElementById('speech-bubble');
    const message = messages[Math.floor(Math.random() * messages.length)];
    speechBubble.innerText = message;
    speechBubble.classList.add('active');
    // speechBubble.style.display = 'block';
    setTimeout(() => {
        speechBubble.classList.remove('active');

    }, 3000);
}


(() => {
    const speechBubble = document.getElementById('speech-bubble');
    // speechBubble.style.display = 'block';
    setTimeout(() => {
        speechBubble.classList.remove('active');

    }, 10_000);
})();


let vibratecounter = 1;

function vibrate() {
    if (!navigator.vibrate) {
        return;
    }
    vibratecounter++;

    // every fith time vibrate for 1 second
    if (vibratecounter % 5 === 0) {
        navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]);
        return;
    }

    navigator.vibrate([200, 200]);

}

function call_confetti() {

    const random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0:
            call_confetti_klee();
            break;
        case 1:
            call_confetti_heart();
            break;
        case 2:
            call_confetti_klee();
            break;
        default:
            call_confetti_heart();
            break;
    }

}

function call_confetti_klee() {
    confetti({
        spread: 100,
        ticks: 50,
        gravity: 2,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 50,
        scalar: 15,
        "fullScreen": {
            "zIndex": 1
          },
        // rain
        shapes: ["image"],
        shapeOptions: {
          image: [{
              src: "src/klee.png",
              width: 100,
              height: 100,
            }
          ],
        },
        "wobble": {
            "distance": 30,
            "enable": false,
            "move": false,
            "speed": {
              "min": -0,
              "max": 0
            }
          },
          "roll": {
            "enable": false
          },
          "tilt": {
            "direction": "random",
            "enable": true,
            "move": true,
            "value": {
              "min": 0,
              "max": 360
            },
            "animation": {
              "enable": true,
              "speed": 0
            }
      
          }
      });
}

function call_confetti_heart() {
    confetti({
        spread: 100,
        ticks: 50,
        gravity: 2,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 50,
        scalar: 25,
        "fullScreen": {
            "zIndex": 1
          },
        // rain
        shapes: ["image"],
        shapeOptions: {
          image: [{
              src: "src/heart.png",
              width: 100,
              height: 100,
            }
          ],
        },
        "wobble": {
            "distance": 30,
            "enable": false,
            "move": false,
            "speed": {
              "min": -0,
              "max": 0
            }
          },
          "roll": {
            "enable": false
          },
          "tilt": {
            "direction": "random",
            "enable": true,
            "move": true,
            "value": {
              "min": 0,
              "max": 360
            },
            "animation": {
              "enable": true,
              "speed": 0
            }
      
          }
      });
}