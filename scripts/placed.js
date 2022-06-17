import navbar from "../components/navbar.js"
document.getElementById("NAVBAR").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("Footer").innerHTML = footer();


let userD = JSON.parse(localStorage.getItem("accDetails"));
console.log('userD:', userD)
if(userD){
    document.getElementById("username").innerText = `Hi,${userD.firstName}` ;
    
}


let cartArr = JSON.parse(localStorage.getItem("product"));

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



let savedAddress = JSON.parse(localStorage.getItem("address"));
console.log('savedAddress:', savedAddress)

// let userD = JSON.parse(localStorage.getItem("accDetails"));

document.getElementById("recName").innerText = userD.firstName+" "+ userD.lastName;
document.getElementById("recmob").innerText =userD.mob;
document.getElementById("recln1").innerText = `${savedAddress.add1},${savedAddress.add2}` ;
document.getElementById("recln2").innerText = `${savedAddress.city},${savedAddress.state},${savedAddress.pin},${savedAddress.country},`;