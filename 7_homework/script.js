let first_num = "";
let second_num = "";
let operand = "";
let end = false;

const buttons_area = document.querySelector(".calculator__buttons");
const screen_area = document.querySelector(".display__text");

function actionHandler(event) {
    const buttonDetect = event.target.classList.contains("btn");
    const resetDetect = event.target.classList.contains("reset");
    const operandDetect = event.target.classList.contains("operand");
    const signChangeDetect = event.target.classList.contains("sign");
    const digitDetect = event.target.classList.contains("digit");
    const pointDetect = event.target.classList.contains("point");
    const equalDetect = event.target.classList.contains("equal");
    const delDetect = event.target.classList.contains("del");
    const buttonValue = event.target.textContent;

    if (!buttonDetect) {
        return;
    }

    if (resetDetect) {
        first_num = "";
        second_num = "";
        operand = "";
        screen_area.textContent = "0";
        return;
    }

    if (digitDetect) {
        if (second_num === "" && operand === "") {
            if (pointDetect && first_num.includes(".")) {
                first_num += "";
            } else {
                first_num += buttonValue;
                screen_area.textContent = first_num;
            }
        } else if (first_num !== "" && second_num !== "" && end) {
            if (pointDetect && second_num.includes(".")) {
                second_num += "";
            } else {
                second_num = buttonValue;
                screen_area.textContent = second_num;
                end = false;
            }
        } else {
            if (pointDetect && second_num.includes(".")) {
                second_num += "";
            } else {
                second_num += buttonValue;
                screen_area.textContent = second_num;
            }
        }
    } 

    if (delDetect) {
        if (second_num === "") {
            first_num = first_num.substring(0, first_num.length - 1);
            screen_area.textContent = first_num;
        } else {
            second_num = second_num.substring(0, second_num.length - 1);
            screen_area.textContent = second_num;
        }
    }

    if (operandDetect) {
        operand = buttonValue;
        screen_area.textContent = "";
        screen_area.textContent = buttonValue;
    }

    if (signChangeDetect) {
        if (second_num === "") {
            first_num = -first_num;
            screen_area.textContent = first_num;
        } else {
            second_num = -second_num;
            screen_area.textContent = second_num;
        }
    }

    if (equalDetect) {
        switch (operand) {
            case "+":
                first_num = +first_num + +second_num;
                break;
            case "-":
                first_num = first_num - second_num;
                break;
            case "X":
                first_num = first_num * second_num;
                break;
            case "/":
                if (second_num === "0") {
                    screen_area.textContent = "Error";
                    first_num = "";
                    second_num = "";
                    operand = "";
                    return;
                }

                first_num = first_num / second_num;
                break;
            }

        end = true;
        const length = first_num.toString().match(/\.(\d+)/)?.[1].length;
        
        if (length > 8) {
            screen_area.textContent = first_num.toFixed(8);
        } else {
            screen_area.textContent = first_num;
        }
    }
}

buttons_area.addEventListener("click", actionHandler);