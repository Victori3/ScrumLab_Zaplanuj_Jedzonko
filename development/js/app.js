//first enrty message and setting user name

var messageBox = document.querySelector('.content');
var inputName = document.querySelector('.form__input');
var userName = '';
var userID = document.querySelector('.user_name');
var form = document.querySelector('.message_form');

//validate user name input

if(localStorage.getItem('savedName') != 'null'){
    window.open('dashboard.html')
}


//setting name and hide message
form.addEventListener('submit', function(event){
    var regex = new RegExp("[a-zA-Z]");
    if(regex.test(inputName.value) && ((inputName.value).length < 10)){
        event.preventDefault();
        userName = inputName.value;
        window.open('dashboard.html')
        localStorage.setItem('savedName', userName);
        userID.innerText = localStorage.savedName;
    }else{
        alert("Wprawdz prawdziwę imię :)");
        return false;
    }
    
})
