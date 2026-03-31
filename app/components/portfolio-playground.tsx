'use client'

import { useState } from "react";

type TicTacToeCell = "X" | "O" | null;

type MineCell = {
  adjacent: number;
  isFlagged: boolean;
  isMine: boolean;
  isRevealed: boolean;
};

const ticTacToeLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const mineRows = 6;
const mineCols = 6;
const mineCount = 6;

function getTicTacToeWinner(board: TicTacToeCell[]) {
  for (const [a, b, c] of ticTacToeLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

function createMineBoard() {
  return createMineBoardWithSafeIndex();
}

function createMineBoardWithSafeIndex(safeIndex?: number) {
  const board: MineCell[] = Array.from({ length: mineRows * mineCols }, () => ({
    adjacent: 0,
    isFlagged: false,
    isMine: false,
    isRevealed: false,
  }));

  let placed = 0;
  while (placed < mineCount) {
    const index = Math.floor(Math.random() * board.length);
    if (index !== safeIndex && !board[index].isMine) {
      board[index].isMine = true;
      placed += 1;
    }
  }

  for (let row = 0; row < mineRows; row += 1) {
    for (let col = 0; col < mineCols; col += 1) {
      const index = row * mineCols + col;
      if (board[index].isMine) continue;

      let adjacent = 0;
      for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
        for (let colOffset = -1; colOffset <= 1; colOffset += 1) {
          if (rowOffset === 0 && colOffset === 0) continue;
          const nextRow = row + rowOffset;
          const nextCol = col + colOffset;
          if (
            nextRow < 0 ||
            nextRow >= mineRows ||
            nextCol < 0 ||
            nextCol >= mineCols
          ) {
            continue;
          }

          if (board[nextRow * mineCols + nextCol].isMine) {
            adjacent += 1;
          }
        }
      }

      board[index].adjacent = adjacent;
    }
  }

  return board;
}

function revealCells(board: MineCell[], startIndex: number) {
  const nextBoard = board.map((cell) => ({ ...cell }));
  const queue = [startIndex];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === undefined || nextBoard[current].isRevealed) continue;

    nextBoard[current].isRevealed = true;

    if (nextBoard[current].adjacent !== 0 || nextBoard[current].isMine) continue;

    const row = Math.floor(current / mineCols);
    const col = current % mineCols;

    for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
      for (let colOffset = -1; colOffset <= 1; colOffset += 1) {
        if (rowOffset === 0 && colOffset === 0) continue;
        const nextRow = row + rowOffset;
        const nextCol = col + colOffset;
        if (
          nextRow < 0 ||
          nextRow >= mineRows ||
          nextCol < 0 ||
          nextCol >= mineCols
        ) {
          continue;
        }

        const nextIndex = nextRow * mineCols + nextCol;
        if (!nextBoard[nextIndex].isRevealed && !nextBoard[nextIndex].isMine) {
          queue.push(nextIndex);
        }
      }
    }
  }

  return nextBoard;
}

