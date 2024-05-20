import React, { useState, useEffect } from 'react';
import './Game.css'

const initialBoard = Array(9).fill(null);

const calculateWinner = (board) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
};

const isMovesLeft = (board) => {
    return board.includes(null);
};

const minimax = (board, depth, isMax) => {
    const scoreMap = {
        'X': -10,
        'O': 10,
        'draw': 0,
    };

    const winner = calculateWinner(board);
    if (winner) {
        return scoreMap[winner];
    }
    if (!isMovesLeft(board)) {
        return scoreMap['draw'];
    }

    if (isMax) {
        let best = -1000;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                board[i] = 'O';
                best = Math.max(best, minimax(board, depth + 1, !isMax));
                board[i] = null;
            }
        }
        return best;
    } else {
        let best = 1000;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === null) {
                board[i] = 'X';
                best = Math.min(best, minimax(board, depth + 1, !isMax));
                board[i] = null;
            }
        }
        return best;
    }
};

const findBestMove = (board) => {
    let bestVal = -1000;
    let bestMove = -1;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
            board[i] = 'O';
            let moveVal = minimax(board, 0, false);
            board[i] = null;
            if (moveVal > bestVal) {
                bestMove = i;
                bestVal = moveVal;
            }
        }
    }
    return bestMove;
};

const TicTacToe = () => {
    const [board, setBoard] = useState(initialBoard);
    const [isUserTurn, setIsUserTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const winner = calculateWinner(board);
        if (winner) {
            setWinner(winner);
        } else if (!isUserTurn && isMovesLeft(board)) {
            const bestMove = findBestMove(board);
            if (bestMove !== -1) {
                const newBoard = board.slice();
                newBoard[bestMove] = 'O';
                setBoard(newBoard);
                setIsUserTurn(true);
            }
        }
    }, [isUserTurn, board]);

    const handleClick = (index) => {
        if (!board[index] && !winner) {
            const newBoard = board.slice();
            newBoard[index] = 'X';
            setBoard(newBoard);
            setIsUserTurn(false);
        }
    };

    const resetGame = () => {
        setBoard(initialBoard);
        setIsUserTurn(true);
        setWinner(null);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Tic Tac Toe</h1>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <div className="board">
                        {board.map((value, index) => (
                            <div
                                key={index}
                                className="cell"
                                onClick={() => handleClick(index)}
                            >
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {winner && <h2 className="text-center mt-3">Winner: {winner}</h2>}
            {!winner && !isMovesLeft(board) && <h2 className="text-center mt-3">It's a Draw!</h2>}
            <div className="text-center mt-3 mb-5">
                <button className="btn btn-primary" onClick={resetGame}>Reset</button>
            </div>
        </div>
    );
};

export default TicTacToe;