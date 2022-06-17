import navbar from "../components/navbar.js"
document.getElementById("NAVBAR").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("Footer").innerHTML = footer();





let userD = JSON.parse(localStorage.getItem("accDetails"));
console.log('userD:', userD)
if(userD){
    document.getElementById("username").innerText = `Hi,${userD.firstName}` ;
    
}


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

    let append = ()=>{
        let box = document.getElementById("makeupBox");
        makeup_arr.map(({img,price,title,rating,star,qty})=>{
            let div = document.createElement("div");
            div.setAttribute("id","makeUpDiv");

            let arg = {img,price,title,rating,star,qty};
            div.addEventListener("click",()=>{
                addTocart(arg);
            })
            
            let div1 = document.createElement("div");
            div1.setAttribute("id","makeUpDiv1");
            
            let div2 = document.createElement("div");
            div2.setAttribute("id","makeUpDiv2");
            div.addEventListener("mouseover",()=>{
                div2Dis(div2)

            })

            div.addEventListener("mouseout",()=>{
                div2Dis1(div2)

            })

            let hrt = document.createElement("h4");
            hrt.innerText = '🤍';
            let btn = document.createElement("button");
            btn.setAttribute("id","selectShade");
            btn.innerText = "Select Shade";

            let photo = document.createElement("img");
            photo.setAttribute("id","makeupIMG");

            let str = document.createElement("img");
            str.setAttribute("id","strIMG");

            let name = document.createElement("h4");
            name.setAttribute("id","nameProd");

            let prc = document.createElement("p");
            prc.setAttribute("id","priceProd");

            let rat = document.createElement("p");

            let qnty = document.createElement("p");

            div2.append(hrt,btn)

            photo.src = img;
            str.src = star;
            name.innerText = title;
            prc.innerText = `Rs. ${price}`
            rat.innerText = rating;
            qnty.innerText = `(${qty})`;

            div1.append(str,rat,qnty);
            div.append(photo,name,prc,div1,div2);
            box.append(div)
        })

    };
    
    append()
    let div2Dis = (div2)=>{
        div2.style.visibility = "visible"
        div2.style.display = "flex"
    }

    let div2Dis1 = (div2)=>{
        div2.style.visibility = "hidden"
    }


    let cartArr = JSON.parse(localStorage.getItem("product")) || [];

    let addTocart = (arg)=>{
        if(cartArr.includes(arg)){
            alert("already present");
            return;
        }
        console.log(arg)
       cartArr.push(arg);
       localStorage.setItem("product",JSON.stringify(cartArr));
    }
    