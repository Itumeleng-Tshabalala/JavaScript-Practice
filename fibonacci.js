
/* 
*
*
  A simple recursive function to find n'th fibonacci number
*
*
*/
function fibonacci(n) {
    if(n <= 1) 
        return n;
    return fib(n - 1) + fib(n - 2); 
}
console.log(fibonacci(10 + 1));
