for (var i = 1; i < 101; i++){
  if (i % 3 == 0 && i % 5 == 0){
    // divisible by 15
    console.log("FizzBuzz")
  }
  else if (i % 5 == 0){
    // divisible by 5
    console.log("Buzz")
  }
  else if (i % 3 == 0 ){
   // divisible by 3
    console.log("Fizz")
  }
  else {
    console.log(i);
  }

}

