let str = "";
// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
  str = "";
}

// This function display values
function display(value) {
  str += value;
  console.log("In display : " + str);
  document.getElementById("result").value = str;
}

// This function evaluates the expression and returns result
function calculate() {
  try {
      const result = eval(str);
      document.getElementById("result").value = result;
      str = result;
  } 
  catch{
    alert("Error......!");
  }
}

// clear a character at a time
const deleteAtOne = () => {
  let newStr = str.slice(0, str.length - 1);
  console.log(str);
  console.log(newStr);
  // 0 to lenght -1 string get sliced.
  str = newStr;
  document.getElementById("result").value = str;
};
