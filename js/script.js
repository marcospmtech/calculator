const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent
        
        if (value === "=") {
            try {
                let calcExpression = expression;
                calcExpression = calcExpression.replaceAll("X", "*");
                calcExpression = calcExpression.replaceAll("÷", "/");

                expression = eval(calcExpression).toString();

                result.textContent = expression;
            } catch {
                result.textContent = "Erro";
                expression = "";
            }
            return;
            };
        expression += value;
        result.textContent = expression;

        if (value == "C") {
            result.textContent = "0";
            expression = "";
        };
    });
});