let board;
let lastDragged='';
let lastPos;
let cells = document.getElementsByClassName("borderCell");

function reset(){
    document.location.reload(true);
}

function inst(){
    alert("Drag and Drop! Drag to the trash to erase. || Arrastar e soltar! Arraste até o lixo para remover");
}

function load(){
    document.getElementById("year").innerHTML = `${new Date().getFullYear()} `;
    board = createArray(9, 9);
    genBoard();
}

function test(){
    alert(board);
}

function fillBoard(){
    let k=0;
    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            board[i][j] = cells[k++].innerText;
        }
    }
}

function fillScreen(){
    let k=0;
    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            cells[k++].innerText = board[i][j];
        }
    }
}

function drag(num){
    lastDragged=num;
}

function drop(num){
    cells[num].innerHTML = lastDragged;
    lastDragged='';
    fillBoard();
    isSolved();
}

function allowDrop(event, num){
    if(cells[num].static!="static")
        event.preventDefault();
}

function allowDelete(event){
    event.preventDefault();
}

function dropTrash(){
    cells[lastPos].innerHTML=' ';
    fillBoard();
    lastPos=-1;
}

function dragOut(pos){
    lastDragged=' ';
    lastPos=' ';
    if(cells[pos].static!="static"){
        lastPos=pos;
        lastDragged=' ';
    }
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}
