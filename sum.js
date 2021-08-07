const numbers = [12,20,30,25,50,60,77,];
let sum = 0;
for(let i=0; i<numbers.length; i++){

   const element = numbers[i];
   sum = sum + element;
   
}
console.log(sum);




function arraySum (numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;

}

 const total = arraySum ( [32,45,67] );
 console.log('array total', total);