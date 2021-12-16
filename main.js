var expression = ''

const visor = document.getElementById('responsive')

var numbers = document.getElementsByClassName('numbers')
var operators = document.getElementsByClassName('operators')

document.getElementById('comma').onclick = () => {

    if (expression.indexOf(".") === -1) {

        expression += "."
        visor.innerText = expression
    } else if (expression.indexOf(" ", expression.lastIndexOf(".")) != -1 && expression.slice(-1).search(/\d/) != -1) {

        expression += "."
        visor.innerText = expression
    }
}

for (var i = 0; i < numbers.length; i++) {

    (function (index) {

        numbers[index].addEventListener("click", function () {

            expression += numbers[index].value
            visor.innerText = expression
        })
    })(i);
}

for (var i = 0; i < operators.length; i++) {

    (function (index) {

        operators[index].addEventListener("click", function () {

            if (expression.lastIndexOf("(") > expression.lastIndexOf(")")) {

                if (expression.slice(-1) != ' ') {

                    expression += ")"
                    visor.innerText = expression
                }
            }

            if (expression.slice(-1) === '' || expression.slice(-1) === ' ') {

                if ((operators[index].value) === '-' && expression.slice(-3, -1) != '(-') {

                    expression += ` (- `
                    visor.innerText = expression
                }
            } else {

                if (expression.slice(-1) === ' ' && (operators[index].value) === '-') {

                    expression += ` (- `
                    visor.innerText = expression
                } else {

                    expression += ` ${operators[index].value} `
                    visor.innerText = expression
                }
            }
        })
    })(i);
}

function calcul() {

    if (expression === '') {


    } else if (expression.indexOf("x") != -1 || expression.indexOf("÷") != -1) {

        expression = expression.replace("x", "*")
        expression = expression.replace("÷", "/")

        if (expression.indexOf("(") != -1 || expression.indexOf(")") != -1) {

            if (expression.lastIndexOf("(") > expression.lastIndexOf(")")) {

                if (expression.slice(-1).search(/\d/) != -1) {

                    expression += ")"
                    visor.innerText = expression
                }
            }
        }

        var calc = eval(expression)

        if (String(calc).indexOf(".") != -1) {

            calc = calc.toFixed(4)
            visor.innerText = calc
            expression = String(calc)
        } else {

            visor.innerText = calc
            expression = String(calc)
        }
    } else {

        if (expression.indexOf("(") != -1 || expression.indexOf(")") != -1) {

            if (expression.lastIndexOf("(") > expression.lastIndexOf(")")) {

                if (expression.slice(-1).search(/\d/) != -1) {

                    expression += ")"
                    visor.innerText = expression
                }
            }
        }

        var calc = eval(expression)

        if (String(calc).indexOf(".") != -1) {

            calc = calc.toFixed(4)
            visor.innerText = calc
            expression = String(calc)
        } else {

            visor.innerText = calc
            expression = String(calc)
        }
    }
}

function clean() {

    expression = ''
    visor.innerText = expression
}