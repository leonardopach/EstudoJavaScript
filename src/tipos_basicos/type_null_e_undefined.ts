let x;
if (typeof x === "undefined") x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): { firstName: string; lastName?: string } {
  return { firstName, lastName };
}

export function squareOf(x: unknown) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf("2");

console.log(squareOfTwoNumber);

if (squareOfTwoString === null) {
  console.log("Conta invalida");
} else {
  console.log(squareOfTwoString);
}