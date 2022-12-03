
//1
let photo = document.querySelector(".photo");

photo.addEventListener("click", function() {
    photo.classList.toggle("border");
});

//2
 var paragraphs = document.querySelectorAll("p");

 for (i=0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add("description");
 };

 
 let clubs = ['Argentina', 'Brazil', 'Croatia', 'France', 'Japan', 'Ecuador', 'Serbia'];

var ul = document.createElement("ul");

for(let i = 0; i < clubs.length; i++) {
    var li = document.createElement("li");
    let val = document.createTextNode(clubs[i]);
    li.appendChild(val);
    ul.appendChild(li);
}
document.body.appendChild(ul);


//api

 let id = `  id": 1,
 "name": "Leanne Graham",
 "username": "Bret",
 "email": "Sincere@april.biz",
 "address": {
   "street": "Kulas Light",
   "suite": "Apt. 556",
   "city": "Gwenborough",
   "zipcode": "92998-3874",
   "geo": {
     "lat": "-37.3159",
     "lng": "81.1496"
   }
 },
 "phone": "1-770-736-8031 x56442",
 "website": "hildegard.org",
 "company": {
   "name": "Romaguera-Crona",
   "catchPhrase": "Multi-layered client-server neural-net",
   "bs": "harness real-time e-markets`;

console.log(id);


let userId = ` id": 5,
"name": "Chelsey Dietrich",
"username": "Kamren",
"email": "Lucio_Hettinger@annie.ca",
"address": {
  "street": "Skiles Walks",
  "suite": "Suite 351",
  "city": "Roscoeview",
  "zipcode": "33263",
  "geo": {
    "lat": "-31.8129",
    "lng": "62.5342"
  }
},
"phone": "(254)954-1289",
"website": "demarco.info",
"company": {
  "name": "Keebler LLC",
  "catchPhrase": "User-centric fault-tolerant solution",
  "bs": "revolutionize end-to-end systems`;
console.log(userId);