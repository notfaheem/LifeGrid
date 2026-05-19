const btn = document.getElementById('btn');
const text = document.getElementById('text');
function getdob() {
    const dobValue = document.getElementById('dob').value;
    const dob = new Date(dobValue);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();

    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    const ySec = document.getElementById("y-sec");
    if (dobValue === "") {
        popup("Hold On 👀", "Every Story Starts With a Date ✨, right ? So please enter your Date of Birth...", "Got it")
    } else {
        ySec.style.display = "block";
        yearCircles(age);
    }
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
};



async function monthCircles() {
    const mSec = document.getElementById("m-sec");
    mSec.style.display = "block";
    const today = new Date();
    const dobValue = document.getElementById('dob').value;
    const dobNew = new Date(dobValue);
    let months =
        (today.getFullYear() - dobNew.getFullYear()) * 12 +
        (today.getMonth() - dobNew.getMonth());
    if (today.getDate() < dobNew.getDate()) {
        months--;
    }
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
};



async function days() {
    const dSec = document.getElementById("d-sec");
    dSec.style.display = "block";
    const noteFour = document.getElementById("noteFour");
    const noteOne = document.getElementById("noteThree");
    noteOne.style.opacity = 0;
    noteFour.style.opacity = 0;
    const today = new Date();
    const dobValue = document.getElementById('dob').value;
    const dobNew = new Date(dobValue);
    const difference = today.getTime() - dobNew.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    console.log(days);
    const textD = document.getElementById("text-d");
    for (let i = 1; i <= days; i++) {
        if (i < 2) {
            textD.innerHTML = i + " Day";
        } else {
            textD.innerHTML = i + " Days";
        }
        let tempCounter = days - 300;
        if (i < 100) {
            i++;
        }
        else if (i < tempCounter) {
            i += 100;
        }
        if (days < 10000) {
            await delay(20);
        } else {
            await delay(10);
        }
    };


    confetti({
        particleCount: 100,
        angle: 60,
        spread: 70,
        origin: { x: 0 }
    });

    confetti({
        particleCount: 100,
        angle: 120,
        spread: 70,
        origin: { x: 1 }
    });


    if (days <= 30) {
        noteOne.innerText = `${days} days into this world… and already making an impact ✨`;
    }
    else if (days <= 365) {
        noteOne.innerText = `${days} days of tiny moments, smiles, and memories 🌱`;
    }
    else if (days <= 5000) {
        noteOne.innerText = `${days} days of adventures, learning, and growth 🚀`;
    }
    else if (days <= 10000) {
        noteOne.innerText = `${days} days lived… that’s a lot of memories and late-night thoughts 🌌`;
    }
    else if (days <= 20000) {
        noteOne.innerText = `${days} days on Earth — every single one adding to your story 📖`;
    }
    else {
        noteOne.innerText = `${days} days lived… truly a legendary timeline 🕰️`;
    }


    const messages = [
        "Which one from this was the happiest day of your life ?",

        "You’ve already lived thousands of moments. Which one was the best ?",

        "Time passes quietly. Until you finally see it.",

        "One of these days made you who you are.",

        "And maybe… your best days are still ahead."
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    noteFour.innerText = messages[randomIndex];

    setTimeout(() => {
        noteOne.style.opacity = 1;
    }, 1000);

    setTimeout(() => {
        noteFour.style.opacity = 1;
    }, 2000)

    setTimeout(() => {
        const btn_in_d = document.getElementById("btn_in_d");
        btn_in_d.style.opacity = 1;
    }, 4000);
};


function popup(title, para, btn) {
    const popup = document.getElementById("popup");
    const popupHead = document.getElementById("popup-head");
    const popupPara = document.getElementById("popup-para");
    const popupBtn = document.getElementById("popup-btn");
    const popupBg = document.getElementById("popup-bg");
    popup.style.transform = "translate(-50%, -50%) scale(1)";
    popupBg.style.display = "block";
    popupHead.innerText = title;
    popupPara.innerText = para;
    popupBtn.innerText = btn;
}
function unpopup() {
    const popup = document.getElementById("popup");
    const popupBg = document.getElementById("popup-bg");
    popup.style.transform = "translate(-50%, -50%) scale(0)";
    popupBg.style.display = "none";
}

window.addEventListener("load", () => {
    const img = new Image();
    img.src = "public/bg2.webp";
})