const calculator = document.querySelector('.calculator'); 
const buttons = calculator.querySelector('.calculator__buttons'); 

const firstOperend = document.querySelector('.calculator__operend--left'); 
const operator = document.querySelector('.calculator__operator'); 
const secondOperend = document.querySelector('.calculator__operend--right'); 
const calculatedResult = document.querySelector('.calculator__result'); 

function calculate(n1, operator, n2) {
    let result = 0;
    if (operator === '+') {
        result = Number(n1) + Number(n2);
    }
    else if (operator === '-') {
        result = Number(n1) - Number(n2);
    }
    else if (operator === '*') {
        result = Number(n1) * Number(n2);
    }
    else if (operator === '/') {
        result = Number(n1) / Number(n2);
    }
    return String(result);
}

buttons.addEventListener('click', function (event) {
    const target = event.target; 
    const action = target.classList[0]; 
    const buttonContent = target.textContent; 

    if (target.matches('button')) {
        if (action === 'number') {
            console.log('숫자 ' + buttonContent + ' 버튼');
            if (firstOperend.textContent === '0') {
                firstOperend.textContent = buttonContent;
            }
            else {
                secondOperend.textContent = buttonContent;
            }
        }

        if (action === 'operator') {
            console.log('연산자 ' + buttonContent + ' 버튼');
        }

        if (action === 'decimal') {
            console.log('소수점 버튼');
        }

        if (action === 'clear') {
            console.log('초기화 버튼');
            firstOperend.textContent = '0';
            secondOperend.textContent = '0';
            calculatedResult.textContent = '0';
        }

        if (action === 'calculate') {
            console.log('계산 버튼');
            calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
        }
    }
});


const display = document.querySelector('.calculator__display--2'); 
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {

    const target = event.target; 
    const action = target.classList[0]; 
    const buttonContent = target.textContent; 

    if (target.matches('button')) {
        if (action === 'number') { 
            if (previousKey === 'operator') { 
                display.textContent = buttonContent;
                previousKey = 'number';
            }
            else {
                if (display.textContent === '0') {
                    display.textContent = buttonContent;
                    previousKey = 'number';
                }
                else { 
                    display.textContent += buttonContent;
                    previousKey = 'number';
                }
            }
            
        }
        if (action === 'operator') { 
            if (previousKey === 'operator') { // 연산자 버튼을 연속적으로 누르면 새로운 연산자로 갱신
                operatorForAdvanced = buttonContent;
                previousKey = 'operator';
            }
            else {
                if ( previousKey === 'number' && firstNum !== undefined) { // =을 누르지 않고 계속 연산하는 경우
                    display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
                    firstNum = display.textContent;
                    operatorForAdvanced = buttonContent;
                    previousKey = 'operator';
                } 
                else {
                    firstNum = display.textContent;
                    operatorForAdvanced = buttonContent;
                    previousKey = 'operator';
                }
            }
        }
        if (action === 'decimal') {  
            if (previousKey === 'number' && !display.textContent.includes('.')) { //소수점은 단 한번만 입력됨
                display.textContent += '.';
                previousKey = 'decimal';
            }
            else if (previousKey === 'operator') { // 바로 .을 누르면 알아서 0.xx로 계산
                display.textContent = '0.';
                previousKey = 'decimal';
            }
            else if (previousKey === undefined || previousKey === 'clear') {
                display.textContent += '.';
                previousKey = 'decimal';
            }
        }
        if (action === 'clear') { 
            firstNum = undefined;
            operatorForAdvanced = undefined;
            display.textContent = '0';
            previousKey = 'clear';
        }
        if (action === 'calculate') { 
            console.log(firstNum);
            if (firstNum !== undefined) { //연산자 버튼을 누르기 전 숫자 버튼을 누르고 enter를 여러번 눌러도 작동
                if (previousKey === 'calculate') {
                    console.log('1', display.textContent, previousNum);
                    display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum);
                    previousKey = 'calculate';
                }
                else {
                    console.log('2', firstNum, display.textContent);
                    previousNum = display.textContent; 
                    display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
                    previousKey = 'calculate';
                }
            }
        }
    }

});
