function mul (x){
// write your code  here
//
return function(y){
    return function(z){
        let A = (x*y*z);
        console.log(A);
    }
}
}
