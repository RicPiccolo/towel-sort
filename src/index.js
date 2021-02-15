
// You should implement your task here.

module.exports = function towelSort(matrix) {
 if (!matrix) return  [];
 matrix.forEach((elem, index) => {
     if (index%2 !== 0){
         elem.reverse();
     }
 });
    return  matrix.flat()
}
