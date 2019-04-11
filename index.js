/**
 * Created by bcuser on 4/4/19.
 */
let diceImg = ["./images/dice-1.jpg", "./images/dice-2.jpg", "./images/dice-3.jpg", "./images/dice-4.jpg", "./images/dice-5.jpg", "./images/dice-6.jpg"];
let balance = 5;
let turn = 0;

const betBtn = document.getElementById("ButtonBet");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const balanceDisplay = document.getElementById("balance");
const turnCount = document.getElementById("turnCount");
const status = document.getElementById("status");
const congrats = "You Win!";
const sorry = "You Lost.";
const done = "You dont have any more money to bet.";


function randNmb() {
    return Math.floor(Math.random() * 6) + 1;
}

function buttonClicked() {
    let numb1 = randNmb();
    let numb2 = randNmb();
    image1.src = diceImg[numb1 - 1];
    image2.src = diceImg[numb2 - 1];
    turnCount.textContent = ++turn;
    winOrLose(numb1, numb2);

}


function winOrLose(numb1, numb2) {
    if (numb1 === numb2) {
        balance++;

        status.style.color = "green";
        status.textContent = congrats;
    } else if (numb1 + numb2 === 7 || numb1 + numb2 === 11) {
        balance++;
        status.style.color = "green";
        status.textContent = congrats;

    } else {
        balance--;
        status.style.color = "red";
        status.textContent = sorry;
    }


    balanceDisplay.textContent = balance;
    if (balance === 0) {
        betBtn.disabled = "true";
        status.style.color = "red";
        status.textContent = done;
    }
}