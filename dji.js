"use strict";

// Night Mode

let nightMode = true;

let night = document.getElementById("noA");

night.addEventListener("click", function(){
    nightMode === false ? nightMode = true : nightMode = false;
    checkNight(nightMode);
    console.log(nightMode);
});


function checkNight(nightMode){
    if (nightMode === true){
        document.getElementById("logo").src = "Assets/darkLogo.png";

        document.getElementById("hero").src = "Assets/fpv.jpeg";

        document.getElementById("abtImg1").src = "Assets/stockDark.jpeg";

        document.getElementById("abtImg2").src = "Assets/stockDark2.jpeg";

        document.getElementById("contactImg").src = "Assets/stockDark3.webp";

        let darkButtons = document.querySelectorAll(".lightButton");
        for(let button of darkButtons){
            button.classList.remove("lightButton");
            button.classList.add("darkButton");
        }

        
        night.innerHTML = `<svg id="noNight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="noNights darkText w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>`


        let darkBorder3 = document.getElementById("cams");
        darkBorder3.style.borderBottom = "5px solid whitesmoke";

        let darkBorders2 = document.querySelectorAll(".lightBorder");
        for(let border of darkBorders2){
            border.classList.remove("lightBorder");
            border.classList.add("darkBorder");
        }

        let darkBorders = document.querySelectorAll("nav li:nth-child(-n+2)");
        for(let border of darkBorders){
            border.style.borderRight = "2px solid whitesmoke";
        }


        let lightHeads = document.querySelectorAll(".lightHead");
        for (let head of lightHeads) {
            head.classList.remove("lightHead");
            head.classList.add("darkHead");
        }

        let lightMains = document.querySelectorAll(".lightMain");
        for (let head of lightMains) {
            head.classList.remove("lightMain");
            head.classList.add("darkMain");
        }

        let lightTexts = document.querySelectorAll(".lightText");
        for (let head of lightTexts) {
            head.classList.remove("lightText");
            head.classList.add("darkText");
        }
        
    }else{
        document.getElementById("logo").src = "Assets/logo.png";

        document.getElementById("hero").src = "Assets/mini3yt.jpeg";

        document.getElementById("abtImg1").src = "Assets/stock.jpeg";

        document.getElementById("abtImg2").src = "Assets/stock2.jpeg";

        document.getElementById("contactImg").src = "Assets/stock3.jpeg";

        let lightButtons = document.querySelectorAll(".darkButton");
        for(let button of lightButtons){
            button.classList.remove("darkButton");
            button.classList.add("lightButton");
        }

        
        night.innerHTML = `<svg id="noNight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="noNights lightText w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>`
        
      

        let lightBorder3 = document.getElementById("cams");
        lightBorder3.style.borderBottom = "5px solid black";

        let lightBorders2 = document.querySelectorAll(".darkBorder");
        for(let border of lightBorders2){
            border.classList.remove("darkBorder");
            border.classList.add("lightBorder");
        }

        let lightBorders = document.querySelectorAll("nav li:nth-child(-n+2)");
        for(let border of lightBorders){
            border.style.borderRight = "2px solid black";
        }

        let darkHeads = document.querySelectorAll(".darkHead");
        for (let head of darkHeads) {
            head.classList.remove("darkHead");
            head.classList.add("lightHead");
        }

        let darkMains = document.querySelectorAll(".darkMain");
        for (let head of darkMains) {
            head.classList.remove("darkMain");
            head.classList.add("lightMain");
        }

        let darkTexts = document.querySelectorAll(".darkText");
        for (let head of darkTexts) {
            head.classList.remove("darkText");
            head.classList.add("lightText");

        }
    }
}

//Add Items to Cart

let cartContents = [];

let items = [
    {
        name:"DJI FPV",
        price:999,
        id:1,
    },
    {
        name:"DJI Mini 3",
        price:469,
        id:2
    },
    {
        name:"DJI Mavic 3 Pro",
        price:2199,
        id:3
    },
    {
        name:"DJI Mini 2",
        price:399,
        id:4
    },
    {
        name:"DJI Osmo Action 4",
        price:299,
        id:5
    },
    {
        name:"DJI Osmo Pocket 3",
        price:519,
        id:6
    },
    {
        name:"DJI Osmo Action 3",
        price:199,
        id:7
    },
    {
        name:"DJI Osmo Pocket 2",
        price:279,
        id:8
    },
]

