function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheMonth = () => {
    let getDaysList = document.querySelector('#days');

    for (let k = 0; k < dezDaysList.length; k += 1) {
      let day = dezDaysList[k];
      let dayItems = document.createElement('li');
  
      if (day === 24 | day === 31) {
        dayItems.className = 'day holiday';
        dayItems.innerHTML = day;
        getDaysList.appendChild(dayItems);
      } else if (day === 4 | day === 11 | day === 18) {
        dayItems.className = 'day friday';
        dayItems.innerHTML = day;
        getDaysList.appendChild(dayItems);
      } else if (day === 25) {
        dayItems.className = 'day holiday friday';
        dayItems.innerHTML = day;
        getDaysList.appendChild(dayItems);
      } else {
        dayItems.innerHTML = day;
        dayItems.className = 'day';
        getDaysList.appendChild(dayItems);
      }
    };
  };
createDaysOfTheMonth();

const createHolidaysBtn = (string) => {
    let buttonContainer = document.querySelector('.buttons-container');
    let holidaysBtn = document.createElement('button');
    
    holidaysBtn.innerHTML = string;
    holidaysBtn.id = 'btn-holiday';
    buttonContainer.appendChild(holidaysBtn);
}

createHolidaysBtn('Feriados');
const holidaysBtn = document.querySelector('#btn-holiday')
const holidays = document.querySelectorAll('.holiday');
holidaysBtn.addEventListener('click', () => {
    for (let k = 0; k < holidays.length; k += 1) {
        if (holidays[k].style.backgroundColor === "cornsilk") {
            holidays[k].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            holidays[k].style.backgroundColor = "cornsilk";
        }
    }
})

const createFridayBtn = (string) => {
    const buttonContainer = document.querySelector('.buttons-container');
    const fridayBtn = document.createElement('button');

    fridayBtn.id = 'btn-friday';
    fridayBtn.innerHTML = string;
    buttonContainer.appendChild(fridayBtn);
}
createFridayBtn('Sexta-Feira');

const fridayBtn = document.querySelector('#btn-friday');
const fridays = document.querySelectorAll('.friday');

fridayBtn.addEventListener('click', () => {
    const fridayDays = [4, 11, 18, 25];
    for (let k = 0; k < fridays.length; k += 1) {
        if (fridays[k].innerHTML !== "it's friday then") {
            fridays[k].innerHTML = "it's friday then";
        } else {
            fridays[k].innerHTML = fridayDays[k];
        }
    }
})

const days = document.querySelector('#days')

days.addEventListener('mouseover', (e) => {
    e.target.style.fontSize = '40px';
    e.target.style.fontWeigth = '300';
})

days.addEventListener('mouseout', (e) => {
    e.target.style.fontSize = '20px';
    e.target.style.fontWeigth = '200';
})

const textEditor = (string) => {
    const task = document.createElement('span');
    const myTasks = document.querySelector('.my-tasks');

    task.innerHTML = string;
    myTasks.appendChild(task);
}

textEditor('I love you');

const colorEditor = (string) => {
    const newTask = document.createElement('div');
    const myTasks = document.querySelector('.my-tasks');

    newTask.className = 'task';
    newTask.style.backgroundColor = string;
    myTasks.appendChild(newTask);
}

colorEditor('red');

const tasks = document.querySelector('.task');
const task = document.getElementsByClassName('task');

tasks.addEventListener('click', (e) => {
    if (e.target.className !== 'task selected') {
        e.target.className = 'task selected';
    } else {
        e.target.className = 'task';
    }
})

days.addEventListener('click', (e) => {
    let selectedTask = document.getElementsByClassName('task selected');
    if (selectedTask.length > 0 && e.target.style.color !== tasks.style.backgroundColor) {
        let color = selectedTask[0].style.backgroundColor;
        e.target.style.color = color;
    } else if (selectedTask.length !== 0 && e.target.style.color === tasks.style.backgroundColor) {
        e.target.style.color = 'rgb(119,119,199)';
    }
})

const btnAdd = document.querySelector('#btn-add');
const inputText = document.querySelector('#task-input');

const listItems = () => {
    let listItems = document.createElement('li');
    let listTask = document.querySelector('#toDo-list');
    listItems.setAttribute('class', 'list-items');
    listTask.appendChild(listItems);
    listItems.innerText = inputText.value;
}

btnAdd.addEventListener('click', (e) => {
    listItems();
})