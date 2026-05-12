const btn = document.getElementById('btn');
const text = document.getElementById('text');
function getdob() {
    const dobValue = document.getElementById('dob').value;
    const dob = new Date(dobValue);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    text.textContent = age;
    yearCircles(age);
}
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
async function yearCircles(age) {
    const yearSec = document.getElementById("year-sec");
    const circle = document.getElementById("circle");
    for (let i = 1; i <= age; i++) {
        const newCircle = circle.cloneNode(true);
        newCircle.style.display = "block";
        yearSec.appendChild(newCircle);
        await delay(50);
    };
    const lastCircle = document.querySelector(".year-sec .circle:last-child");
    lastCircle.style.background = "red";
    lastCircle.style.transform = "scale(1.5)";
    lastCircle.style.display = "flex";
    const innerTexts = document.querySelector(".circle:last-child .innertext");
    innerTexts.innerText = age;
    const noteOne = document.getElementById("noteOne");
    if (age<=12) {
        noteOne.innerText = `Whoa… you’ve already unlocked ${age} levels of life.`
    }
    else{
        noteOne.innerText = `Whoa… it's been ${age} years...`
    }
}