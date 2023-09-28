let n = 789;
let count = 0;
temp = n;
while (temp != 0){
   temp = Math.floor(temp/10);
   count++;
} 
let div = Math.pow(10, count-1);

console.log(n)

while(n != 0){
 let q = Math.floor(n/div);
 console.log(q);
 n = n % div;
 console.log(n);
 div = div  / 10;
}