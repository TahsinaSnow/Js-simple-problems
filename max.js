const business = 450;
const minister = 550;
const army = 600;

if( business > minister){
    console.log('Business person er pola is bigger');
}
else{
    console.log('Minister er pola is bigger');
}


// ----------------------------------

if(business > minister && business > army){
    console.log('Business is bigger');
}

else if(minister > business && minister > army){
   console.log('Minister is bigger');
}

else
    console.log('army is bigger');

// --------------------

var max = Math.max(business, minister,army);
console.log('largest is', max);


function findLargest(first, second){
    if(first > second){
        return first;
    }
    else{
      return second;
    }
}

const larger = findLargest(354, 244);
console.log('largest is', max);


// ----create a function that takes three numbers as input parameter and returns maximum numbers


// task-1

const business = 400;
const minister = 500;
const army = 700;

var max = Math.max(business, minister,army);
console.log('largest is', max);


function findLargest(business, minister,army){
    if(business > minister && business > army){
        return business;
    }

    else if(minister > business && minister > army){
        return minister;
    }

    else{
        return army;
    }
}




// task 2----------

const business = 400;
const minister = 500;
const army = 700;

var min = Math.min(business, minister,army);
console.log('smallest is', min);


function findLargest(business, minister,army){
    if(business < minister && business < army){
        return business;
    }

    else if(minister < business && minister < army){
        return minister;
    }

    else{
        return army;
    }
}



