import navbar from "../components/navbar.js";
document.getElementById("NAVBAR").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("Footer").innerHTML = footer();


let slideimg=["https://d32baadbbpueqt.cloudfront.net/Homepage/e70937db-6780-4e1a-b68b-27c3a5d9a1db.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/ae9f9040-e1f1-4c94-bd8d-c05be3ce5fe2.gif","https://d32baadbbpueqt.cloudfront.net/6a276424-6e25-43a5-b8ae-6b97c479f426.jpg","https://d32baadbbpueqt.cloudfront.net/c847025e-f0bb-435c-8ba6-2f3cd89cb692.jpg","https://d32baadbbpueqt.cloudfront.net/549c6869-246f-4dba-8cde-7a6798f866ec.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg","https://d32baadbbpueqt.cloudfront.net/fc27be93-0882-45d7-aef9-0ad461636eae.jpg"]

function slidingimage()
{
    let i=0

    let slidingshow=document.getElementById("slidingshow")
    let image=document.createElement("img")
    setInterval(function(){
        if(slideimg.length==i)
        {
            i=0
        }
        image.src=slideimg[i]
        slidingshow.append(image)
        i++
    },3000)
}

slidingimage()

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
// console.log('userD:', userD)
document.getElementById("username").innerText = `Hi,${userD.firstName}` ;




let makeup_arr=[
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
    
        "price":"699",
    
        "title":"Matte Attack Transferproof Lipstick",
    
        "rating":4.7,
        
        "star":"https://in.sugarcosmetics.com/star_filled.png",

        "qty":"424"

    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
    
        "price":"499",
    
        "title":"Air Kiss Powder Lipstick",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"53"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
    
        "price":"799",
    
        "title":"Matte As Hell Crayon Lipstick",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"945"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
    
        "price":"999",
    
        "title":"Matte As Hell Crayon Lipstick",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"565"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
    
        "price":"999",
    
        "title":"Ace Of Face Foundation Stick",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"565"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1da9dee5-9c2e-4135-994c-9b7d2ca23e6b.jpg?v=1641915296",
    
        "price":"499",
    
        "title":"Nothing Else Matter Longwear Lipstick",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"188"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/01_5e8187e3-f7a2-40aa-a759-d4bf69769234.jpg?v=1639496327",
    
        "price":"249",
    
        "title":"Nothing Else Matter Longwear Lipstick",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"97"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847",
    
        "price":"499",
    
        "title":"Bling Leader Illuminating Moisturizer",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"143"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg?v=1644325813",
    
        "price":"499",
    
        "title":"Bling Leader Illuminating Moisturizer",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"352"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
    
        "price":"799",
    
        "title":"Contour De Force Face Palette",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"318"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
    
        "price":"1199",
    
        "title":"Blend The Rules Eyeshadow Palette",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"96"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-bronzer-01-taupe-topper-cool-toned-brown-gray-undertone-11020228624467.jpg?v=1619102678",
    
        "price":"399",
    
        "title":"Contour De Force Mini Bronzer",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"73"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706258088019.jpg?v=1619116113",
    
        "price":"999",
    
        "title":"Mettle Satin Lipstick",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"168"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_df1e9403-ae9d-430c-8226-622d21c4743d.jpg?v=1640676422",
    
        "price":"499",
    
        "title":"Arch Arrival Brow Definer",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"167"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
    
        "price":"699",
    
        "title":"Matte Attack Transferproof Lipstick",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"424"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
    
        "price":"499",
    
        "title":"Air Kiss Powder Lipstick",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"53"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
    
        "price":"799",
    
        "title":"Matte As Hell Crayon Lipstick",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"945"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
    
        "price":"999",
    
        "title":"Matte As Hell Crayon Lipstick",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"565"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
    
        "price":"999",
    
        "title":"Ace Of Face Foundation Stick",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"565"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1da9dee5-9c2e-4135-994c-9b7d2ca23e6b.jpg?v=1641915296",
    
        "price":"499",
    
        "title":"Nothing Else Matter Longwear Lipstick",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"188"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/01_5e8187e3-f7a2-40aa-a759-d4bf69769234.jpg?v=1639496327",
    
        "price":"249",
    
        "title":"Nothing Else Matter Longwear Lipstick",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"97"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847",
    
        "price":"499",
    
        "title":"Bling Leader Illuminating Moisturizer",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"143"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg?v=1644325813",
    
        "price":"499",
    
        "title":"Bling Leader Illuminating Moisturizer",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"352"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
    
        "price":"799",
    
        "title":"Contour De Force Face Palette",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"318"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
    
        "price":"1199",
    
        "title":"Blend The Rules Eyeshadow Palette",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"96"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-bronzer-01-taupe-topper-cool-toned-brown-gray-undertone-11020228624467.jpg?v=1619102678",
    
        "price":"399",
    
        "title":"Contour De Force Mini Bronzer",
    
        "rating":4.7,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"73"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706258088019.jpg?v=1619116113",
    
        "price":"999",
    
        "title":"Mettle Satin Lipstick",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"168"
    },
    
    {
        "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_df1e9403-ae9d-430c-8226-622d21c4743d.jpg?v=1640676422",
    
        "price":"499",
    
        "title":"Arch Arrival Brow Definer",
    
        "rating":4.8,

        "star":"https://in.sugarcosmetics.com/star_filled.png",
    
        "qty":"167"
    }
    
    ];

    let appendDATA = ()=>{
        let box = document.getElementById("bestseller");
        makeup_arr.map(({img,price,title,rating,star,qty})=>{
            let div = document.createElement("div");
            div.setAttribute("id","makeUpDiv11");

            let arg = {img,price,title,rating,star,qty};
            
            let div1 = document.createElement("div");
            div1.setAttribute("id","makeUpDiv1");
            
            let div2 = document.createElement("div");
            div2.setAttribute("id","BTNadc");
            
            let btn = document.createElement("button");
            btn.setAttribute("id","add2C");
            btn.innerText = "Add to Cart";
            btn.addEventListener("click",()=>{
                addTocart(arg);
            })

            let photo = document.createElement("img");
            photo.setAttribute("id","makeupIMG");

            let name = document.createElement("h4");
            name.setAttribute("id","nameProd");

            let prc = document.createElement("p");
            prc.setAttribute("id","priceProd");

            div2.append(btn)

            photo.src = img;
            
            name.innerText = title;
            prc.innerText = `Rs. ${price}`
            

            
            div.append(photo,name,prc,div2);
            box.append(div)
        })

    };
    appendDATA();

    document.getElementById("leftScroll").addEventListener("click",function scrollL(){
        document.getElementById('bestseller').scrollLeft -= 300;
    })

    document.getElementById("rightScroll").addEventListener("click",function scrollR(){
        document.getElementById('bestseller').scrollLeft += 300;
    })


    let addTocart = (arg)=>{
        if(cartArr.includes(arg)){
            alert("already present");
            return;
        }
        console.log(arg)
       cartArr.push(arg);
       localStorage.setItem("product",JSON.stringify(cartArr));
    }

    let slideimg1=["https://d32baadbbpueqt.cloudfront.net/Homepage/11b811a4-2faa-4985-98f0-01af9f2df943.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/fb9d5eba-b79a-4e38-b01d-fb6cab221874.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/2cf0052d-e531-4f6e-9b00-e31f3642f0b3.jpg"
   ]

