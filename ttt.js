document.addEventListener("DOMContentLoaded", () =>
{
const cell = document.querySelectorAll(".cell");
const status = document.querySelector("#status");
const restart = document.querySelector("#restart");
const singleP = document.querySelector("#singlePlayer");
const twoP = document.querySelector("#twoPlayers");
const winCondition = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];
let tiles = ["", "", "", "", "", "", "", "", ""];
let currPlayer = 'X';
let running = false;
let isSinglePlayer = false;



function startGame()
{
    cell.forEach(cell => cell.addEventListener("click", cellClicked));
    restart.addEventListener("click", restartGame);
    status.textContent = `${currPlayer}'s turn`;
    running = true;
}
function mode(isSinglePlayer)
{

}
function cellClicked()
{
    const cellIndex = this.getAttribute("cellIndex");
    if (tiles[cellIndex] !== "" || !running) return;
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
    tiles = ["", "", "", "", "", "", "", "", ""];
    status.textContent = `${currPlayer}'s turn`;
    cell.forEach(cell => cell.textContent = "");
    running = true;
}
function checkWinner()
{
    let roundWon = winCondition.some(condition => {
        const [a, b, c] = condition;
        return tiles[a] && tiles[a] === tiles[b] && tiles [a] === tiles[c];
    });

    if (roundWon)
    {
        status.textContent = `${currPlayer} won`;
        running = false;
    }
    else if(!tiles.includes(""))
    {
        status.textContent = "Draw";
        running = false;
    }
    else
    {
        changePlayer();
    }
}
function bestMove()
{
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < tiles.length; i++)
    {
        if (tiles[i] === "")
        {
            tiles[i] = "O";

        }
    }
}

startGame();
});