// 1 Task
function createRow(rowNum, rowsAndColumns) {
    let table = document.querySelector('.table'),
        row = document.createElement('tr');

    for(let i = 0; i < rowsAndColumns; i++) {
        let cell = document.createElement('td');
        if(rowNum == 0) cell.innerText = `${i}`;
        else i == 0 ? cell.innerText = `${rowNum}` : cell.innerText = `${i * rowNum}`;

        row.append(cell)
    }

    table.append(row)
}

(function createTable() {

    let rowsAndColumns = 10;

    for(let i = 0; i < rowsAndColumns; i++) {
        createRow(i, rowsAndColumns)
    }

})();

// 2 Task

let td = document.querySelectorAll('.table td');

// for (let i = 0; i < td.length; i++) {
//     td[i].onmouseover = function(event){
//         this.style.backgroundColor = '#bbbbbb'
//     }
//     td[i].onmouseout = function(event){
//         this.style.backgroundColor = 'transparent';
//     }
// }

// 3 Task
let table = document.querySelector('.table');

for (let i = 0; i < td.length; i++) {
    td[i].onmouseover = function(event){
        let rowIndex = this.parentElement.rowIndex,
            cellIndex = this.cellIndex;

        for( let i = 0; i < table.rows[rowIndex].children.length; i++) {
            table.rows[rowIndex].children[i].style.backgroundColor = '#bbbbbb'
            table.rows[i].cells[cellIndex].style.backgroundColor = '#bbbbbb'
        }

        this.style.backgroundColor = 'grey'
    }

    td[i].onmouseout = function(event){
        let rowIndex = this.parentElement.rowIndex,
            cellIndex = this.cellIndex;

        for( let i = 0; i < table.rows[rowIndex].children.length; i++) {
            table.rows[rowIndex].children[i].style.backgroundColor = 'transparent'
            table.rows[i].cells[cellIndex].style.backgroundColor = 'transparent'
        }
    }
}

// 4 Task and 5 Task
(function calc() {
    let firstNum = document.getElementById('first-num'),
        secondNum = document.getElementById('second-num'),
        button = document.getElementById('calc'),
        result = document.getElementById('result'),
        key = document.getElementById('operator'),
        operators = {
            '+': function(a, b){ return a+b},
            '-': function(a, b){ return a-b},
            '/': function(a, b){ return a/b},
            '*': function(a, b){ return a*b},
        }


    button.onclick = function () {
        let sum = operators[key.value](Number(firstNum.value), Number(secondNum.value));
        result.value = sum;
        alert(sum)
    }

    function liveCalc() {
        result.value = operators[key.value](Number(firstNum.value), Number(secondNum.value));
    }

    firstNum.oninput = liveCalc;
    secondNum.oninput = liveCalc;
    key.onchange = liveCalc;
})()