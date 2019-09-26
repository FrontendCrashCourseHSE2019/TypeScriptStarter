import Bar, {MY_VALUE} from "./foo";

type Operation = "SUM" | "DIV" | "MUL" | "NEG";

document.addEventListener('DOMContentLoaded', function () {

    const resultBlock = document.getElementById("result");

    let lastOperation: Operation = null;
    let result = 0;

    function printResult(value: number) {
        resultBlock.innerText = "" + value;
    }

    for (let i = 0; i < 10; i++) {
        let btn = document.getElementById("btn" + i);
        btn.onclick = function () {
            if (lastOperation) {
                switch (lastOperation) {
                    case "DIV":
                        break;
                    case "SUM":
                        result += i;
                        break;
                    case "MUL":
                        break;
                    case "NEG":
                        break;
                }
                printResult(result);
            }
        };
    }

    document.getElementById("plus").onclick = function () {
        lastOperation = "SUM";
    }
});
