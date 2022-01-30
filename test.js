// 1. (Main theme: Programming Basics)
function numberF() {
    for (let i = 0; i < 101; i++) {
        if (i % 3 == 0 && i % 5 !== 0) {
            console.log(`This is divisible by 3: ${i}`);
        }
        else if (i % 5 == 0 && i % 3 !== 0) {
            console.log(`This is divisible by 5: ${i}`);
        }
        else if (i % 5 == 0 && i % 3 == 0) {
            console.log(`Jackpot: ${i}`);
        }
        else {
            console.log(i);
        }
    }
}
numberF();

//2. (Main theme: DOM manipulation)

const body = document.querySelector('body');
const buttonLabel = 'Click'
let html = '';
let htmlSegment = `
                        <button id="button1">${buttonLabel}</button>`;

html += htmlSegment;

body.innerHTML = html;
const button = document.querySelector('button');
button.addEventListener('click', showImage)

function showImage(){
    var images = [],
index = 0;
images[0] = "<a href = 'https://www.computerhope.com/'><img src='https://www.computerhope.com/banners/banner.gif' alt='Visit Computer Hope'></a>";
images[1] = "<a href = 'https://www.computerhope.com/history'><img src='https://www.computerhope.com/banners/banner2.gif' alt='Computer History'></a>";
images[2] = "<a href = 'https://www.computerhope.com/'><img src='https://www.computerhope.com/banners/banner3.gif' alt='Visit Computer Hope'></a>";
index = Math.floor(Math.random() * images.length);
const imageDive = document.createElement('div');
body.appendChild(imageDive).innerHTML = images[index];
}

// 3. (Main theme: Async API calls)

fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(data => {
    for(let i=0; i<3; i++){
        let div = document.createElement('div');
        body.appendChild(div).innerHTML = data.data[i].first_name
    }
})



