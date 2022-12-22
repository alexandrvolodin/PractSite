const captcha = document.querySelector(".captcha"),
    reloadBtn = document.querySelector(".reload-btn"),
    inputField = document.querySelector(".input-area input"),
    checkBtn = document.querySelector(".check-btn"),
    statusTxt = document.querySelector(".status-text");

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let check = 0;
var kars;
function getCaptcha() {
    if (check === 2) {
        for (let i = 0; i < 1; i++) {
            let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
            captcha.innerText += ` ${randomCharacter} + ${(randomCharacter*12) / 3}`;
            kars = randomCharacter + (randomCharacter * 12) / 3;
            console.log(kars);
        }
    } else {
        for (let i = 0; i < 6; i++) {
            let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
            captcha.innerText += ` ${randomCharacter}`; 
        }
    }
}
getCaptcha(); 
reloadBtn.addEventListener("click", () => {removeContent();getCaptcha();});
checkBtn.addEventListener("click", e => {
    e.preventDefault(); 
    statusTxt.style.display = "block";
    let inputVal;
    if (check == 2) {
        inputVal = inputField.value;
        console.log(inputVal);
    }
    if (check == 0) {
        inputVal = inputField.value.split('').join(' ');
        console.log(check);
    }
    console.log(inputVal);
    if (check == 2) {
        if (inputVal == kars) {
            statusTxt.style.color = "#4cd619";
            statusTxt.innerText = "Вы не робот!";
        } else {
            statusTxt.innerText = "Попробуйте снова";
        }
    } else
    if (inputVal == captcha.innerText) {
        statusTxt.style.color = "#4db2ec";
        statusTxt.innerText = "ОТлично! Вы не робот.";
    } else {
        check = 2;
        allCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        statusTxt.style.color = "#ff0000";
        statusTxt.innerText = "Попробуем что-то другое";
    }
});
function removeContent() {
    inputField.value = "";
    captcha.innerText = "";
    statusTxt.style.display = "none";
}
