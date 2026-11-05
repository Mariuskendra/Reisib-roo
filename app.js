const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");

const options = ["Juustusaar", "Paradiisisaar", "Hollikas", "Kaleidoskoop", "Hawai", "saaremaa"];
const sectionAngle = 360 / options.length;

let currentRotation = 0;
let winningOption = 0;

spinButton.addEventListener("click", () => {
    spinButton.disabled = true;

    winningOption = Math.floor(Math.random() * options.length);

    const offsetInSlice = (Math.random() - 0.5) * (sectionAngle * 0.8);
    const sliceCenter = winningOption * sectionAngle + sectionAngle / 2;

    const finalAngle = (360 - sliceCenter + offsetInSlice + 360) % 360;

    const currentMod = currentRotation % 360;
    const delta = (finalAngle - currentMod + 360) % 360;
    currentRotation += 5 * 360 + delta;

    wheel.style.transform = `rotate(${currentRotation}deg)`;
});

wheel.addEventListener("transitionend", () => {
    spinButton.disabled = false;
});