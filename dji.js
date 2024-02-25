// Night Mode

let nightMode = true;

let night = document.getElementById("noNight");

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

        let darkBorder3 = document.getElementById("cams");
        darkBorder3.style.borderBottom = "5px solid whitesmoke";

        let darkBorders2 = document.querySelectorAll(".lightBorder");
        for(let border of darkBorders2){
            border.classList.remove("lightBorder");
            border.classList.add("darkBorder");
        }

        let darkBorders = document.querySelectorAll("nav li:nth-child(-n+2)");
        for(let border of darkBorders){
            border.style.borderRight = "5px solid whitesmoke";
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

        let lightBorder3 = document.getElementById("cams");
        lightBorder3.style.borderBottom = "5px solid black";

        let lightBorders2 = document.querySelectorAll(".darkBorder");
        for(let border of lightBorders2){
            border.classList.remove("darkBorder");
            border.classList.add("lightBorder");
        }

        let lightBorders = document.querySelectorAll("nav li:nth-child(-n+2)");
        for(let border of lightBorders){
            border.style.borderRight = "5px solid black";
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

// Add Items to Cart

let cartContents = [];

let items = [
            ["DJI FPV", 999],
            ["DJI Mini 3", 469],
            ["DJI Mavic 3 Pro", 2199],
            ["DJI Mini 2", 399],
            ["DJI Osmo Action 4", 299],
            ["DJI Osmo Pocket 3 ", 519],
            ["DJI Osmo Action 3", 199],
            ["DJI Osmo Pocket 2", 279]
        ];

let btns = document.querySelectorAll(".cartBtns");
let cartItems = document.getElementById("cartItems");
let subTotal = document.getElementById("subTotal");
let subT = 0;
let cartTotal = document.getElementById("cartTotal");
let fixedCartT;

for(let i = 0; i < btns.length; i ++){
    btns[i].addEventListener("click", function(){
        cartContents.push(items[i][0]);
        cartItems.innerHTML = cartContents.join("<br>");
        subT += items[i][1];
        subTotal.innerHTML = "$ " + subT;
        let cartT = (subT * 1.078) + 15;
        fixedCartT = cartT.toFixed(2);
        cartTotal.innerHTML = "$ " + fixedCartT;
    });
}




// Clear Cart

let check = document.getElementById("checkOut");
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");
let modalInfo = document.getElementById("modalInfo");


function checkOut(){
    if(cartContents.length == 0){
        alert("Please add items to the cart.")
    }else{
        modalInfo.innerHTML = `Thank You!<br><br>Order Total: $ ${fixedCartT}`;
        modal.style.display = "block";
        overlay.style.display = "block";

        setTimeout(function(){
            modal.style.display = "none";
            overlay.style.display = "none";
            cartItems.innerHTML = "Cart Empty";
            cartContents = [];
            subTotal.innerHTML = "$ 0.00";
            subT = 0;
            cartTotal.innerHTML = "$ 0.00";
        }, 5000);
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
