/*
### Task-1  
Take four parameters. Multiply the four numbers and then return the result 

*/
function multiply(number1, number2, number3, number4) {
      return number1*number2*number3*number4;
}

const result = multiply(4, 2, 6, 8);
//console.log(result);

/*

### Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/
function deferentNumber(number){
      if(number % 2 == 1){
            return (number*2);
      }
      return (number/2);
}
const output = deferentNumber(6)
//console.log(output);


/*
### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/
function make_avg(marks){
      let sum = 0;
      for(let mark of marks){
            sum += mark;
      }
      //console.log(sum);
      return(sum/marks.length);

}
console.log(make_avg([23,12,34,21, 43,67,80,70]));


/*
### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/



/*
### Task-5 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
*/