document.addEventListener("DOMContentLoaded", () =>
{
const cell = document.querySelectorAll(".cell");
const status = document.querySelector("#status");
const mode = document.querySelector("#mode");
const winCondition = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];
let tiles = ["", "", "", "", "", "", "", "", ""];
let currPlayer = 'X';
let running = false;
let isSinglePlayer = false;

document.querySelector("#restart").addEventListener("click", restartGame);
document.querySelector("#singlePlayer").addEventListener("click", selectMode(true));
document.querySelector("#twoPlayers").addEventListener("click", selectMode(false));

cell.forEach(cell => cell.addEventListener("click", cellClicked));
function selectMode(singlePlayer)
{
    isSinglePlayer = singlePlayer;
    mode.textContent = `Mode: ${singlePlayer ? 'Single Player' : 'Two Player'}`;
    restartGame();
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
        status.textContent = `${currPlayer} wins!`;
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
function minimax()
{

}

restartGame();
});