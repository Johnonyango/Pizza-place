function totalPrice(pizzaSize,toppings,crust,deliver) {
  var pizzaSize =parseFloat(document.getElementById("pizzaSize").value);
  var toppings =parseFloat(document.getElementById("toppings").value);
  var crust =parseFloat(document.getElementById("crust").value);
  var deliver =parseFloat(document.getElementById("deliver").value);

  return pizzaSize + toppings +crust + deliver
}
