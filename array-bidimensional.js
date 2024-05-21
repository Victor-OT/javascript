let matrix =
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for (let i = 0; i < matrix.length; i ++) 
    {
        for (let j = 0; j < matrix[i].length; j++)
            {
                console.log(matrix[i][j])
            }
    }

function findElementInMatrix(array, element)
{
    for (let i = 0; i < array.length; i ++) {
        for (let j = 0; j < array[i].length; j ++) {
            if(array[i][j] === element){
                return true
            }
        }
    }
    return false
}

console.log(findElementInMatrix(matrix, 5))
console.log(findElementInMatrix(matrix, 10))