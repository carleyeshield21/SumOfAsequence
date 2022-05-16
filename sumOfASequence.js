// This is the link to this JavaScript challenge
// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

sequenceSum = (begin, end, step) => {
    // We immediately set the if condition to check if the begin element is greater than the end element, we return zero
    if(begin > end){
        return console.log(0)
    }
    // We then create an array arr, and set its initial element as the begin variable. Then we use the ternary operator to handle multiple conditions of the if statment, this is a great function to use to simplify the handling of if statements with three or more conditions. At the end of the while condition, we use the pop function and set its condition to pop the last element if the last iterated begin is greater than the end variable
    arr = [begin]
    while(begin<end ? begin = begin + step : console.log()){
      
      arr.push(begin)
      if(begin > end){
         arr.pop()
      }
    }
    // We ehen use the reduce function to get the sum of all the elements in the array arr
    sumOfArray = arr.reduce(
      (a, b) => a + b,
    )
    // console.log(arr)
    // console.log(sumOfArray)
    console.log(`${arr} = ${sumOfArray}`)
  };
  sequenceSum(1,5,3)
  console.log('=====')
  sequenceSum(2,6,2)
  console.log('=====')
  sequenceSum(1,5,1)
  console.log('=====')
  sequenceSum(16,5,1)
  console.log('=====')
  sequenceSum(2,2,2)
  console.log('=====')