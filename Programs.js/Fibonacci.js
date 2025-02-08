//Fibonacci series

function series(n){
    let a = 0 , b= 1
    for(let i = 0 ; i<=n;i++){
        console.log(a);
        let c = a+b;
        a = b;
        b = c;

    }
    
}
series(10)