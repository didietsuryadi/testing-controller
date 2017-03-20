module.exports = {
  primeFactor: function (number, result = []) {
    var number1 = 2;
    var number2 = 1;

    while (number1 < number){
      if(number % number1 === 0){
        result.push(number1);
        number = number / number1;
      }
      else{
        number1 = number1+number2;
        number2 = 2;
      }
    }
    result.push(number1);
    return result;
  }
}
