// Night Mode

let nightMode = false;

let night = document.getElementById("noNight");

night.addEventListener("click", function(){
    nightMode === false ? nightMode = true : nightMode = false;
    checkNight(nightMode);
    console.log(nightMode);
});

function checkNight(nightMode){
    if (nightMode === true){
        document.getElementById("hero").src = "Assets/fpv.jpeg";

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

        
    }else{
        document.getElementById("hero").src = "Assets/mini3yt.jpeg";

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
    }
}