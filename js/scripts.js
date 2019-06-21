// Business Logic

function Order(name, size, crust, toppings, cost) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.cost = cost;
}

Order.prototype.priceCalc = function() {
  return this.cost = parseInt(this.size) + parseInt(this.crust) + parseInt(this.toppings)
}





// User Interface Logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var testOrder = new Order("TestPerson", "2", "3", "8", "0")
    console.log(testOrder);
    var testComplete = testOrder.priceCalc();
    console.log(testComplete);
      console.log(testOrder);
  });
});
