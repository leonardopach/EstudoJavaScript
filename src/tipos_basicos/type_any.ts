// utilizer any em apenas em ultimo caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3, 5]));
console.log(showMessage("ola"));
console.log(showMessage(12));
