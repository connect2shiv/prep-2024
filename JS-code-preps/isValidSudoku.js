var isValidSudoku = function (board) {
    const isValidInRow = (row, col) => {
        const num = board[row][col];
        for (let i = 0; i < 9; i++) {
            if (i !== col && board[row][i] !== "." && board[row][i] === num) {
                return false;
            }
        }
        return true;
    };
    const isValidInColumn = (row, col) => {
        const num = board[row][col];
        for (let i = 0; i < 9; i++) {
            if (i !== row && board[i][col] !== "." && board[i][col] === num) {
                return false;
            }
        }
        return true;
    };
    const isValidInBlock = (row, col) => {
        const num = board[row][col];
        const blockRowStart = Math.floor(row / 3) * 3;
        const blockColStart = Math.floor(col / 3) * 3;
        for (let i = blockRowStart; i < blockRowStart + 3; i++) {
            for (let j = blockColStart; j < blockColStart + 3; j++) {
                if (i !== row && j !== col && board[i][j] !== "." && board[i][j] === num) {
                    return false;
                }
            }
        }
        return true;
    };

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                if (!isValidInRow(i, j) || !isValidInColumn(i, j) || !isValidInBlock(i, j)) {
                    return false;
                }
            }
        }
    }
    return true;
};

const sudoku = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(sudoku));