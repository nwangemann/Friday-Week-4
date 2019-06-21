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

// prototype to loop through values stored from toppings selections and return the total value
Order.prototype.toppingsCalc = function() {
  var total = 0
  for (var i = 0; i < toppingsArray.length; i++) {
    total = total + parseInt(toppingsArray[i])
  }
  return total
}

function OrderTracker() {
  this.orders = [],
  this.currentID = 0
}

OrderTracker.prototype.addOrder = function(order) {
  order.id = this.assignId();
  this.orders.push(order);
}

OrderTracker.prototype


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
    orderObject.toppings = orderObject.toppingsCalc();
    orderObject.priceCalc();
    console.log(orderObject);
    $("#outputName").text(orderObject.name + "'s order:");
    $("#output").text("$" + orderObject.cost + ".00");
  });
});
