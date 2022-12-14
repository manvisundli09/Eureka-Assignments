function sumOfProductOfDigits(n1, n2)
{
         // Your code here
         let sum = 0;
         while(n1!=0 || n2!=0)
         {
             let temp1 = n1%10;
             let temp2 = n2%10;
             n1 = Math.trunc(n1/10);
             n2 = Math.trunc(n2/10);
             sum += (temp1*temp2);
         }
         return sum;
}