let btns = document.querySelectorAll(".cartBtns");
let cartItems = document.getElementById("cartItems");
let subTotal = document.getElementById("subTotal");
let subT = 0;
let cartTotal = document.getElementById("cartTotal");
let fixedCartT;


for(let i = 0; i < btns.length; i ++){
    btns[i].addEventListener("click", function(){
        addToCart(items[i]);
    });
}

function deleteItem(itemID){
    const itemIndex = cartContents.findIndex(item=>item.id===itemID);
    if(itemIndex > -1){
        cartContents.splice(itemIndex, 1);
    }
    renderCart();
}

//when delete button is clicked
//1) filter the cartContents to return only the items that do not have the same name of the one passed in
//2) update the DOM to show the new cart

function addToCart(item){
    cartContents.push(item);
    renderCart();
}

function renderCart(){
    cartItems.innerHTML='';
    subT = 0;
    cartContents.forEach(item=>{
        let cartLi = document.createElement("li");
        cartLi.textContent= item.name;
        const deleteBtn = document.createElement('div');
        deleteBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="deleteButton w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>`;
      
  
        deleteBtn.addEventListener('click', ()=>{
            deleteItem(item.id);
        });

        cartLi.appendChild(deleteBtn);
        cartItems.appendChild(cartLi);
        subT += item.price;
        subTotal.innerHTML = "$ " + subT;
        let cartT = (subT * 1.078) + 15;
        fixedCartT = cartT.toFixed(2);
        cartTotal.innerHTML = "$ " + fixedCartT;
    
    });

    if (cartContents.length === 0) {
        let emptyCartMessage = document.createElement("li");
        emptyCartMessage.textContent = "Cart Empty";
        cartItems.appendChild(emptyCartMessage);
        subTotal.innerHTML = "$ 0.00";
        cartTotal.innerHTML = "$ 0.00";
    }
    
}


// Clear Cart

let check = document.getElementById("checkOut");
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");
let modalInfo = document.getElementById("modalInfo");






function checkOut(){
    if(cartContents.length == 0){
        alert("Please add items to the cart.");
    }else{
        let modalTxt = document.getElementById("modalInfo");
        modalTxt.innerHTML = `Order Total:<br><br>$ ${fixedCartT}`
        modal.style.display = "block";
        overlay.style.display = "block";

        let modalBtn = document.getElementById("modalBtn");
        modalBtn.addEventListener("click", function(){
            modal.style.display = "none";
            overlay.style.display = "none";
            cartItems.innerHTML = "<li>Cart Empty</li>";
            cartContents = [];
            subTotal.innerHTML = "$ 0.00";
            subT = 0;
            cartTotal.innerHTML = "$ 0.00";
        })
    }
}

check.addEventListener("click", function(){
    checkOut();
    
});




// Required Form

let prefPhone = document.getElementById("prefPhone");
let prefEmail = document.getElementById("prefEmail");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let myPhone = document.getElementById("myPhone");
let myEmail = document.getElementById("myEmail");

prefPhone.addEventListener("change", function(){
    if (prefPhone.checked){
        myPhone.setAttribute("required", "true");
        phone.innerHTML = "Phone<span class='required'>*</span>";

        myEmail.removeAttribute("required");
        prefEmail.checked = false;
        email.innerHTML = "Email";
    }else{
        myPhone.removeAttribute("required");
        phone.innerHTML = "Phone";
    }
});


prefEmail.addEventListener("change", function(){
    if (prefEmail.checked){
        myEmail.setAttribute("required", "true");
        email.innerHTML = "Email<span class='required'>*</span>";

        myPhone.removeAttribute("required");
        prefPhone.checked = false;
        phone.innerHTML = "Phone";
    }else{
        myPhone.removeAttribute("required");
        phone.innerHTML = "Email";
    }
});

// Regex Validation

let fNameFormErrors = document.getElementById("fNameFormErrors");
let lNameFormErrors = document.getElementById("lNameFormErrors");
let emailFormErrors = document.getElementById("emailFormErrors");
let phoneFormErrors = document.getElementById("phoneFormErrors");
let messageFormErrors = document.getElementById("messageFormErrors");

