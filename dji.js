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

for(let i = 0; i < btns.length; i ++){
    btns[i].addEventListener("click", function(){
        cartContents.push(items[i][0]);

        cartItems.innerHTML = cartContents.join("<br>");
        subT += items[i][1];
        subTotal.innerHTML = "$ " + subT;
        let cartT = (subT * 1.078) + 15;
        let fixedCartT = cartT.toFixed(2);
        cartTotal.innerHTML = "$ " + fixedCartT;
    });
}




// Clear Cart

let check = document.getElementById("checkOut");

function checkOut(){
    cartItems.innerHTML = "Add Items";
    cartContents = [];
    subTotal.innerHTML = "$ 0.00";
    subT = 0;
    cartTotal.innerHTML = "$ 0.00";
}

check.addEventListener("click", function(){
    checkOut();
});



