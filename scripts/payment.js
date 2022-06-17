import navbar from "../components/navbar.js"
document.getElementById("NAVBAR").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("Footer").innerHTML = footer();


document.getElementById("delInfoBTN2").addEventListener("click",function(){
    event.preventDefault();
    
    
        window.location.href = "placed.html";
        
    
});

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


document.getElementById("delInfoBTN2").innerText = `Proceed to Payment (Rs.${amount})`;



//loginDIV

document.getElementById("user").addEventListener("click",()=>{
    loginDis();
})
let loginDis = ()=>{
    let login = document.getElementById("login");
    login.style.display = "block";
}
document.getElementById("cross").addEventListener("click",()=>{
    crossLogin();
})
let crossLogin = ()=>{
    let login = document.getElementById("login");
    login.style.display = "none";
}

document.getElementById("requestOTP").addEventListener("click",()=>{
    
    sendOtp();
})

let otp;
function sendOtp(){
    setTimeout(()=>{
        otp = Math.floor(Math.random() * 900) + 999;
        localStorage.setItem("otp",JSON.stringify(otp));
        alert(otp);
    },3000)
}
document.getElementById("verifyotp").addEventListener("click",()=>{
    verify();
})

function verify(){
    let entered = document.querySelector(".dig4otp").value;
    console.log('entered:',typeof entered)
    let rec_otp = JSON.parse(localStorage.getItem("otp")); 
    rec_otp = String(rec_otp);
    console.log('rec_otp:', rec_otp)
    if(rec_otp!=entered){
        document.getElementById("error").innerText = "Wrong OTP";
    }
    else{
        // let login = document.getElementById("login");
        //  login.style.display = "none";
         
         document.getElementById("input2").innerText = "Welcome!";
         let mob = document.getElementById("mobile").value;
         localStorage.setItem("mobile",mob)
         document.getElementById("phone").innerHTML = `Phone number varified- +91${mob}(try another number)`
         document.querySelector(".stmOTP").innerHTML =`<div id="google">
         <img src="../images/googleBTN.png" alt="">
     </div>`;
     document.getElementById("veriFY").innerHTML = null;
     document.getElementById("accDetails").style.display = "block"
    }

}

document.getElementById("saveNcont").addEventListener("click",()=>{
    accountDetailsSave();
})

let accountDetailsSave = ()=>{
    
    let firstName = document.getElementById("firstName").value;
    console.log('firstName:', firstName)
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("emailAdd").value;
    let mob = localStorage.getItem("mobile");
    console.log('mob:', mob)
    let obj = {firstName,lastName,email,mob};
    console.log('obj:', obj)
    localStorage.setItem("accDetails",JSON.stringify(obj));
    document.getElementById("username").innerText = `Hi,${firstName}` ;
    let login = document.getElementById("login");
    login.style.display = "none";

}
let userD = JSON.parse(localStorage.getItem("accDetails"));
console.log('userD:', userD)
if(userD){
    document.getElementById("username").innerText = `Hi,${userD.firstName}` ;
    
}

// document.getElementById("fullName").innerText = `Full Name- ${userD.firstName } ${userD.lastName} `;
// document.getElementById("phoneNumber").innerText = `Phone Number- ${userD.mob } `
// document.getElementById("userEmail").innerText = `Email- ${userD.email } `;


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