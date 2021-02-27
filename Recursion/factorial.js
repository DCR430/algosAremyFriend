//wtite a function factorial
//factorial accepts a number and returns the factorial of that number

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040


factorial=(number)=>{
    if (number === 0) return 1
    return number * factorial(number -1)
  
  
  }