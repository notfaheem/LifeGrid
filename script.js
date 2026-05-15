const btn = document.getElementById('btn');
const text = document.getElementById('text');
function getdob() {
    const dobValue = document.getElementById('dob').value;
    const dob = new Date(dobValue);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();                      /* Make it const */
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

        if (i < 2) {
            text.textContent = i + " Year";
        } else {
            text.textContent = i + " Years";
        }

        await delay(50);
    };
    const lastCircle = document.querySelector(".year-sec .circle:last-child");
    lastCircle.style.background = "red";
    lastCircle.style.transform = "scale(1.5)";
    lastCircle.style.display = "flex";
    const innerTexts = document.querySelector(".circle:last-child .innertext");
    innerTexts.innerText = age;
    const noteOne = document.getElementById("noteOne");
    if (age <= 5) {
        noteOne.innerText = `Tiny human, huge journey — ${age} years already 🌟`;
    }
    else if (age <= 12) {
        noteOne.innerText = `Whoa… you’ve already unlocked ${age} levels of life 🎮`;
    }
    else if (age <= 17) {
        noteOne.innerText = `${age} years of chaos, growth, and unforgettable memories ⚡`;
    }
    else if (age <= 25) {
        noteOne.innerText = `${age} years in… and your prime story arc is just beginning 🚀`;
    }
    else if (age <= 40) {
        noteOne.innerText = `${age} years of experiences, lessons, and milestones 🛤️`;
    }
    else if (age <= 60) {
        noteOne.innerText = `${age} years lived — a timeline filled with stories and wisdom 📖`;
    }
    else {
        noteOne.innerText = `${age} years on Earth… truly legendary 🕰️`;
    }
    const btn_in_y = document.getElementById("btn_in_y");
    btn_in_y.style.opacity = 1;
}
yearCircles(1);                                                                /* Omit this line */







async function monthCircles() {
    const today = new Date();
    const dobValue = document.getElementById('dob').value;
    const dobNew = new Date(dobValue);
    let months = (today.getFullYear() - dobNew.getFullYear()) * 12 + (today.getMonth() - dobNew.getMonth());
    console.log(months);
    const monthSec = document.getElementById("month-sec");
    const circle = document.getElementById("circle-m");
    circle.style.background = "green";
    const textM = document.getElementById("text-m");
    for (let i = 1; i <= months; i++) {
        const newCircle = circle.cloneNode(true);
        newCircle.style.display = "block";
        monthSec.appendChild(newCircle);

        if (i < 2) {
            textM.innerHTML = i + " Month";
        } else {
            textM.innerHTML = i + " Months";
        }
        if (months < 300) {
            await delay(20);
        } else {
            await delay(10);
        }
    };
    const lastCircle = document.querySelector("#month-sec .circle:last-child");
    lastCircle.style.background = "red";
    lastCircle.style.transform = "scale(1.5)";
    lastCircle.style.display = "flex";
    const innerTexts = document.querySelector("#circle-m:last-child .innertext");
    innerTexts.innerText = months;
    const noteOne = document.getElementById("noteTwo");
    if (months <= 12) {
        noteOne.innerText = `A fresh journey — ${months} months of existence already ✨`;
    }
    else if (months <= 60) {
        noteOne.innerText = `${months} months of smiles, growth, and tiny adventures 🌱`;
    }
    else if (months <= 144) {
        noteOne.innerText = `${months} months of learning, laughing, and becoming stronger 🚀`;
    }
    else if (months <= 216) {
        noteOne.innerText = `${months} months of memories, dreams, and endless potential ⚡`;
    }
    else if (months <= 300) {
        noteOne.innerText = `${months} months on Earth… and your story is just getting interesting 🌍`;
    }
    else {
        noteOne.innerText = `${months} months lived. Thousands of moments, memories, and milestones 🕰️`;
    }
    const btn_in_m = document.getElementById("btn_in_m");
    btn_in_m.style.opacity = 1;
}
monthCircles();                                                                /* Omit this line */