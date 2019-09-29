var product = prompt("What do you like to order?    ");
console.log("You choosed", product);

switch (product) {
  case "Orange":
    console.log("Oranges are 0,59pounds");
    break;
  case "Bananas":
    console.log("Bananas are 1,23pounds");
    break;
  case "Cheries":
    console.log("Cheries are 4,56pounds");
    break;
  default:
    console.log("Sorry " + product + " doesn't exist");
}

console.log(1 + 2);
