
window.addEventListener('keydown', (event) => {
    
    const soundElement = document.querySelector(`#sound${event.key.toUpperCase()}`);
    const keyElement = document.querySelector(`#key${event.key.toUpperCase()}`);
    if (keyElement && soundElement) {

        console.log(`${event.key} is pressed`);
        keyElement.classList.toggle("playing");
        soundElement.play();
        soundElement.currentTime = 0;
    }



});


const keys = document.querySelectorAll(".key");
keys.forEach( (key) => {
   
    key.addEventListener('transitionend', (e) => {
        if(e.propertyName !== "transform"){
           return;   
        }
        key.classList.remove('playing');
    })

});