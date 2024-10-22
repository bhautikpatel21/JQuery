let Json = {

   "Name" : "Bhautik",
   "Age"  : 19,
   "City" : "Surat"
}
var Name = Json.Name;
var Age = Json.Age;
var City = Json.City;   

$(function() {
 
    $('.Form').append(`<div><p> <strong> Name : </strong> ${Name} </p>
     <p> <strong> Age :</strong> ${Age} </p>
     <p> <strong> City :</strong> ${City}</p> 
     </div>`);

})