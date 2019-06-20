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
    alert("Dear" + name + " of email: " + email + " from " + location + " we have received your message.Your pizza will be delivered at an extra fee of ksh.250. Click 'ok' button to confirm!")
  }
};

// user interface
var large = document.getElementById("a");
var medium = document.getElementById("b");
var small = document.getElementById("c");
var cripsy = document.getElementById("d");
var stuffed = document.getElementById("e");
var glutenFree = document.getElementById("f");
var pepperoni = document.getElementById("i");
var sausage = document.getElementById("j");
var bacon = document.getElementById("k");
var mushrooms = document.getElementById("l");
var chicken = document.getElementById("m");
var price = 0;

// Business logic
$(document).ready(function(e) {
  $("input#cost").click(function(e) {
    if ($("#a").is(":checked")) {
      console.log("true");
      price += 1000;
      console.log(price);
    } else if ($("#a").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#b").is(":checked")) {
      console.log("true");
      price += 800;
      console.log(price);
    } else if ($("#b").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#c").is(":checked")) {
      console.log("true");
      price += 550;
      console.log(price);
    } else if ($("#c").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#d").is(":checked")) {
      console.log("true");
      price += 100;
      console.log(price);
    } else if ($("#d").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#e").is(":checked")) {
      console.log("true");
      price += 150;
      console.log(price);
    } else if ($("#f").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#f").is(":checked")) {
      console.log("true");
      price += 200;
      console.log(price);
    } else if ($("#f").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#i").is(":checked")) {
      console.log("true");
      price += 150;
      console.log(price);
    } else if ($("#i").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#j").is(":checked")) {
      console.log("true");
      price += 150;
      console.log(price);
    } else if ($("#j").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#k").is(":checked")) {
      console.log("true");
      price += 150;
      console.log(price);
    } else if ($("#k").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#l").is(":checked")) {
      console.log("true");
      price += 200;
      console.log(price);
    } else if ($("#l").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#m").is(":checked")) {
      console.log("true");
      price += 300;
      console.log(price);
    } else if ($("#m").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#m").is(":checked")) {
      console.log("true");
      price += 250;
      console.log(price);
    } else if ($("#m").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    
    function newPrice(){
      return  price+200;
    };
     var done = alert(
       "Your Cost of your pizza is Ksh " +price 
     );
  });
});