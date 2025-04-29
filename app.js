let xp = 0;
let coins = 0;

function earnXP() {
    xp += 10;
    coins += 5;
    document.getElementById('xp').textContent = xp;
    document.getElementById('coins').textContent = coins;
}

