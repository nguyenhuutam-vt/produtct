// async function getAll() {
//     return fetch('https://fakestoreapi.com/products')
//               .then(res=>res.json());       
//   }
  
//   async function fetchData() {
//     const products = await getAll();
//     console.log(products);
  
//     const productsDiv = document.getElementById("products")
//     for (let item of products) {
//       productsDiv.innerHTML += 
//       `  <div class="product" data-name="p-1">
//       <img onclick="gotoDetail(${item.id})" src="${item.image}" alt="" />
//       <h3>${item.title}</h3>
//       <div class="price">${item.price}</div>
    
//     </div>`
//       ;
//   }

//   }
//   async function gotoDetail(id) {
//     window.location.assign(`detail.html?id=${id}`);
//   }

//   async function detail() {
    
//   }
// const form = {
//     product : document.querySelector("#product")
    
// }
// let button = form.product.addEventListener("click",(e)=>{
//     e.preventDefault();
//     return fetch('https://fakestoreapi.com/products')
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// })


// const userAction = async () => {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//     console.log(myJson)
//   }

async function getProduct() {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        return data;
}
getProduct().then(rs=>{
 
    const productsDiv = document.getElementById("products")
    for (let item of rs) {
        productsDiv.innerHTML += 
        `  <div class="product" data-name="p-1">
        <img onclick="gotoDetail(${item.id})" src="${item.image}" alt="" />
        <h3>${item.title}</h3>
        <div class="price">${item.price}</div>
      
      </div>`
        ;
    }
})

async function gotoDetail(id) {
    window.location.assign(`index.html?id=${id}`);
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        let data = await response.json();
        console.log(data)
        return data;
    
  }

