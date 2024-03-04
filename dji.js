"use strict";

// Night Mode

let nightMode = true;

// Get night mode element
let night = document.getElementById("noA");

// Add listener to night mode element that toggles dark mode when pressed and calls the checkNight function
night.addEventListener("click", function(){
    nightMode === false ? nightMode = true : nightMode = false;
    checkNight(nightMode);
    console.log(nightMode);
});

// Function that checks whether night mode is true or false
// If true, give all elements the dark properties
function checkNight(nightMode){
    if (nightMode === true){
        // Change logo to white
        document.getElementById("logo").src = "Assets/darkLogo.png";
        // Change hero to dark drone
        document.getElementById("hero").src = "Assets/fpv.jpeg";
        // Change first about image to dark city
        document.getElementById("abtImg1").src = "Assets/stockDark.jpeg";
        // Change second about image to dark city
        document.getElementById("abtImg2").src = "Assets/stockDark2.jpeg";
        // Change form image to dark river
        document.getElementById("contactImg").src = "Assets/stockDark3.webp";

        // Select all buttons and loop through to change to dark styling
        let darkButtons = document.querySelectorAll(".lightButton");
        for(let button of darkButtons){
            button.classList.remove("lightButton");
            button.classList.add("darkButton");
        }

        // Change moon svg to sun
        night.innerHTML = `<svg id="noNight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="noNights darkText w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>`

        // Change bottom border in shop to dark
        let darkBorder3 = document.getElementById("cams");
        darkBorder3.style.borderBottom = "5px solid whitesmoke";

        // Change all light borders to dark by looping
        let darkBorders2 = document.querySelectorAll(".lightBorder");
        for(let border of darkBorders2){
            border.classList.remove("lightBorder");
            border.classList.add("darkBorder");
        }

        // Change all other light borders to dark by looping
        let darkBorders = document.querySelectorAll("nav li:nth-child(-n+2)");
        for(let border of darkBorders){
            border.style.borderRight = "2px solid whitesmoke";
        }

        // Change all light headings to dark by looping
        let lightHeads = document.querySelectorAll(".lightHead");
        for (let head of lightHeads) {
            head.classList.remove("lightHead");
            head.classList.add("darkHead");
        }

        // Change all light main content to dark by looping
        let lightMains = document.querySelectorAll(".lightMain");
        for (let head of lightMains) {
            head.classList.remove("lightMain");
            head.classList.add("darkMain");
        }

        // Change all light text content to dark by looping
        let lightTexts = document.querySelectorAll(".lightText");
        for (let head of lightTexts) {
            head.classList.remove("lightText");
            head.classList.add("darkText");
        }
        
    // If dark mode is false, do the following
    }else{
        // Change logo to black
        document.getElementById("logo").src = "Assets/logo.png";

        // Change hero to lighter drone shot
        document.getElementById("hero").src = "Assets/mini3yt.jpeg";

        // Change first about image to light mountain shot
        document.getElementById("abtImg1").src = "Assets/stock.jpeg";

        // Change second about image to light skyline shot
        document.getElementById("abtImg2").src = "Assets/stock2.jpeg";

        // Change form image to light lake shot
        document.getElementById("contactImg").src = "Assets/stock3.jpeg";

        // Loop through all dark buttons and change to light styling
        let lightButtons = document.querySelectorAll(".darkButton");
        for(let button of lightButtons){
            button.classList.remove("darkButton");
            button.classList.add("lightButton");
        }

        // Change sun to moon for night mode logo
        night.innerHTML = `<svg id="noNight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="noNights lightText w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>`
        
      
        // Change borders to light styling
        let lightBorder3 = document.getElementById("cams");
        lightBorder3.style.borderBottom = "5px solid black";

        // Change other borders to light styling
        let lightBorders2 = document.querySelectorAll(".darkBorder");
        for(let border of lightBorders2){
            border.classList.remove("darkBorder");
            border.classList.add("lightBorder");
        }

        // Change nav borders to light styling
        let lightBorders = document.querySelectorAll("nav li:nth-child(-n+2)");
        for(let border of lightBorders){
            border.style.borderRight = "2px solid black";
        }

        // Change dark heading styling to light by looping
        let darkHeads = document.querySelectorAll(".darkHead");
        for (let head of darkHeads) {
            head.classList.remove("darkHead");
            head.classList.add("lightHead");
        }

        // Change dark main styling to light by looping
        let darkMains = document.querySelectorAll(".darkMain");
        for (let head of darkMains) {
            head.classList.remove("darkMain");
            head.classList.add("lightMain");
        }

        // Change dark text styling to light by looping
        let darkTexts = document.querySelectorAll(".darkText");
        for (let head of darkTexts) {
            head.classList.remove("darkText");
            head.classList.add("lightText");

        }
    }
}

