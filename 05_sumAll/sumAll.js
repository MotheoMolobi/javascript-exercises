
    const sumAll = function(numOne, numTwo) {
        let ans = 0;  // Initialize ans
        
        
        const start = Math.min(numOne, numTwo);
        const end = Math.max(numOne, numTwo);
        
        for(let i = start; i <= end; i++) {
            ans += i;  // Use += instead of =+
        }
        if (numOne < 0 || numTwo < 0) {
            ans = 'ERROR'
        }
        
        return ans;  
    };
    


// Do not edit below this line
module.exports = sumAll;
