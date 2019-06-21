// Business Logic

// Constructor for determining how orders will be created
function Order(name, size, crust, toppings, cost) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.cost = cost;
}

//prototype to take values stored from order properties and return total price value
Order.prototype.priceCalc = function() {
  return this.cost = parseInt(this.size) + parseInt(this.crust) + parseInt(this.toppings)
}





// User Interface Logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userName = $("#nameInput").val();
    console.log(userName);
    var testOrder = new Order("TestPerson", "2", "3", "8", "0")
    console.log(testOrder);
    var testComplete = testOrder.priceCalc();
    console.log(testComplete);
      console.log(testOrder);
  });
});
