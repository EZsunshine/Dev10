/*
Creator: Elaine Zhu
Date created: 2/2/2020
Date last modified: 2/11/2020
*/

function validateItems() {
  var name = document.forms["restaurantSite"]["name"].value;
  var email = document.forms["restaurantSite"]["email"].value;
  var phone = document.forms["restaurantSite"]["phone"].value;
  if (name == "" || number) {
    alert("Name must be filled in with characters.");
    document.forms["restaurantSite"]["name"].parentElement.className = "form-group has-error";
    document.forms["restaurantSite"]["name"].focus();
    return false;
  }
  if (email == "" || isNaN(email)) {
    alert("Email must be fill in with name@email.com.");
    document.forms["restaurantSite"]["email"].parentElement.className = "form-inline has-error";
    document.forms["restaurantSite"]["email"].focus();
    return false;
  }
  if (phone == "" || isNaN(phone)) {
    alert("Phone number must be fill in with (xxx)xxx-xxxx).");
    document.forms["restaurantSite"]["phone"].parentElement.className = "form-inline has-error";
    document.forms["restaurantSite"]["phone"].focus();
    return false;
}
   document.getElementById("submitButton").innerText = "Done";
   return false;
}
