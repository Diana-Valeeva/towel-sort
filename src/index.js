// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix)) {
        return [];
    }
    let flatArr = [];
    for (inner of matrix) {
        if (matrix.indexOf(inner) % 2 !== 0) {
            inner = inner.reverse();
        }
        flatArr.push(...inner);
    }
    return flatArr;
}
