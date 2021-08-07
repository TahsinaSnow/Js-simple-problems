function largestElement(numbers){
    let  largest = numbers[0];
     for(let i =0; i< numbers.length; i++){
         const element = numbers[i];
         if(element > largest){
             largest = element;
         }
         
     }
     return largest;

}

const ages = [12,54,2,34,75,32,12];
const oldest = largestElement(ages);
// const oldest2 = largestElement([-12,-3,-5,-17]);
console.log('oldest', oldest);







// task-1 find the lowest element of an array


function smallestElement(numbers){
    let  smallest = numbers[0];
     for(let i =0; i< numbers.length; i++){
         const element = numbers[i];
         if(element < smallest){
             smallest = element;
         }
         
     }
     return smallest;

}

const ages = [12,54,2,34,75,32,12];
const lowest = largestElement(ages);
// const oldest2 = largestElement([-12,-3,-5,-17]);
console.log('Little', lowest);
