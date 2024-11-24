const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(a) {
  let num = 0;

  for(let i = 0; i < a.length; i++){
    num += a[i];
  }
  return num;
};

const multiply = function(a) {
  let total = 1
  for(let i = 0; i < a.length; i++){
    total *= a[i]
  }
  return total;
};

const power = function(a,b) {
  return a ** b
};

const factorial = function(a) {
  total = 1;
  if(a == 0) {
    return 1
  }
  else {
    for(let i = 1; i <= a; i++){
      total = total * i
    }
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
