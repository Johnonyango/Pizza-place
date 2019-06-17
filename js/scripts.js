function totalPrice(pizzaSize,toppings,crust,deliver) {
  var pizzaSize =parseFloat(document.getElementById("pizzaSize").value);
  var toppings =parseFloat(document.getElementById("toppings").value);
  var crust =parseFloat(document.getElementById("crust").value);
  var deliver =parseFloat(document.getElementById("deliver").value);

  function PizzaSize(large,medium,small){
    document.this.large = 35000
    document.this.medium = 2500
    document.this.small =1500
  }
  function Crust(Cripsy,Stuffed,Glutten-free){
    document.this.Cripsy = 500
    document.this.Stuffed = 850
    document.this.small = 1200
  }
  function Toppings(Pepperoni,Sausage,Bacon){
    document.this.Pepperoni = 500
    document.this.Sausage = 850
    document.this.Bacon = 1200
  }
  function Deliver(delivery,nodelivery){
    document.this.delivery = 500
    document.this.nodelivery = 0
  }


  return pizzaSize + toppings +crust + deliver
}
