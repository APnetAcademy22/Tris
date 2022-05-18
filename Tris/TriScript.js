//var board = new Array(3).fill(new Array(3).fill("-"))
var board = [["-", "-", "-"],
             ["-", "-", "-"],
             ["-", "-", "-"]]
var player = "X"
var turn = 0

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        const btn = document.getElementById("b"+i+j)
        btn.addEventListener("click", () => setButton(btn) )
    }
}
document.getElementById("restart").addEventListener("click", () => resetGame())


function setButton(btn) {
    turn++
    btn.disabled = true;
    btn.innerText = player
    board [btn.id.charAt(1)] [btn.id.charAt(2)] = player
    if (theresVictory()) {
        concludeGame()
    } else if (turn == 9) {
        document.getElementById("InfoDiv").innerHTML = "<b>It's a tie!</b> <p>Click Reset for a new game</p>"
    }else{
        player = (player == "X") ? "O" : "X"
        document.getElementById("InfoDiv").innerHTML = "It's <b>Player "+ player +"</b> turn!"
    }
}
function theresVictory() {
    var victory = false
    for (var i = 0; i < 3; i++) {
        if ((board[i][0] != "-" && board[i][0] == board[i][1] && board[i][0] == board[i][2])
            || (board[0][i] != "-" && board[0][i] == board[1][i] && board[0][i] == board[2][i])) {
            victory = true
            console.log(victory)
        }  
    }
    if ((board[0][0] != "-" && board[0][0] == board[1][1] && board[0][0] == board[2][2])
        || (board[2][0] != "-" && board[2][0] == board[1][1] && board[2][0] == board[0][2])) {
        victory = true
        console.log(victory)
    }
    return victory
}

function concludeGame() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            const btn = document.getElementById("b" + i + j)
            btn.disabled = true;
        }
    }
    document.getElementById("InfoDiv").innerHTML = "<b>Player " + player + "</b> Wins! <p>Click Reset for a new game</p>"
}

function resetGame() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            const btn = document.getElementById("b" + i + j)
            btn.disabled = false
            btn.innerText = ""
            board[i][j] = "-"
        }
    }
    document.getElementById("InfoDiv").innerHTML = "New game! Get ready <b>Player X</b>"
}