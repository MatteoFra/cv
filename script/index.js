/* 


        TOGGLE THEME BUTTON


*/


document.querySelector(".rainbow-theme").addEventListener('click', toggleTheme);

let theme = localStorage.getItem('theme');
if (theme) {
    if (theme == "dark") {
        darkTheme();
    }
}

function toggleTheme() {
    if (document.querySelector(".rainbow-theme i").classList.contains('fa-sun')) {
        localStorage.setItem('theme', 'dark');
        document.querySelector(".rainbow-theme").classList.add('disabled');
        document.querySelector(".rainbow-theme").classList.remove('active');
        darkTheme();
    } else {
        localStorage.setItem('theme', 'light');
        document.querySelector(".rainbow-theme").classList.add('disabled');
        document.querySelector(".rainbow-theme").classList.remove('active');
        initTheme();
    }
}

function darkTheme() {

    document.body.classList.remove("light");
    document.body.classList.add("dark");

    setTimeout(function () {
        document.querySelector(".rainbow-theme i").classList.remove('fa-sun');
        document.querySelector(".rainbow-theme i").classList.remove('fas');
        document.querySelector(".rainbow-theme i").classList.add('far');
        document.querySelector(".rainbow-theme i").classList.add('fa-moon');

        document.querySelector(".loader-line-wrap:nth-child(1) .loader-line").style.borderColor = "#2F2F2F";
        document.querySelector(".loader-line-wrap:nth-child(2) .loader-line").style.borderColor = "#565656";
        document.querySelector(".loader-line-wrap:nth-child(3) .loader-line").style.borderColor = "#868686";
        document.querySelector(".loader-line-wrap:nth-child(4) .loader-line").style.borderColor = "#B2B2B2";
        document.querySelector(".loader-line-wrap:nth-child(5) .loader-line").style.borderColor = "#DEDEDE";


        document.querySelector(".rainbow-theme").classList.remove('disabled');
        document.querySelector(".rainbow-theme").classList.add('active');
    }, 1000);

}

function initTheme() {


    document.body.classList.remove("dark");
    document.body.classList.add("light");

    setTimeout(function () {
        document.querySelector(".rainbow-theme i").classList.remove('far');
        document.querySelector(".rainbow-theme i").classList.remove('fa-moon');
        document.querySelector(".rainbow-theme i").classList.add('fa-sun');
        document.querySelector(".rainbow-theme i").classList.add('fas');

        document.querySelector(".loader-line-wrap:nth-child(1) .loader-line").style.borderColor = "";
        document.querySelector(".loader-line-wrap:nth-child(2) .loader-line").style.borderColor = "";
        document.querySelector(".loader-line-wrap:nth-child(3) .loader-line").style.borderColor = "";
        document.querySelector(".loader-line-wrap:nth-child(4) .loader-line").style.borderColor = "";
        document.querySelector(".loader-line-wrap:nth-child(5) .loader-line").style.borderColor = "";

        document.querySelector(".rainbow-theme").classList.remove('disabled');
        document.querySelector(".rainbow-theme").classList.add('active');

    }, 1000);
}


/*


        TEXT START PAGE
        
        &#x1F440;  👀	
        
*/

const text = "Bonjour et bienvenue sur mon CV en ligne";

let index = 0;

function writeText() {
    document.querySelector("#hello-world p").innerText = text.slice(0, index);

    index++;
}

/* 


        CHANGE PAGE

*/




document.getElementById("next-page").addEventListener('click', nextPage);

function nextPage() {
    document.querySelector(".back-face").style.transform = "rotateY(0deg)";
    document.querySelector(".front-face").style.transform = "rotateY(-180deg)";
}

document.getElementById("back-page").addEventListener('click', backPage);

function backPage() {
    document.querySelector(".back-face").style.transform = "rotateY(180deg)";
    document.querySelector(".front-face").style.transform = "rotateY(0deg)";
}


