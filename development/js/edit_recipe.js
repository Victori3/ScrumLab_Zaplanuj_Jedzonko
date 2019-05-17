
// validate user name

var userID = document.querySelector('.user_name');
if(localStorage.savedName != null){
    userID.innerText = localStorage.savedName;
} else {
    userID.innerText = "Imie"
}



// create instructions

var manualBtn = document.querySelector('.manual_btn');
var manualList = document.querySelector('.manual__list');
var manualInput = document.querySelector('.manual_input');

manualBtn.addEventListener('click', function(){
    var li = document.createElement("li");
    var btns ='<button type="button" class="edit_btn edit_manual"><i class="far fa-edit"></i></i> </button><button type="button" class="remove_btn remove_manual"><i class="far fa-trash-alt"></i> </button>';

    manualList.appendChild(li).innerHTML = manualInput.value + btns
    manualInput.value = '';
    
    
    var manualEdit = document.querySelectorAll('.edit_manual');
    var manualRemove = document.querySelectorAll('.remove_manual');

    manualEdit.forEach(function(el){
        el.addEventListener('click', function(){
            var editBtn = document.createElement('button');
            manualInput.value = this.parentElement.innerText;
        })
    })
    
    manualRemove.forEach(function(el){
        el.addEventListener('click', function(){
            this.parentElement.parentElement.removeChild(this.parentElement)
        })
    })
})


// create ingredients

var ingredientsBtn = document.querySelector('.ingredients_btn');
var ingredientsList = document.querySelector('.ingredients__list');
var ingredientsInput = document.querySelector('.ingredients_input');

ingredientsBtn.addEventListener('click', function(){
    var li = document.createElement("li");
    var btns ='<button type="button" class="edit_btn edit_ingredients"><i class="far fa-edit"></i></i> </button><button type="button" class="remove_btn remove_ingredients"><i class="far fa-trash-alt"></i> </button>';

    ingredientsList.appendChild(li).innerHTML = ingredientsInput.value + btns;
    ingredientsInput.value = '';

    var ingredientsEdit = document.querySelectorAll('.edit_ingredients');
    var ingredientsRemove = document.querySelectorAll('.remove_ingredients')

    ingredientsEdit.forEach(function(el){
        el.addEventListener('click', function(){
            ingredientsInput.value = this.parentElement.innerText;
            console.log(this.parentElement);
        })
    })
    
    ingredientsRemove.forEach(function(el){
        el.addEventListener('click', function(){
            this.parentElement.parentElement.removeChild(this.parentElement)
        })
    })
})


// save form to loaclstorage

var form = document.querySelector('.recipe_form');
var recipeName = document.querySelector('.name_input');
var recipeAbout = document.querySelector('.about_input');


// which recipe

var currentRecipe = localStorage.getItem('currentRecipe')-1;

// update info
console.log(currentRecipe);

recipeName.value = JSON.parse(localStorage.getItem('recipes'))[currentRecipe].title;
recipeAbout.value = JSON.parse(localStorage.getItem('recipes'))[currentRecipe].description;


// recipe constructor
function Recipe(id, title, description) {
    this.id = id; // id przepisu
    this.title = title; // nazwa przepisu
    this.description = description; // opis przepisu
    this.ingredients = []; // składniki przepisu
    this.instructions = []; // instrukcje przepisu
}

if(localStorage.getItem('recipes') === null){
    var allRecipes = [];
} else {
    var allRecipes = JSON.parse(localStorage.getItem('recipes'));
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    //validate user input
    if(recipeName.value === ''){
        alert('Wprowadz nazwę planu')
        return false;
    } else if(recipeAbout.value === ''){
        alert('Wprowadz opis')
        return false;
    }

    var newRecipe = new Recipe(allRecipes.length + 1, recipeName.value, recipeAbout.value);

    newRecipe.ingredients = [];

    Array.from(manualList.children).forEach(function(el){
        newRecipe.instructions.push(el.innerText)
    })

    Array.from(ingredientsList.children).forEach(function(el){
        newRecipe.ingredients.push(el.innerText)
    })
    

    allRecipes.push(newRecipe)
    localStorage.setItem("recipes", JSON.stringify(allRecipes));
    form.reset();
    alert('Zaktaulizowałeś przepis :)');
    window.location.reload();
});






    


