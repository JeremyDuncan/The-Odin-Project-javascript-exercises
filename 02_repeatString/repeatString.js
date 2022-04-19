const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR";
  }
  
  repeatResult = "";
  for (var i = 0; i < num; i++) {
    repeatResult += string;
  }
  return repeatResult;
};

// Do not edit below this line
module.exports = repeatString;
