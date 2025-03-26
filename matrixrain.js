// Initialising the canvas
let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
let letters =
    'あいうえおかきくけこさしすせそはひふへほまみむめもやゆよなにぬねのわをアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロ';
letters = letters.split('');

// Setting up the columns
let fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
let drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Setting up the draw function
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let k = 0; k < drops.length; k++) {
        let text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, k * fontSize, drops[k] * fontSize);
        drops[k]++;
        if (drops[k] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[k] = 0;
        }
    }
}

// Loop the animation
setInterval(draw, 33);