let fName = document.getElementById("myFirst");
let fNameError = document.createElement("p");
let fNameValid;

let lName = document.getElementById("myLast");
let lNameError = document.createElement("p");
let lNameValid;

let emailError = document.createElement("p");
let emailValid;

let phoneError = document.createElement("p");
let phoneValid;

let message = document.getElementById("myMessage");
let messageError = document.createElement("p");
let messageValid;

function checkFirstName(errorForm){
    let fNameRe = /^[a-zA-Z]+$/
    if (!fNameRe.test(fName.value)){
        fName.classList.add("error");
        fNameError.classList.remove("hide");
        fNameError.textContent = "First name missing or invalid.";
        errorForm.appendChild(fNameError);
        fNameValid = false;
    }else{
        fNameValid = true;
        fName.classList.remove("error");
        fNameError.classList.add("hide");
        fNameError.textContent = "";
    }
}

function checkLastName(errorForm){
    let lNameRe = /^[a-zA-Z]+$/;
    if (!lNameRe.test(lName.value)){
        lName.classList.add("error");
        lNameError.classList.remove("hide");
        lNameError.textContent = "Last name missing or invalid.";
        errorForm.appendChild(lNameError);
        lNameValid = false;
    }else{
        lNameValid = true;
        lName.classList.remove("error");
        lNameError.classList.add("hide");
        lNameError.textContent = "";
    }
}

function checkPhone(errorForm){
    let phoneRe = /^\d{3}-\d{3}-\d{3,4}$/;
    if (!phoneRe.test(myPhone.value)){
        myPhone.classList.add("error");
        phoneError.classList.remove("hide");
        phoneError.textContent = "Phone number missing or invalid.";
        errorForm.appendChild(phoneError);
        phoneValid = false;
    }else{
        phoneValid = true;
        myPhone.classList.remove("error");
        phoneError.classList.add("hide");
        phoneError.textContent = "";
    }
}

function checkEmail(errorForm){
    let emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    if (!emailRe.test(myEmail.value)){
        myEmail.classList.add("error");
        emailError.classList.remove("hide");
        emailError.textContent = "Email missing or invalid.";
        errorForm.appendChild(emailError);
        emailValid = false;
    }else{
        emailValid = true;
        myEmail.classList.remove("error");
        emailError.classList.add("hide");
        emailError.textContent = "";
    }
}

function checkMessage(errorForm){
    let messageRe = /\w+/;
    if (!messageRe.test(message.value)){
        message.classList.add("error");
        messageError.classList.remove("hide");
        messageError.textContent = "Please enter a message.";
        errorForm.appendChild(messageError);
        messageValid = false;
    }else{
        messageValid = true;
        message.classList.remove("error");
        messageError.classList.add("hide");
        messageError.textContent = "";
    }
}



function checkForm(){
    checkFirstName(fNameFormErrors);
    checkLastName(lNameFormErrors);

    if(myPhone.hasAttribute("required")){
        checkPhone(phoneFormErrors);
    }else{
        phoneValid = true;
    }

    if(myEmail.hasAttribute("required")){
        checkEmail(emailFormErrors);
    }else{
        emailValid = true;
    }

    checkMessage(messageFormErrors);
    
    if(fNameValid == true && lNameValid == true && phoneValid == true && emailValid == true && messageValid == true){
        fNameFormErrors.classList.add("hide");
        fNameFormErrors.innerHTML = "";
        lNameFormErrors.classList.add("hide");
        lNameFormErrors.innerHTML = "";
        phoneFormErrors.classList.add("hide");
        phoneFormErrors.innerHTML = "";
        emailFormErrors.classList.add("hide");
        emailFormErrors.innerHTML = "";
        messageFormErrors.classList.add("hide");
        messageFormErrors.innerHTML = "";
    }else{
        fNameFormErrors.classList.remove("hide");
        lNameFormErrors.classList.remove("hide");
        phoneFormErrors.classList.remove("hide");
        emailFormErrors.classList.remove("hide");
        messageFormErrors.classList.remove("hide");
    }
}



document.getElementById("mySubmit").addEventListener("click", function(event){
    checkForm();

    event.preventDefault();
})

