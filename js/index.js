// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
 let price=product.querySelector(".price span").innerHTML;
 let quantity=product.querySelector(".quantity input").value;
 product.querySelector(".subtotal span").innerHTML =price*quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 2
  let proList=document.querySelectorAll(".product");
  proList.forEach(item=>updateSubtotal(item));
  let subTtlList=document.querySelectorAll(".subtotal span");
  let sum=0;
  for(let i=0;i<subTtlList.length;i++){
    sum=sum+Number(subTtlList[i].innerHTML);
  }
  document.querySelector("#total-value span").innerText=sum;
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let a=target.parentNode.parentNode
  document.querySelector("tbody").removeChild(a);
}

// ITERATION 5

function createProduct() {
  let product=document.querySelector(".product");
  let newProduct=product.cloneNode(true);
  newProduct.querySelector(".name span").innerText=document.getElementById("newName").value;
  newProduct.querySelector(".price span").innerText=document.getElementById("newPrice").value;
  newProduct.querySelector(".subtotal span").innerText=0;
  newProduct.querySelector(".quantity input").value=0;
  document.getElementById("newName").value="";
  document.getElementById("newPrice").value=0;
  document.querySelector("tbody").appendChild(newProduct)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeButtons=document.querySelectorAll(".btn-remove");
  removeButtons.forEach(btn=>btn.addEventListener("click",removeProduct))
  document.querySelector("#create").addEventListener("click",createProduct);
});
