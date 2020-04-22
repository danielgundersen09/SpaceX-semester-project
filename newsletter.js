//newsletterform
var submitbtn = document.getElementById("submitContact");


submitbtn.addEventListener("click", function() {

var email = document.getElementById("email").value;
    
var mailError = document.getElementById("emailError");
    
var mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
if (mailPattern.test(email) === false) {
    mailError.style.display = "block";
  } else {
    mailError.style.display = "none";
  }
});


//API

fetch('http://api.open-notify.org/astros.json')
    .then(result => result.json())
  .then((res) => {
    createPerson(res);
  })
.catch(err => console.log(err))


function createPerson(result){
    var details = document.getElementById('peopleinspace');
  details.innerHTML += "<span>Current number of people in space: " + result.number + "</span>";
  
}