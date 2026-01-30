/* Задание 6.6.5
Есть объект obj. В одном из ключей объекта — массив. Добавьте в новый массив arrValues значения всех ключей объекта. Если значение — массив, добавьте каждый элемент в массив arrValues.

Выведите получившийся массив в консоль.

Входные данные:

    const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };
Выходные данные: ["some", "text", 1, 2, 3, 4, 5, "there"]  */

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];
for (const key in obj) {
    const values = obj[key];
    if (Array.isArray(values)) {
        arrValues.push(...values);
    } else {
        arrValues.push(values);
    }
}
console.log(arrValues)



