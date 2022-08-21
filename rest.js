fetch('http://localhost:5000/products')
.then(function(response) {
return response.json();
})
.then(function(product) {
console.log(product);

let listProducts = document.getElementById('products')
product.forEach(a => {
let myListProducts = document.createElement('li')
myListProducts.innerText = `${a.name}`
listProducts.appendChild(myListProducts)
})
})
.catch(function(error){
console.log('error',error);
});



fetch('http://localhost:5000/"/products/fruits"')
.then(function(response) {
return response.json();
})
.then(function(fruitsss) {
console.log(fruitsss);

let listFruits = document.getElementById('fruiList')
fruits.forEach(a => {
let myListFruits = document.createElement('li')
myListFruits.innerText = `${a.name}`
listFruits.appendChild(li)
})
})
.catch(function(error){
console.log('error',error);
});


fetch('http://localhost:5000//products/vegetables')
.then(function(response) {
return response.json();
})
.then(function(vegetabless) {
console.log(vegetabless);

let listVeg = document.getElementById('veglist')
product.forEach(a => {
let myListVeg = document.createElement('li')
myListVeg.innerText = `${a.name}`
listVeg.appendChild(li)
})
})
.catch(function(error){
console.log('error',error);
});






