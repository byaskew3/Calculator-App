const initApp = () => {

    // cache the DOM
    const currentValueElement = document.querySelector('.currentValue');
    const previousValueElement = document.querySelector('.previousValue');
    const inputButtons = document.querySelectorAll('.number');
    const clearButtons = document.querySelectorAll('.clear', '.clearEntry');

    let itemArray = [];
    const equationArray = [];
    let newNumberFlag = false;

    inputButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const newInput = event.target.textContent;
            if (newNumberFlag) {
                currentValueElement.value = newInput;
                newNumberFlag = false;
            } else {
                currentValueElement.value = 
                    currentValueElement.value == 0 
                        ? newInput
                        : `${currentValueElement.value}${newInput}`;
            }
        });
    });
    
}

document.addEventListener('DOMContentLoaded', initApp);