// function totalPrice(pizzaSize,toppings,crust,deliver) {
//   var pizzaSize =parseFloat(document.getElementById("pizzaSize").value);
//   var toppings =parseFloat(document.getElementById("toppings").value);
//   var crust =parseFloat(document.getElementById("crust").value);
//   var deliver =parseFloat(document.getElementById("deliver").value);

  function Charge(PizzaSize,Crust,Toppings,Deliver) {
    function PizzaSize(large,medium,small){
      this.large = 35000;
      this.medium = 2500;
      this.small =1500;
      }
      function Crust(Cripsy,Stuffed,Gluttenfree){
      this.Cripsy = 500;
      this.Stuffed = 850;
      this.Gluttenfree = 1200;
      }
      function Toppings(Pepperoni,Sausage,Bacon){
      this.Pepperoni = 500;
      this.Sausage = 850;
      this.Bacon = 1200;
      }
      function Deliver(delivery,nodelivery){
      this.delivery = 500;
      this.nodelivery = 0;
      }
      Charge.prototype.totalCharge = function() {
        return this.PizzaSize + this.Crust + this.Toppings + this.Deliver;
  }
  

  $(document).ready(function() {
    $("#charge").submit(function(event) {
      event.preventDefault();
  
      var inputtedPizzaSize = $("#pizzaSize").val();
      var inputtedToppings = $("#toppings").val();
      var inputtedCrust = $("#crust").val();
      var inputtedDeliver = $("#deliver").val();
  
      var totalCharge = new Charge(inputtedPizzaSize, inputtedToppings,inputtedCrust,inputtedDeliver);
    });
    $("#btn").click(function(){
      $(".label").hide();
  });