/*

        TERMINAL
        
*/
class terminalWriting {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({
                from,
                to,
                start,
                end
            });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let {
                from,
                to,
                start,
                end,
                char
            } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

const phrases = [
  'Développeur Fullstack,',
  'Autodidacte depuis 2 ans',
  'À la recherche d\'emploi / missions',
  'Connaissance de la méthodologie Scrum',
  'Maîtrise d\'outils de gestion de projet',
  '// Toujours en quête d\'apprentissage !',
  ''];


const lines = document.querySelectorAll('.lines');

const l1 = new terminalWriting(lines[0]);
const l2 = new terminalWriting(lines[1]);
const l3 = new terminalWriting(lines[2]);
const l4 = new terminalWriting(lines[3]);
const l5 = new terminalWriting(lines[4]);
const l6 = new terminalWriting(lines[5]);

/*


        CURVED TEXT
        
        
*/

function updateCurvedText(curvedText, radius) {
    curvedText.style.minWidth = "initial";
    curvedText.style.minHeight = "initial";
    var w = 250;
    var h = 95;
    curvedText.style.minWidth = w + "px";
    curvedText.style.minHeight = h + "px";
    var text = curvedText.textContent;
    var html = "";

    for (let letter of text) {
        html += `<span>${letter}</span>`;
    }

    curvedText.innerHTML = html;

    var letters = curvedText.querySelectorAll("span");

    for (let i = 0; i < letters.length; i++) {
        letters[i].style.position = "absolute";
        letters[i].style.height = radius + "px";
        letters[i].style.transformOrigin = "bottom center";
    }

    var circleLength = 2 * Math.PI * radius;
    var angleRad = w / (2 * radius);
    var angle = 2 * angleRad * 180 / Math.PI / text.length;

    for (let i = 0; i < letters.length; i++) {
        letters[i].style.transform = `translate(${w/2}px,0px) rotate(${i * angle - text.length*angle/2}deg)`;
    }
}

var curvedText = document.getElementById("curved-text");
updateCurvedText(curvedText, 100);

/*


        BUTTON PRINT
        
        
*/

document.querySelector("#print").addEventListener('click', function () {
    let a = document.createElement('a')
    a.href = "print/Matteo-FRA.pdf";
    a.download = "Matteo-FRA.pdf";
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
});


/*


        BUTTON CONTACT
        
        
*/

document.querySelector("#contact").addEventListener('click', toggleContactBox);

document.querySelector("#contact-box .fa-times").addEventListener('click', toggleContactBox);

function toggleContactBox() {
    if (!document.getElementById('contact-box').classList.contains('show')) {
        document.getElementById('contact-box').classList.add('show');
        document.querySelector('.front-face').style.pointerEvents = 'none';
        document.querySelector('.front-face').style.filter = 'blur(10px)';
    } else {
        document.getElementById('contact-box').classList.remove('show');
        document.querySelector('.front-face').style.pointerEvents = '';
        document.querySelector('.front-face').style.filter = '';
    }
}

/*


        LOADING PAGE
        
        
*/

window.addEventListener('load', function () {

    setTimeout(function () {
        var refreshInterval = setInterval(writeText, 70);
    }, 1200);
    setTimeout(function () {
        document.querySelector("#hello p").classList.add('opacity');
    }, 7000);
    setTimeout(function () {
        document.querySelector("#hello-world").classList.add('disabled');
    }, 8000);
    setTimeout(function () {
        document.querySelector("main").classList.add('active');
    }, 8200);
    setTimeout(function () {
        l1.setText(phrases[0]);
    }, 9000);
    setTimeout(function () {
        l2.setText(phrases[1]);
    }, 9500);
    setTimeout(function () {
        l3.setText(phrases[2]);
    }, 10000);
    setTimeout(function () {
        l4.setText(phrases[3]);
    }, 10500);
    setTimeout(function () {
        l5.setText(phrases[4]);
    }, 11000);
    setTimeout(function () {
        l6.setText(phrases[5]);
    }, 11500);
    setTimeout(function () {
        document.querySelector("#grid").classList.add('active');
    }, 10000);

});
