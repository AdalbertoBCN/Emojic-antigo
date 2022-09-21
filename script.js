var SA = ['😇', '😈', '😍', '😎', '😤', '😴', '😵', '🤑', '🤠', '🧐', '🎅', '🐲', '👮', '🕵', '🤴', '🧙', '🐔', '🐧', '🦒', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🦄', '🐨', '🐯', '🦁', '🐮', '🧀', '🍎', '🍐', '🍊', '🍋', '🍌', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🥕', '🏹', '🥊', '⚽️', '🏀', '🏈', '⚾️', '🛹', '🎾', '🎨', '🎬', '🎤', '🎧', '🎮', '🪀', '🏓', '🏸'].sort(() => Math.random() - 0.5);
var x = 3;
var buttons = document.querySelectorAll('#groups section');
function divide(SA) {
    var i = SA.length - 1;
    var mod3 = [[], [], [], []];
    while (i >= 0) {
        mod3[0].push(SA[i]);
        i--;
        mod3[1].push(SA[i]);
        i--;
        mod3[2].push(SA[i]);
        i--;
        mod3[3].push(SA[i]);
        i--;
    }
    return mod3;
}
function joinA(S0, S1, S2, S3) {
    return S1.concat(S3, S0, S2);
}
function joinB(S0, S1, S2, S3) {
    return S0.concat(S2, S1, S3);
}
function joinC(S0, S1, S2, S3) {
    return S0.concat(S1, S2, S3);
}
function joinD(S0, S1, S2, S3) {
    return S0.concat(S1, S3, S2);
}

document.querySelector('img#logo').addEventListener("click", function () {
    document.location.reload();
});

function show(x) {
    document.querySelector('#A h3').innerHTML = mod3[0].join('');
    document.querySelector('#B h3').innerHTML = mod3[1].join('');
    document.querySelector('#C h3').innerHTML = mod3[2].join('');
    document.querySelector('#D h3').innerHTML = mod3[3].join('');
    document.querySelector('form').innerHTML = x;
    if (x == 0) {
        win();
        startConfetti();
        document.querySelector('#confetti-canvas').style.position = 'absolute';
    }
}
function win() {
    document.querySelector('#groups').remove();
    document.querySelector('#title').remove();
    document.querySelector('form').remove();
    document.querySelector('#about').remove();
    var h2 = document.createElement("h2");
    h2.innerText = 'Aí está o emoji escolhido';
    h2.setAttribute('id', 'win_text');
    document.body.appendChild(h2);
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    var h1 = document.createElement("h1");
    h1.innerText = SA[38];
    h1.setAttribute('id', 'win');
    document.body.appendChild(h1);
    var p = document.createElement("p");
    p.innerText = 'Obrigado por jogar. Recarregue a página ou clique em EMOJIC para recomeçar';
    p.setAttribute('id', 'return');
    document.body.appendChild(p);
    if (screen.width > 650 && screen.height > 750)
        document.querySelector('#podio').style.display = 'flex';
}

if (screen.width > 1280) {
    document.querySelector('#A').addEventListener('mouseover', function () {
        document.querySelector('#A').style.border = 'solid red 5px';
        document.querySelector('#A').style.cursor = 'pointer';
    })
    document.querySelector('#A').addEventListener('mouseout', function () {
        document.querySelector('#A').style.border = 'solid black 5px';
        document.querySelector('#A').style.cursor = 'default';
    })

    document.querySelector('#B').addEventListener('mouseover', function () {
        document.querySelector('#B').style.border = 'solid red 5px';
        document.querySelector('#B').style.cursor = 'pointer';
    })
    document.querySelector('#B').addEventListener('mouseout', function () {
        document.querySelector('#B').style.border = 'solid black 5px';
        document.querySelector('#B').style.cursor = 'default';
    })

    document.querySelector('#C').addEventListener('mouseover', function () {
        document.querySelector('#C').style.border = 'solid red 5px';
        document.querySelector('#C').style.cursor = 'pointer';
    })
    document.querySelector('#C').addEventListener('mouseout', function () {
        document.querySelector('#C').style.border = 'solid black 5px';
        document.querySelector('#C').style.cursor = 'default';
    })

    document.querySelector('#D').addEventListener('mouseover', function () {
        document.querySelector('#D').style.border = 'solid red 5px';
        document.querySelector('#D').style.cursor = 'pointer';
    })
    document.querySelector('#D').addEventListener('mouseout', function () {
        document.querySelector('#D').style.border = 'solid black 5px';
        document.querySelector('#D').style.cursor = 'default';
    })
}

buttons[0].addEventListener("click", function () {
    SA = joinA(mod3[0], mod3[1], mod3[2], mod3[3]);
    mod3 = divide(SA);
    x--;
    show(x);
});
buttons[1].addEventListener("click", function () {
    SA = joinB(mod3[0], mod3[1], mod3[2], mod3[3]);
    mod3 = divide(SA);
    x--;
    show(x);
});
buttons[2].addEventListener("click", function () {
    SA = joinC(mod3[0], mod3[1], mod3[2], mod3[3]);
    mod3 = divide(SA);
    x--;
    show(x);
});
buttons[3].addEventListener("click", function () {
    SA = joinD(mod3[0], mod3[1], mod3[2], mod3[3]);
    mod3 = divide(SA);
    x--;
    show(x);
});
mod3 = divide(SA);
show(x);