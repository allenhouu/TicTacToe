document.addEventListener("DOMContentLoaded", () =>
{
const cells = document.querySelectorAll(".cell");
const status = document.querySelector("#status");
const restart = document.querySelector("#restart");
const winCondition = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];
let tiles = ["", "", "", "", "", "", "", "", ""];
let currPlayer = 'X';
let running = false

function startGame()
{
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restart.addEventListener("click", restartGame);
    status.textContent = `${currPlayer}'s turn`;
    running = true;
}
function cellClicked()
{
    const cellIndex = this.getAttribute("cellIndex");
    if (tiles[cellIndex] !== "" || !running)
        return;
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index)
{
    tiles[index] = currPlayer;
    cell.textContent = currPlayer;
}
function changePlayer()
{
    currPlayer = currPlayer === 'X' ? 'O' : 'X';
    status.textContent = `${currPlayer}'s turn`;
}
function restartGame()
{
    currPlayer = 'X';

}
function checkWinner()
{
    
}
});