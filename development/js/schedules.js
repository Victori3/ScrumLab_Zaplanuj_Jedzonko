var table = document.querySelector('.table__data');
var allSchedules = JSON.parse(localStorage.getItem('schedule'));

function createSchedule(array){
    array.forEach(function(el){

        var scheduleId = el.id;
        var scheduleName = el.title
        var scheduleAbout = el.description
        var scheduleWeek =  el.weekNumber
    
        var tr = document.createElement("tr");
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        var td5 = tr.appendChild(document.createElement('td'));
        
    
        td1.innerText = scheduleId;
        td2.innerText = scheduleName;
        td3.innerText = scheduleAbout;
        td4.innerText = scheduleWeek;
        td5.innerHTML = '<div class="table__btn"> <button type="button" class="edit_btn"><i class="far fa-edit"></i></i> </button><button type="button" class="remove_btn"><i class="far fa-trash-alt"></i> </button> </div>'
            
        table.appendChild(tr).className = scheduleId;
    })
}

createSchedule(allSchedules);

var editBtns = document.querySelectorAll('.edit_btn');
var removeBtns = document.querySelectorAll('.remove_btn');

editBtns.forEach(function(el){
    el.addEventListener('click', function(){
        window.open('../app/edit_schedule.html')
    })
})


removeBtns.forEach(function(el){
    el.addEventListener('click', function(){

        var indexSchedule = this.closest('tr').className;

        for(var i = 0; i < allSchedules.length; i++) {
            if(allSchedules[i].id == indexSchedule) {
                allSchedules.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('schedule',JSON.stringify(allSchedules));
        window.location.reload();
    })
})

