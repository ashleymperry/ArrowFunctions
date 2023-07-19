//original function

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //ES2015 refactor

  const double = arr => arr.map(val => val * 2);

  //original function

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 ===0)

