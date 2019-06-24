let first = document.querySelector('.first');
let second = document.querySelector('.second');
let plus = document.querySelector('[data-id=plus]');
let minus = document.querySelector('[data-id="minus"]');
let division = document.querySelector('[data-id=division]');;
let mult = document.querySelector('[data-id="mult"]');
let button = document.querySelectorAll('button');
let result = document.querySelector('.result');

plus.addEventListener('click', function() {
    calc.first = first.value;
    calc.second = second.value;
    calc.sum();
});

minus.addEventListener('click', function() {
    calc.first = first.value;
    calc.second = second.value;
    calc.minusFunc();
});

division.addEventListener('click', function() {
    calc.first = first.value;
    calc.second = second.value;
    calc.divisionFunc();
});

mult.addEventListener('click', function() {
    calc.first = first.value;
    calc.second = second.value;
    calc.multFunc();
});

let calc = {
    first: first.value,
    second: second.value,
    sum: function() {
        first.value = +this.first + +this.second;
        second.value = "";
    },
    minusFunc: function() {
        first.value = +this.first - +this.second;
        second.value = "";
    },
    divisionFunc: function() {
        first.value = +this.first / +this.second;
        second.value = "";
    },
    multFunc: function() {
        first.value = +this.first * +this.second;
        second.value = "";
    }
}