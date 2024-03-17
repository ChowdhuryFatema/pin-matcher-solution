function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;

}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number =  event.target.innerText;
    const calculatorField = document.getElementById('typed-number');
    const prevousTypedNumber = calculatorField.value;
    if( isNaN(number) ){
        if(number === 'C'){
            calculatorField.value = '';
        }
        else if( number === '<' ){
            const digits = prevousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            calculatorField.value = remainingDigits;

        }
    }
    else{
        const newTypedNumber = prevousTypedNumber + number;
        calculatorField.value = newTypedNumber;
    }

})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value; 

    const calculatorField = document.getElementById('typed-number');
    const typedNumber = calculatorField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailurMessage = document.getElementById('pin-failur');
    if(currentPin === typedNumber){
        pinSuccessMessage.style.display = 'block';
        pinFailurMessage.style.display = 'none';
    } else{
        pinFailurMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})