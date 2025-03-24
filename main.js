// Hint reveal
let hintEle = document.getElementById('hint');
setTimeout(() => {
    hintEle.style.opacity = '1';
}, 10000)

// Drag elements
let dragEles = document.getElementsByClassName('drag');
for (let i = 0; i < dragEles.length; i++) {
    dragEles[i].style.left = 100 + Math.floor(Math.random() * 1600) + "px";
    dragEles[i].style.top = window.innerHeight / 2 + Math.floor(Math.random() * 400) + "px";
}

const drag_started = (ev) => {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
};

const drag_over = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

const drop_over = (ev) => {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.innerHTML = document.getElementById(data).innerHTML;
}

const reset_values = () => {
    let cards = document.getElementsByClassName('cards')[0].querySelectorAll('div');
    cards.forEach((val) => val.innerHTML = '')
}

const show_terminal = () => {
    let part1 = document.getElementById('section-1');
    let part0 = document.getElementById('section-0');

    part1.style.display = 'block';
    part0.style.display = 'none';

    let curr_time = new Date();
    let text = [
        `[${curr_time.setSeconds(curr_time.getSeconds() + 1), curr_time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}] Starting bomb diffusal`,
        `[${curr_time.setSeconds(curr_time.getSeconds() + 1), curr_time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}] Getting access codes`,
        `[${curr_time.setSeconds(curr_time.getSeconds() + 1), curr_time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}] Access codes not found`,
        `[${curr_time.setSeconds(curr_time.getSeconds() + 1), curr_time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}] Redirecting to code entry panel`,
    ];
    let textField = document.getElementsByClassName('prompt')[0];

    let i = 0, j = 0;
    let ginterval = setInterval(() => {
        textField.innerHTML += '<br>'

        let linterval = setInterval(() => {
            textField.innerHTML += text[i][j++];
            if (j == text[i].length) j = 0, i++, clearInterval(linterval);
        }, 20);

        if (i >= 4) clearInterval(ginterval), clearInterval(linterval);
    }, 1000);

    setTimeout(() => {
        let part2 = document.getElementById('section-2');
        let part1 = document.getElementById('section-1');

        part1.style.display = 'none';
        setTimeout(() => part2.style.display = 'flex', 1000);
    }, 6000);
}
