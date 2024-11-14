import { useState } from "react";
import Square from "./Square.js";

export default function Board({ xIsNext, squares, onPlay }) {
    let boardMap = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ];

    const winningLine = calculateWinner(squares);
    let status;

    if (winningLine) {
        status = "Winner: " + squares[winningLine[0]];
    } else if (squares.some((value) => value === null)) {
        status = "Next player: " + (xIsNext ? "X" : "O");
    } else {
        status = "Draw!";
    }

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    function render(boardMap, winningLine) {
        return boardMap.map((row) => {
            return (
                <div key={row} className="board-row">
                    {row.map((index) => {
                        return (
                            <Square
                                key={index}
                                value={squares[index]}
                                onSquareClick={() => handleClick(index)}
                                highlight={
                                    winningLine && winningLine.includes(index)
                                        ? true
                                        : false
                                }
                            />
                        );
                    })}
                </div>
            );
        });
    }

    function calculateWinner(squares) {
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

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return [a, b, c];
            }
        }
        return null;
    }

    return (
        <>
            <div className="status">{status}</div>
            {render(boardMap, winningLine)}
        </>
    );
}
