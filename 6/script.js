function calculate() {
    let r = document.getElementById("result");
    let number = document.getElementsByName("number-of-goods");
    let cost = document.getElementById("products");
    if (Number(r.innerHTML) + Number(number[0].value) * Number(cost.value) > 2000) { //jslint-ignore-line
        alert("У студентов нет столько денег!");
    } else {
        if (Number.isInteger(Number(number[0].value))) {
            r.innerHTML = Number(r.innerHTML) +
            Number(number[0].value) * Number(cost.value);
        } else {
            alert("Недопустимое количество товаров!");
        }
    }
    return false;
}

function erase() {
    let r = document.getElementById("result");
    r.innerHTML = "0";
}

function objectSelect() {
    let radio = event.target;
    let select = document.getElementById("calc-2-select");
    let check = document.getElementById("calc-2-check");
    if (radio.value == "doshirak") {
        select.style.display = "none";
        check.style.display = "none"
    }
    if (radio.value == "makaroni") {
        select.style.display = "block";
        check.style.display = "none";
    }
    if (radio.value == "pelmeni") {
        select.style.display = "none";
        check.style.display = "block";
    }
}

function changeCost() {
    let radio = document.querySelector('input[name=calc-2-radio-1]:checked');
    let result = document.getElementById("result-2");
    let select = document.getElementById("calc-2-select");
    let check = document.querySelectorAll('input[name=costChanger]:checked');
    if (Number.isInteger(Number(number.value)) && Number(number.value) >= 0)
    {
        if (radio.value == "doshirak") {
            result.innerHTML = 40 * Number(number.value);
        }
        if (radio.value == "makaroni") {
            result.innerHTML = 100 * Number(number.value) * Number(select.value);
        }
        if (radio.value == "pelmeni") {
            result.innerHTML = 250 * number.value;
            if (check !== null)
            {
                check.forEach(function(check2){
                    result.innerHTML = Number(result.innerHTML) + Number(check2.value) * number.value;
                });
                
            }
        }
    } else {
        result.innerHTML = "Недопустимое кол-во товаров";
    }
}

window.addEventListener("DOMContentLoaded", function(){
    this.document.getElementById("calc-1-but-1").addEventListener("click", calculate);
    this.document.getElementById("calc-1-but-2").addEventListener("click", erase);
    this.document.getElementById("calc-2-radio").addEventListener("change", objectSelect);
    let radioChange = this.document.querySelectorAll("#calc-2-radio input")
    radioChange.forEach(function(price) {
        price.addEventListener("change", changeCost);
    });
    let checkChange = this.document.querySelectorAll("#calc-2-check input")
    checkChange.forEach(function(price) {
        price.addEventListener("change", changeCost);
    });
    this.document.getElementById("calc-2-select").addEventListener("change", changeCost);
    let inputChange = this.document.querySelectorAll("#number")
    inputChange.forEach(function(price) {
        price.addEventListener("input", changeCost);
    });
})