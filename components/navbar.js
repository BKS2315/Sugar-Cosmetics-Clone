function navbar(){
    return `<div id="navbar">
    <div class="logo">
    <a href="index.html">
    <img id="logo" src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif" alt="">
              
          </a>
    </div>
    <div class="search">
        <input type="text" id="search" placeholder="Try 'Liquid Lipstick'">
        <button id="Sbtn">Search</button>
    </div>
    <div class="user">
        <button id="user">
            <div >
                <img src="https://in.sugarcosmetics.com/desc-images/person.png" alt="">
                
                <p id="username">Login/Register</p>

            </div>
        </button>
        <div class="notch">
            <i class="fa-solid fa-caret-down"></i>
        </div>
    </div >
    <div class="icons">
        <i class="fa-solid fa-heart"></i>
        <a href="cart.html">
        <i class="fa-solid fa-bag-shopping"></i>
        
    </a>
       <img id="discount" src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg" alt="">
    </div>
</div>

<!-- ////// -->

<div id="categories">
    <div id="cat11">
        <div id="subcat11">
        <a href="makeup.html">
        <div>MAKEUP</div>
        
        </a>
            <div id="dropdown">
                <div>LIPS</div>
                <div>FACE</div>
                <div>EYES</div>
            </div>
        </div>
        <div id="subcat21">
            <div>BRUSHES</div>
            <div id="dropdown1">
                <div>FACE BRUSHES</div>
                <div>EYES BRUSHES</div>
            </div>
        </div>
        <div id="subcat31">
            <div>SKINCARE</div>
            <div id="dropdown2">
                <div>MOISTURIZERS</div>
                <div>SUNSCREEN</div>
                <div>SETTING MISTS</div>
                <div>COFFEE CULTURE RANGE</div>
                <div>SHEET MASK COMBO</div>
                <div>CITRUS GOT REAL RANGE</div>
                <div>AQUAHOLIC RANGE</div>
                <div>MASKS</div>

            </div>
        </div>
        <div id="subcat41">
            <div>TRENDING</div>
            <div id="dropdown3">
                <div>SUGAR MERCH STATION</div>
                <div>MAKEUP KITS</div>
                <div>BESTSELLERS</div>
                <div>SUGAR SETS</div>
                

            </div>
        </div>
        <div id="subcat51">
            <div>BLOG</div>
            <div id="dropdown4">
                <div>FEATURED</div>
                <div>MAKEUP</div>
                <div>SKINCARE</div>
            </div>
        </div>
        <div id="subcat61">OFFERS</div>
        <div id="subcat71">STORES</div>
    </div>
    <div id="cat21"></div>
    <div id="login">
    <div id="cross">X</div>
    <div id="loginHead">
          Login/Sign Up
      </div>
      <div id="loginInfo">

      <div id="input">
      <div id="input1">
          <img src="https://in.sugarcosmetics.com/smartphone.svg" alt="">
      </div>
      <div id="input2">
          <p>Login/Sign Up Using Phone</p>
      </div>
  </div>
  <div id="phone">
      <p>+91</p>
      <input type="number" placeholder="Enter 10-digit mobile number" id="mobile">
      <button id="requestOTP">Request OTP</button>
  </div>
  <p class="stmOTP">Enter your phone number to request an OTP</p>
  <hr>

  <div id="veriFY">
  <p class="dig4">Enter the 4 digit OTP received on your phone.</p>
  <input type="text" placeholder="Enter OTP" class="dig4otp">
  <p id="error"></p>
  <br/>
  <button id="verifyotp">Verify OTP</button><br/>
  
  </div>

  <div id="accDetails">
          <p>Or Enter Account Details</p>
          <input type="text" placeholder="First Name" id="firstName">
          <input type="text" placeholder="Last Name" id="lastName"><br>
          <input type="email" placeholder="Email Address" id="emailAdd"><br>
          <button id="saveNcont">Save And Continue</button>
 
     </div>


  <div id="wantf">
  <input type="checkbox" checked>
  <p>Get Important Updates on Whatsapp. Terms and Conditions</p>
          
      </div>
      </div>
      <div class="below">
      <h5>Registering for this site allows you to access your order status and history. Just fill in the
        fields below, and we'll get a new account set up for you in no time. We will only ask you
        for information necessary to make the purchase process faster and easier.</h5>
  </div>
  <div id="tNc">
  <div>
    By Signing up or logging in, you agree to our
  </div>
  <div class="tNc">
     Terms and Conditions.
  </div>
</div>

    </div>
</div`
}

export default navbar;