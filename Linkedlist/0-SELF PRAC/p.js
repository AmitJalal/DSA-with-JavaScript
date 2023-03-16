let num = 2;

function isNumber(val) {

  let splitTheVal = val.toString().split(".")
  let afterDeci = splitTheVal[1];

  if (typeof val === "number") {
    if (afterDeci) return false;
    return true;
  }
  else {
    return false;
  }

}

console.log(isNumber(num));