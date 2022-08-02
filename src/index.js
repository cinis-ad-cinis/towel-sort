
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let array = [];

    if (!matrix) {
        return []
    }

    for (let i = 0; i < matrix.length; i++) {
        i%2 ? array.push(matrix[i].reverse()) : array.push(matrix[i])
    }
    return array.flat()
}
