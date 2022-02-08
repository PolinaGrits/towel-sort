
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var mat = [];
    if (!matrix) return mat;
    for (let i = 0; i < matrix.length; i++) { 
        if (i % 2 == 0) {
            mat.push(...(matrix[i]));
        } else {
            mat.push(...(matrix[i].reverse()));
        }
    }   
    return mat;
}




