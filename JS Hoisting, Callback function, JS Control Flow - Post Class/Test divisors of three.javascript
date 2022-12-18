function test_divisors(low, high) {
let combinedstring= "";
for(let i=low ; i<=high ; i++)
{
    combinedstring+=i+" ";
    if(i%3==0){
        combinedstring+="div3 ";
    }
}
console.log(combinedstring);
}
