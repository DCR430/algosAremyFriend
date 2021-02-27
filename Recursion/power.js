
// write a function called power that accepets a 
// base and an exponent
//the function should return the power of the base to the 
//exponent
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

power=(base,exponent)=>{
    if (exponent === 0) return 1
    return base * power(base, exponent-1)
  
  }
  