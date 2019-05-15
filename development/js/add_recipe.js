var icon_1 = document.querySelector('.square1');
var icon_2 = document.querySelector('.square2');
var list_one = document.querySelector('.rectangle_1');
var list_two = document.querySelector('.rectangle_2');
var ul = document.querySelector("ul");
var ol = document.querySelector("ol");
var instruction = document.querySelector('.first')
var ingridients = document.querySelector('.second')
var button = document.querySelector('.save')


icon_1.addEventListener('click', function () {
    console.log('działa');
    var newLi = document.createElement('li');
    ol.appendChild(newLi).innerText = instruction.value;
    instruction.value = '';

})
icon_2.addEventListener('click', function () {
    console.log('działa')
    var newLi = document.createElement('li')
    ul.appendChild(newLi).innerText = ingridients.value;
    ingridients.value = '';
})

