// user interface
function jonteez(){
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;

  // business logic
  if (email.length < 10) {
    alert("email invalid!");
  }
  if (name.length < 1 || name.length == 0) {
    alert("please enter full name!");
  }
  if (location.length < 1) {
    alert("Please enter a valid location");
  }
  if (email.length > 10  && name.length > 1 && location.length > 1) {
    alert("Dear" + name + " of email: " + email + " from " + location + " we have received your message!")
  }
};

// User interface
function Charge(size, crust, topping,delivery) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.delivery = delivery
  this.price = 0;
 }
 var totalCharge = [];
 
 var pizzaSizes = ["small", "medium", "large"];
 var crust = ["Crispy", "Stuffed", "Gluten-free"];
 var topping = ["Pepperoni", "Chicken", "Bacon", "Onions", "Mushrooms"];
 var delivery = ["deliver", "dont-deliver"]
 
//  Business logic
 Charge.prototype.totalPrice = function () {
  if (this.size === pizzaSizes["small"]) {
    this.price += 1000;
  } else if (this.size === pizzaSizes["medium"]) {
    this.price += 1500;
  } else if (this.size === pizzaSizes["large"]) {
    this.price += 2500;
  }
  if (this.crust === crust["Cripsy"]) {
    this.price += 100;
  } else if (this.cheese === crust["Stuffed"]) {
    this.price += 150;
  } else if (this.cheese === crust["Gluten-free"]) {
    this.price += 200;
  }
  if (this.topping === topping["Pepperoni"]) {
    this.price += 100;
  } else if (this.topping === topping["Chicken"]) {
    this.price += 200;
  } else if (this.topping === topping["Bacon"]) {
    this.price += 300;
  } else if (this.topping === topping["Onions"]) {
    this.price += 50;
  }else if (this.topping === topping["Mushrooms"]) {
    this.price += 70;
  }
  if (this.delivery === delivery["dont-deliver"]) {
    this.price += 0;
  }else if (this.deliver === delivery["deliver"]) {
    this.price += 200;
  }
  return this.price;
 }

 Placeorder.prototype.totalCost = function () {
  var shoppingCartTotal = 0;
  for (var order = 0; order < totalOrderPrice.length; order++) {
    shoppingCartTotal += totalOrderPrice[order];
  }
  return shoppingCartTotal;
 }
 $(document).ready(function () {
  $("input#cost").click(function (event) {
    event.preventDefault();
    var sizes = $("select#Sizes").val();
    var crusts = $("select#crust").val();
    var toppings = $("select#topping").val();
    var newPizzauser = new Placeorder(sizes, crusts, toppings);
    newPizzauser.costOfPizza();
    totalOrderPrice.push(newPizzauser.price);
    $("#type").text("pizza :" + sizes);
    $("#typ").text("crusts  :" + crusts);
    $("#ty").text("topping  :" + toppings);
    $("#t").text("total cost  :" + newPizzauser.totalCost());
  });
 });
 

 