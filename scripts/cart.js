import navbar from "../components/navbar.js"
document.getElementById("NAVBAR").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("Footer").innerHTML = footer();


let userD = JSON.parse(localStorage.getItem("accDetails"));
console.log('userD:', userD)
document.getElementById("username").innerText = `Hi,${userD.firstName}` ;


let cartArr = JSON.parse(localStorage.getItem("product"));

if(cartArr.length == 0){

    let div = document.getElementById("cartDiv");
    div.innerHTML = null;

    let boxx = document.createElement("div");
    boxx.setAttribute("id","boxx");

    let imgBag = document.createElement("img");
    imgBag.src  = 'https://in.sugarcosmetics.com/ic_empty_cart.png';

    let p = document.createElement("p");
    p.setAttribute("id","emptycart");

    p.innerText = "Hey! It's lonely here.Your bag seems to have no company.Why not add some products?";

    let shop = document.createElement("button");
    shop.innerText = "SHOP NOW";
    shop.addEventListener("click",()=>{
        shopNow();
    })

    boxx.append(imgBag,p,shop);
    div.append(boxx);
}

function shopNow(){
    window.location.href = 'makeup.html';
}
// console.log('cartArr:', cartArr[0].price)
let sum = 0;

for(let i = 0 ; i<cartArr.length ; i++){
    sum = sum + Number(cartArr[i].price);
}

sum = sum.toFixed(2);

// console.log('sum:', sum)

document.getElementById("cartTotal").innerText = `Cart Total : Rs. ${sum}`;

document.getElementById("subtotal").innerText = `₹ ${sum}`;

let sipping = 0;

if(sum<500){
    sipping=49;
}

document.getElementById("Shipping").innerText = `₹ ${sipping}`;

let amount = Number(sipping)+Number(sum);

document.getElementById("payable").innerText = `₹ ${amount}`;

// document.getElementById("delInfoBTN1").innerText = `Proceed to Payment (Rs.${amount})`;
// document.getElementById("delInfoBTN2").innerText = `Proceed to Payment (Rs.${amount})`;



let append = ()=>{
    let box = document.getElementById("cartBox");
    cartArr.map(({img,price,title,rating,star,qty})=>{
        let div = document.createElement("div");
        div.setAttribute("id","makeUpDiv");

        let photo = document.createElement("img");
        photo.setAttribute("id","makeupIMG");

        let name = document.createElement("p");
        name.setAttribute("id","nameProd");

        let prc = document.createElement("p");
        prc.setAttribute("id","priceProd");

        let arg = {img,price,title,rating,star,qty};

        let rem = document.createElement("img");
        rem.setAttribute("id","rem")
        rem.src = "https://cdn-icons.flaticon.com/png/128/484/premium/484611.png?token=exp=1654949850~hmac=96b0acb738ed0545c48469d25caf5000"
        rem.addEventListener("click",()=>{
            Delete(arg);
        })
        photo.src = img;
        name.innerText = title;
        prc.innerText = `Rs. ${price}`;

        div.append(photo,name,rem,prc)
        box.append(div)
    })
}
append()

let Delete = (arg)=>{
    console.log(arg)
    cartArr.splice(arg,1);
    console.log('cartArr11:', cartArr)
    localStorage.setItem("product",JSON.stringify(cartArr));
    window.location.reload();

}