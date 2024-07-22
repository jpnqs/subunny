

const supporter = document.getElementById('supporter');
const supporterTexture = document.getElementById('supporter-texture');

supporter.addEventListener('click', () => {
    vibrate();
    console.log('Thanks for supporting us!');
});


supporter.addEventListener('touchstart', () => {
    supporterTexture.src='src/bunny_closed_eyes.png';
});

supporter.addEventListener('touchend', () => {
    setTimeout(() => {
        supporterTexture.src='src/bunny_open_eyes.png';
    }, 1000);
});

let vibratecounter = 1;

function vibrate() {
    if (navigator.vibrate) {
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