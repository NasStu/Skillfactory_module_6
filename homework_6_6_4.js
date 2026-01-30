/* Задание 6.6.4
С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». Выведите результат в консоль.

Выходные данные:
x o x
o x o
x o x */

const size = 3;
const board = [];
for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
        row.push(Math.random() < 0.5 ? 'X' : 'O');
    }
    board.push(row);
    console.log(board[i].join(' '))
}



