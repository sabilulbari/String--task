const myStr = "Xyne oxigen";

let chan = myStr.split("X").join('Y') && myStr.split("x").join('y'); // this is split mathod

const result = myStr.replace(/x/gi, "y"); //replace mathod

console.log(result);