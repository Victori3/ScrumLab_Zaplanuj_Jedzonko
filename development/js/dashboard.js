//dodaj przepis
var recipe = document.querySelector(".important-info");
var icon = recipe.querySelector(".recipe");
icon.addEventListener("click", function () {
    window.open("../recipes.html");
});

//dodaj plan
var plan = recipe.querySelector(".plan")
plan.addEventListener("click", function () {
    window.open("./app/add_schedule.html");
});



//nr tygodnia
// var weekNr = document.querySelector("caption");
// console.log(weekNr);
// for (var i = 1; i <= 52; i++) {
//     console.log = `Twój plan na ${i} tydzień:`;
// };



//strzałki na dole
var arrowLeft = document.querySelector(".left");
var arrowRight = document.querySelector(".right");
arrowLeft.querySelector("i").addEventListener("click", function () {
    ;
});;
arrowRight.querySelector("i").addEventListener("click", function () {
    ;
});;