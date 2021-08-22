var setZeroes = function(matrix) {
let fRow = 1, fCol = 1;
            
        for(var i = 0; i < matrix.length; i++) {
            for(var j = 0; j < matrix[0].length; j++) {
                if(matrix[i][j] == 0) {
                    if (i == 0) {
                        fRow = 0;
                    }
                    if (j == 0) {
                        fCol = 0;
                    }
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
        }

        for(var i = 1; i < matrix.length; i++) {
            for(var j = 1; j < matrix[0].length; j++) {
                if(matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        if (fRow == 0) {
            for (var j = 0; j < matrix[0].length; j++) {
                matrix[0][j] = 0;
            }
        }
        if (fCol == 0) {
            for (var i = 0; i < matrix.length; i++) {
                matrix[i][0] = 0;
            }
        }
    }
    
    
    
    
   /* 
    Runtime: 80 ms, faster than 99.59% of JavaScript online submissions for Set Matrix Zeroes.
Memory Usage: 40.9 MB, less than 78.63% of JavaScript online submissions for Set Matrix Zeroes
*/
