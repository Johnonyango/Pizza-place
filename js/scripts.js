// user interface
function jonteez(){
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;

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

// var yourcharge = function() {
//   var email = document.getElementById("email").value
//   var name = document.getElementById("name").value;
//   var location = document.getElementById("location").value;
//   var location = document.getElementById("location").value;

// function Charge(PizzaSize,Crust,Toppings,Deliver) {
//     function PizzaSize(large,medium,small){
//       this.large = 3500;
//       this.medium = 2500;
//       this.small =1500;
//       }
//       function Crust(Cripsy,Stuffed,Gluttenfree){
//       this.Cripsy = 500;
//       this.Stuffed = 850;
//       this.Gluttenfree = 1200;
//       }
//       function Toppings(Pepperoni,<div class="row">
      <div class="col-md">
      <img src="https://s24667.pcdn.co/wp-content/uploads/2017/05/Naples-Pizza-Guide-Daryl-Eats-at-Da-Michele.jpg" alt="">
    </div>
  </div>Sausage,Bacon){
//       this.Pepperoni = 500;
//       this.Sausage = 850;
//       this.Bacon = 1200;
//       }
//       function Deliver(delivery,nodelivery){
//       this.delivery = 500;
//       this.nodelivery = 0;
//       }
//       Charge.prototype.totalCharge = function() {
//         return this.PizzaSize + this.Crust + this.Toppings + this.Deliver;
//   }
// }

  

//   $(document).ready(function() {
//     $("#charge").submit(function(event) {
//       event.preventDefault();
  
//       var inputtedPizzaSize = $("#pizzaSize").val();
//       var inputtedToppings = $("#toppings").val();
//       var inputtedCrust = $("#crust").val();
//       var inputtedDeliver = $("#deliver").val();
  
//       var totalCharge = new Charge(inputtedPizzaSize, inputtedToppings,inputtedCrust,inputtedDeliver);
//     });
//     $("#btn").click(function(){
//       $(".label").hide();
//   });
//   });