export default function PortfolioPlayground() {
  const [ticTacToeBoard, setTicTacToeBoard] = useState<TicTacToeCell[]>(
    Array(9).fill(null),
  );
  const [ticTacToeTurn, setTicTacToeTurn] = useState<"X" | "O">("X");
  const [mineBoard, setMineBoard] = useState<MineCell[]>(() => createMineBoard());
  const [mineGameOver, setMineGameOver] = useState(false);
  const [mineHasStarted, setMineHasStarted] = useState(false);
  const [mineFlagMode, setMineFlagMode] = useState(false);

  const ticTacToeWinner = getTicTacToeWinner(ticTacToeBoard);
  const ticTacToeDraw =
    !ticTacToeWinner && ticTacToeBoard.every((cell) => cell !== null);
  const mineWin =
    !mineGameOver &&
    mineBoard.every((cell) => cell.isMine || cell.isRevealed);

  function handleTicTacToeClick(index: number) {
    if (ticTacToeBoard[index] || ticTacToeWinner) return;

    const nextBoard = [...ticTacToeBoard];
    nextBoard[index] = ticTacToeTurn;
    setTicTacToeBoard(nextBoard);
    if (!getTicTacToeWinner(nextBoard)) {
      setTicTacToeTurn(ticTacToeTurn === "X" ? "O" : "X");
    }
  }

  function resetTicTacToe() {
    setTicTacToeBoard(Array(9).fill(null));
    setTicTacToeTurn("X");
  }

  function handleMineClick(index: number) {
    if (mineGameOver || mineWin || mineBoard[index].isRevealed) return;

    if (mineBoard[index].isFlagged) return;

    const activeBoard = mineHasStarted
      ? mineBoard
      : createMineBoardWithSafeIndex(index);

    if (!mineHasStarted) {
      setMineHasStarted(true);
    }

    if (activeBoard[index].isMine) {
      setMineBoard(activeBoard.map((cell) => ({ ...cell, isRevealed: true })));
      setMineGameOver(true);
      return;
    }

    setMineBoard(revealCells(activeBoard, index));
  }

  function toggleMineFlag(index: number) {
    if (mineGameOver || mineWin || mineBoard[index].isRevealed) return;

    setMineBoard((currentBoard) =>
      currentBoard.map((cell, currentIndex) =>
        currentIndex === index
          ? { ...cell, isFlagged: !cell.isFlagged }
          : cell,
      ),
    );
  }

  function resetMinesweeper() {
    setMineBoard(createMineBoard());
    setMineGameOver(false);
    setMineHasStarted(false);
    setMineFlagMode(false);
  }

  return (
    <section className="section-block" id="playground">
      <div className="playground-shell">
        <div className="playground-intro">
          <p className="eyebrow">Playground</p>
          <h2>Take a short break and play while you explore the portfolio.</h2>
          <p className="playground-copy">
            Two tiny games, fully interactive, built directly into the page.
          </p>
        </div>

        <div className="games-grid">
          <article className="game-card">
            <div className="game-header">
              <div>
                <p className="game-label">Tic-Tac-Toe</p>
                <h3>Classic and quick.</h3>
              </div>
              <button className="game-reset" type="button" onClick={resetTicTacToe}>
                Reset
              </button>
            </div>

            <p className="game-status">
              {ticTacToeWinner
                ? `Winner: ${ticTacToeWinner}`
                : ticTacToeDraw
                  ? "Draw game"
                  : `Turn: ${ticTacToeTurn}`}
            </p>

            {(ticTacToeWinner || ticTacToeDraw) && (
              <div
                className={`game-feedback${ticTacToeWinner ? " is-win" : " is-draw"}`}
                role="status"
              >
                {ticTacToeWinner
                  ? `${ticTacToeWinner} wins the match.`
                  : "Match ended in a draw."}
              </div>
            )}

            <div className="tic-tac-toe-board">
              {ticTacToeBoard.map((cell, index) => (
                <button
                  key={index}
                  className={`tic-cell${cell ? "" : " is-empty"}`}
                  type="button"
                  onClick={() => handleTicTacToeClick(index)}
                  aria-label={`Tic-Tac-Toe cell ${index + 1}`}
                >
                  {cell ?? "·"}
                </button>
              ))}
            </div>
          </article>

          <article className="game-card">
            <div className="game-header">
              <div>
                <p className="game-label">Mini Minesweeper</p>
                <h3>Find the safe path.</h3>
              </div>
              <div className="game-actions">
                <button
                  className={`game-toggle${mineFlagMode ? " is-active" : ""}`}
                  type="button"
                  onClick={() => setMineFlagMode((current) => !current)}
                >
                  {mineFlagMode ? "Flag mode on" : "Flag mode off"}
                </button>
                <button className="game-reset" type="button" onClick={resetMinesweeper}>
                  New board
                </button>
              </div>
            </div>

            <p className="game-status">
              {mineGameOver
                ? "Boom. You found a mine."
                : mineWin
                  ? "Board cleared."
                  : "6 mines hidden in a 6x6 grid. Right click or use flag mode."}
            </p>

            <div className="minesweeper-board">
              {mineBoard.map((cell, index) => (
                <button
                  key={index}
                  className={`mine-cell${cell.isRevealed ? " is-revealed" : ""}${cell.isMine && cell.isRevealed ? " is-mine" : ""}${!cell.isRevealed ? " is-hidden" : ""}${cell.isFlagged ? " is-flagged" : ""}`}
                  type="button"
                  onClick={() =>
                    mineFlagMode ? toggleMineFlag(index) : handleMineClick(index)
                  }
                  onContextMenu={(event) => {
                    event.preventDefault();
                    toggleMineFlag(index);
                  }}
                  aria-label={`Minesweeper cell ${index + 1}`}
                >
                  {cell.isFlagged
                    ? "⚑"
                    : cell.isRevealed
                    ? cell.isMine
                      ? "✕"
                      : cell.adjacent === 0
                        ? ""
                        : cell.adjacent
                    : "·"}
                </button>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