function slidingimage1()
{
    let i=0

    let slidingshow=document.getElementById("slidingshow1")
    let image=document.createElement("img")
    setInterval(function(){
        if(slideimg1.length==i)
        {
            i=0
        }
        image.src=slideimg1[i]
        slidingshow.append(image)
        i++
    },3000)
}

slidingimage1()

document.getElementById("lef1").addEventListener("click",function scrollL(){
    document.getElementById('hotdeals').scrollLeft -= 300;
})

document.getElementById("lef2").addEventListener("click",function scrollR(){
    document.getElementById('hotdeals').scrollLeft += 300;
})
    

let slideimg2=["https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/a9cd0d51-c6e6-4d0c-a75c-94ddcc3c1b08.jpg"
   
   ]

function slidingimage2()
{
    let i=0

    let slidingshow=document.getElementById("slidingshow2")
    let image=document.createElement("img")
    setInterval(function(){
        if(slideimg2.length==i)
        {
            i=0
        }
        image.src=slideimg2[i]
        slidingshow.append(image)
        i++
    },3000)
}

slidingimage2()

document.getElementById("lef11").addEventListener("click",function scrollL(){
    document.getElementById('hotdeals1').scrollLeft -= 300;
})

document.getElementById("lef21").addEventListener("click",function scrollR(){
    document.getElementById('hotdeals1').scrollLeft += 300;
})