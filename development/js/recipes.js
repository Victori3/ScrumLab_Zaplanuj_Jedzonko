
// validate user name

var userID = document.querySelector('.user_name');
if(localStorage.savedName != null){
    userID.innerText = localStorage.savedName;
} else {
    userID.innerText = "Imie"
}


var table = document.querySelector('.table__data');
var allRecipes = JSON.parse(localStorage.getItem('recipes'));

function createRecipe(array){
    array.forEach(function(el){

        var recipeId = el.id;
        var recipeName = el.title
        var recipeAbout = el.description
        var recipeWeek =  el.weekNumber
    
        var tr = document.createElement("tr");
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        
    
        td1.innerText = recipeId;
        td2.innerText = recipeName;
        td3.innerText = recipeAbout;
        td4.innerHTML = '<div class="table__btn"> <button type="button" class="edit_btn"><i class="far fa-edit"></i></i> </button><button type="button" class="remove_btn"><i class="far fa-trash-alt"></i> </button> </div>'
            
        table.appendChild(tr).className = recipeId;
    })
}

createRecipe(allRecipes);

var editBtns = document.querySelectorAll('.edit_btn');
var removeBtns = document.querySelectorAll('.remove_btn');


editBtns.forEach(function(el){
    el.addEventListener('click', function(){
        var indexRecipe = this.closest('tr').className
        window.open('../app/edit_recipe.html')
        localStorage.setItem('currentRecipe', indexRecipe)
    })
})


removeBtns.forEach(function(el){
    el.addEventListener('click', function(){

        var indexRecipe = this.closest('tr').className;

        for(var i = 0; i < allRecipes.length; i++) {
            if(allRecipes[i].id == indexRecipe) {
                allRecipes.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('recipes',JSON.stringify(allRecipes));
        window.location.reload();
    })
})

