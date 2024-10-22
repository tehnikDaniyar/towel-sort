
// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (!matrix || matrix.length === 0) {
        return [];
    }


    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        let arr = i % 2 === 0 ? matrix[i] : matrix[i].reverse();
        result = [...result, ...arr];
    }

    return result;
}
