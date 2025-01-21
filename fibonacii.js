function fibonacii(n){
const fib=[0,1]
 for(i=2;i<n;i++){
    fib[i]=fib[i-1]+fib[i-2]
 }return fib;
}
console.log(fibonacii(3))
console.log(fibonacii(6))
console.log(fibonacii(7))