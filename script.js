const initApp = () => {

    // cache the DOM
    const currentValueElement = document.querySelector('.currentValue');
    const previousValueElement = document.querySelector('.previousValue');
    const inputButtons = document.querySelectorAll('.number');
    const clearButtons = document.querySelectorAll('.clear', '.clearEntry');
    const deleteButton = document.querySelector('.delete');
    const signChangeButton = document.querySelector('.signchange');
    const operatorButtons = document.querySelectorAll('.operator');

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
    
    // C button (Clear button)
    clearButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            currentValueElement.value = 0;
            if (event.target.classList.contains('clear')) {
                previousValueElement.textContent = '';
                itemArray = [];
            }
        });
    });

    // Delete Button
    deleteButton.addEventListener('click', () => {
        currentValueElement.value = currentValueElement.value.slice(0, -1);
    })

    // +/- Button
    signChangeButton.addEventListener('click', () => {
        currentValueElement.value = parseFloat(currentValueElement.value) * -1;
    })

    operatorButtons.forEach(button => {
        button.addEventListener('click', (event) => {
           
            // equal sign showing
            if (newNumberFlag) {
                previousValueElement.textContent = '';
                itemArray = [];
            }

            const newOperator = event.target.textContent;
            const currentVal = currentValueElement.value;

            // Checks for present number
            if (!itemArray.length && currentVal == 0) return;

            // begin new equation
            if (itemArray.length) {
                itemArray.push(currentVal, newOperator);
                previousValueElement.textContent = `${currentVal}${newOperator}`;
                return newNumberFlag = true;
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', initApp);