//Add Items to Cart

// Create empty cart array for items to be added to
let cartContents = [];

// Create items array with each product as an object
// Each item has a name, price, and id
let items = [
    {
        name:"DJI FPV",
        price:999,
        id:1
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

// Select all cart buttons
let btns = document.querySelectorAll(".cartBtns");
// Select the cartItems ul
let cartItems = document.getElementById("cartItems");
// Select the subTotal p
let subTotal = document.getElementById("subTotal");
// Set subT to 0
let subT = 0;
// Select cartTotal p
let cartTotal = document.getElementById("cartTotal");
// Initialize the fixedCartT variable
let fixedCartT;

// Loop through each cart button and add an ecent listener that calls addToCart on the item that is clicked
for(let i = 0; i < btns.length; i ++){
    btns[i].addEventListener("click", function(){
        addToCart(items[i]);
    });
}

// deteItem function is passed itemID parameter 
function deleteItem(itemID){
    // itemIndex is set equal to the index of the first item inside the items array that shares the same value as the id passed into the function
    // findIndex with the arrow function loops through each item to find the first item with an id that matches. Then the index of that item within the items array is returned
    const itemIndex = cartContents.findIndex(item=>item.id===itemID);
    // If a match exists, the index is used to delete that item from the cartContents array.
    // If no match is found, findIndex returns -1 and the if statement never executes
    if(itemIndex > -1){
        cartContents.splice(itemIndex, 1);
    }
    // After the match has been removed, the cart is re-rendered. The match will no longer be displayed within the cart.
    renderCart();
}

// addToCart function is passed item parameter
function addToCart(item){
    // item, which is an object from the items array given as a parameter, is pushed into the cartContents array.
    cartContents.push(item);
    // The cart is re-rendered after the item has been added to the array
    renderCart();
}


function renderCart(){
    // cartItems is reset
    cartItems.innerHTML='';
    // subT is reset
    subT = 0;
    // For each item of cart contents:
    cartContents.forEach(item=>{
        // an li is created 
        let cartLi = document.createElement("li");
        // The content of that li is set to the name of the name of the item being looped over
        cartLi.textContent= item.name;
        // A delete button is created for each item as a div
        const deleteBtn = document.createElement('div');
        // The content of the button is set to an svg of a trashcan
        deleteBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="deleteButton w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>`;
      
        // Each delete button is given an event listener that calls the deleteItem function
        deleteBtn.addEventListener('click', ()=>{
            // deleteItem is passed the id of the item being looped over
            deleteItem(item.id);
        });

        // The delete button is added to the li
        cartLi.appendChild(deleteBtn);
        // The li is then added to the cart items ul
        cartItems.appendChild(cartLi);
        // The price of the item being looped over is added to the sub total
        subT += item.price;
        // The subT is added to the page with a "$"
        subTotal.innerHTML = "$ " + subT;
        // cartT is set to subT multiplied by tax plus 15 for shipping
        let cartT = (subT * 1.078) + 15;
        // fixedCartT is set to a formatted version of cartT
        fixedCartT = cartT.toFixed(2);
        // The cartTotal is added to the page with a $
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
let shopModal = document.getElementById("shopModal");
let shopOverlay = document.getElementById("shopOverlay");







function checkOut(){
    if(cartContents.length == 0){
        alert("Please add items to the cart.");
    }else{
        let modalTxt = document.getElementById("shopModalInfo");
        modalTxt.innerHTML = `Order Total:<br><br>$ ${fixedCartT}`
        shopModal.style.display = "block";
        shopOverlay.style.display = "block";

        let shopModalBtn = document.getElementById("shopModalBtn");
        shopModalBtn.addEventListener("click", function(){
            shopModal.style.display = "none";
            shopOverlay.style.display = "none";
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
        email.innerHTML = "Email";
        myEmail.classList.remove("error");
        emailError.classList.add("hide");
        emailError.textContent = "";
        myEmail.value = "";
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
        phone.innerHTML = "Phone";
        
        myPhone.classList.remove("error");
        phoneError.classList.add("hide");
        phoneError.textContent = "";
        myPhone.value = "";
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

let validatedForm;

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
    let phoneRe = /^\d{3}-?\d{3}-?\d{3,4}$/;
    if (!phoneRe.test(myPhone.value)){
        myPhone.classList.add("error");
        phoneError.classList.remove("hide");
        phoneError.textContent = "Phone number missing or invalid. Ex. 123-456-7890";
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

    if(myPhone.hasAttribute("required") || myPhone.value !== ""){
        checkPhone(phoneFormErrors);
    }else{
        phoneValid = true;
        myPhone.classList.remove("error");
        phoneError.classList.add("hide");
        phoneError.textContent = "";
    }

    if(myEmail.hasAttribute("required") || myEmail.value !== ""){
        checkEmail(emailFormErrors);
    }else{
        emailValid = true;
        myEmail.classList.remove("error");
        emailError.classList.add("hide");
        emailError.textContent = "";
    }

    checkMessage(messageFormErrors);
    
    if(fNameValid == true && lNameValid == true && phoneValid == true && emailValid == true && messageValid == true){

        validatedForm = [
            {
                firstName:"",
                lastName:"",
                email:"",
                phone:"",
                message:""
            }
        ];

        validatedForm.firstName = fName.value;
        validatedForm.lastName = lName.value;
        validatedForm.email = myEmail.value;
        validatedForm.phone = myPhone.value;
        validatedForm.message = message.value;

        let formModal = document.getElementById("formModal");
        let formOverlay = document.getElementById("formOverlay");
        let formModalInfo = document.getElementById("formModalInfo");
        let formModalBtn = document.getElementById("formModalBtn");

        if(myEmail.hasAttribute("required")){
            if (myPhone.value == ""){
                formModalInfo.innerHTML = `First Name:<br><strong>${validatedForm.firstName}</strong><br><br>
                                         Last Name:<br><strong>${validatedForm.lastName}</strong><br><br>
                                         Email:<br><strong>${validatedForm.email}</strong><br><br>
                                         Message:<br>${validatedForm.message}`;
            }else{
                formModalInfo.innerHTML = `First Name:<br><strong>${validatedForm.firstName}</strong><br><br>
                                         Last Name:<br><strong>${validatedForm.lastName}</strong><br><br>
                                         Phone:<br><strong>${validatedForm.phone}</strong><br><br>
                                         Email:<br><strong>${validatedForm.email}</strong><br><br>
                                         Message:<br>${validatedForm.message}`;
            }
            
        }else if(myPhone.hasAttribute("required")){
            if (myEmail.value == ""){
                formModalInfo.innerHTML = `First Name:<br><strong>${validatedForm.firstName}</strong><br><br>
                                         Last Name:<br><strong>${validatedForm.lastName}</strong><br><br>
                                         Phone:<br><strong>${validatedForm.phone}</strong><br><br>
                                         Message:<br>${validatedForm.message}`;
            }else{
                formModalInfo.innerHTML = `First Name:<br><strong>${validatedForm.firstName}</strong><br><br>
                                         Last Name:<br><strong>${validatedForm.lastName}</strong><br><br>
                                         Phone:<br><strong>${validatedForm.phone}</strong><br><br>
                                         Email:<br><strong>${validatedForm.email}</strong><br><br>
                                         Message:<br>${validatedForm.message}`;
            }
        }


        formModal.style.display = "block";
        formOverlay.style.display = "block";

        formModalBtn.addEventListener("click", function(){
            formModal.style.display = "none";
            formOverlay.style.display = "none";
            fName.value = "";
            lName.value = "";
            myEmail.value = "";
            myPhone.value = "";
            message.value = "";
        });


        // console.log(validatedForm);
        // for(let i = 0; i < formModalInfo.children.length; i++){
        //     formModalInfo.children[i].classList.remove("error");
        //     formModalInfo.children[i].classList.add("hide");
        // }
        
        
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

