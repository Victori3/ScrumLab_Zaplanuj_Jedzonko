//first enrty message and setting user name

var messageBox = document.querySelector('.message');
var inputName = document.querySelector('.form__input');
var userName = '';
var userID = document.querySelector('.user_name');
var form = document.querySelector('.message_form');

//setting name and hide message
form.addEventListener('submit', function(event){
    event.preventDefault();
    userName = inputName.value;
    messageBox.style.display = 'none';
    localStorage.setItem('savedName', userName);
    userID.innerText = localStorage.savedName;
})




