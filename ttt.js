let board;
let gameActive;

function oneP()
{

}
function twoP()
{

}
function startGame()
{
    board =
        [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    gameActive = true;
    updateBoard();
}
function updateBoard()
{

}
function clearGrid()
{
    startGame();
}
function fullGrid()
{
    
}
function move(row, col)
{
        board[row][col] = 'X';
        document.getElementById("grid-item").value = board;
}
function checkWin()
{

}
document.addEventListener("DOMContentLoaded", () =>
{
    startGame();
});