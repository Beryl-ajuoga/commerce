let listProducts =document.getElementById("product")
listProducts.firstElementChild('/products' , {
    method:"get" ,
    Headers:{
        "Content-type":"application/json"
    }
})

let listVegetables=document.getElementById("veglist")
listVegetables.firstElementChild('/veglist' ,{
    method:"get" ,
    Headers:{
        "Content-type":"application/json"
    }
})

let listFruits=document.getElementById("fruList")
listFruits.firstElementChild('/fruList' ,{
    method:"get",
    Headers:{
        "content-type":"application/json"
    }
})


