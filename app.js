const hrArm = document.querySelector(".hr_arm");
const minArm = document.querySelector(".min_arm");
const secArm = document.querySelector(".sec_arm");

// This function looks at the time contantly in order to start counting the seconds as soon as a real second changes so that it is accurate within at least 50 milliseconds

function getTime(oldTime = new Date().getTime()) {
    const newTime = new Date().getTime();
    const timeDiff = newTime - oldTime;

    if(timeDiff < 50) {
        countTime(newTime);
        return;
    }

    setTimeout(() => { getTime()}, 0);
}

// Updating the clock
function countTime() {

    const date = new Date();

    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hrPos = 360 / 12 * hours;
    const minPos = 360 / 60 * minutes;
    const secPos = 360 / 60 * seconds;

    hrArm.style.transform = `translate(-50%, -100%) rotate(${ hrPos }deg)`;
    minArm.style.transform = `translate(-50%, -100%) rotate(${ minPos }deg)`;
    secArm.style.transform = `translate(-50%, -100%) rotate(${ secPos }deg)`;

    // Calling this function again in exactly one second
    setTimeout(() => {
        countTime();
    }, 1000);
}

getTime();

// Resizing 
const clock = document.querySelector(".clock");
window.addEventListener("resize", resize);

function resize() {
    clock.style.fontSize = window.innerHeight > window.innerWidth? "1.8vw" : "1vw";
}

resize();