

// validate user name

var userID = document.querySelector('.user_name');
if(localStorage.savedName != null){
    userID.innerText = localStorage.savedName;
} else {
    userID.innerText = "Imie"
}

//create options
var days = document.querySelectorAll('.table_day');
var tableDay = Array.from(days);

var arr = ['zapiekanka z serem i warzywami',2,3,4,5]; // change to local storage

tableDay.forEach(function(el){
    
    for (var i = 0; i < 5; i++){
        var td = document.createElement('td');
        var select = document.createElement('select');
        el.appendChild(td).appendChild(select).className = 'select_btn'

        for (var j = 0; j < arr.length; j++) {
            var option = document.createElement('option');
            select.appendChild(option).innerText = arr[j];
        }
    }
})

// save plan data to local storage
var form = document.querySelector('.schedule_form');
var btn = document.querySelector('.schedule_btn');
var scheduleName = document.querySelector('.schedule_name');
var scheduleAbout = document.querySelector('.schedule_about');
var scheduleWeek = document.querySelector('.schedule_week');

// constructor
function Schedule(id, weekNumber, title, description) {
    this.id = id; // id przepisu
    this.title = title; // nazwa planu
    this.description = description; // opis planu
    this.weekNumber = weekNumber; // numer tygodnia do którego przypisany jest plan
    this.monday = []; // plan na poniedzialek
    this.tuesday = []; // plan na wtorek
    this.wednesday = []; // plan na środę
    this.thursday = []; // plan na czwartek
    this.friday = []; // plan na piątek
    this.saturday = []; // plan na sobotę
    this.sunday = []; // plan na niedzielę	
}

// setting allPlanns after refreshing site
if(localStorage.getItem('schedule') === null){
    var allPlanns = [];
} else {
    var allPlanns = JSON.parse(localStorage.getItem('schedule'));
}



form.addEventListener('submit', function(event){
    event.preventDefault();
    //validate user input
    if(scheduleName.value === ''){
        alert('Wprowadz nazwę planu')
        return false;
    } else if(scheduleAbout.value === ''){
        alert('Wprowadz opis')
        return false;
    } else if(scheduleWeek.value === ''){
        alert('Wybierz tydzień')
        return false;
    }
    
    var newPlan = new Schedule(allPlanns.length + 1, scheduleWeek.value,scheduleName.value, scheduleAbout.value);

    // getting selected options
    var selectedOptionDay = [];       
    days.forEach(function(el){
        var selected = Array.from(el.querySelectorAll('select'));
        var selectedValue = selected.map(function(el){
            return el.value;
        })
        selectedOptionDay.push(selectedValue)
    });

    newPlan.monday = selectedOptionDay[0];
    newPlan.tuesday = selectedOptionDay[1];
    newPlan.wednesday = selectedOptionDay[2];
    newPlan.thursday = selectedOptionDay[3];
    newPlan.friday = selectedOptionDay[4];
    newPlan.saturday = selectedOptionDay[5];
    newPlan.sunday = selectedOptionDay[6];


    allPlanns.push(newPlan)
    localStorage.setItem("schedule", JSON.stringify(allPlanns));
    form.reset();
    alert('Dodałeś przepis :)')
});






