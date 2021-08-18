function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got three digit and calling again', pin);
        return getPin();
    }
}
// display pin 
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// keypad clicked 
document.getElementById('calc-body').addEventListener('click', function (event) {
    const targetKey = event.target.innerText;
    const pressedKey = document.getElementById('typed-numbers');
    if (isNaN(targetKey)) {
        if (targetKey == 'C') {
            pressedKey.value = '';
        }
    }
    else {
        const previousKey = pressedKey.value;
        const newPressedKey = previousKey + targetKey;
        pressedKey.value = newPressedKey;
    }

})

// mathc pin when reduce duplicate
function verifyPin() {
    const displayPin = document.getElementById('display-pin').value;
    const pressedPin = document.getElementById('typed-numbers').value;
    const rightPin = document.getElementById('right-pin');
    const wrongPin = document.getElementById('wrong-pin');
    if (displayPin == pressedPin) {
        rightPin.style.display = 'block';
        wrongPin.style.display = 'none';
    }
    else {
        wrongPin.style.display = 'block';
        rightPin.style.display = 'none';
    }
}