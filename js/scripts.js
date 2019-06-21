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
  this.cost = parseInt(this.size) + parseInt(this.crust) + parseInt(this.toppings)
  this.toppings = []
  return
}

Order.prototype.toppingsCalc = function() {
  var total = 0
  for (var i = 0; i < toppingsArray.length; i++) {
    total = total + parseInt(toppingsArray[i])
  }
}

// User Interface Logic

var toppingsArray = []

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var orderName = $("#nameInput").val();
    console.log(orderName);
    var orderSize = $("#size").val();
    var crustType = $("#crust").val();
    $("input:checkbox[name=toppings]:checked").each(function() {
      if (this.checked) {
        toppingsArray.push(this.value);
      }
    });
    var orderObject = new Order(orderName, orderSize, crustType, toppingsArray);
    // orderObject.priceCalc();
    console.log(orderObject);
  });
});
