let notCompletedList = document.querySelector('.notCompletedList');
let completedList = document.querySelector('.completedList');
let input = document.getElementById('input');
let button = document.querySelector('button');
let flag=1;
document.addEventListener('click', (event) => {
  if (event.target.classList == 'addBtn') {
    console.log("Clicked");
    console.log("value of f "+flag);
    createTask();
    return;
  }
  if (event.target.tagName == 'LI' && event.target.classList != "complete") {
    event.target.querySelector('.wrong').remove();
        let list = document.createElement('li');
        let right = document.createElement('span');
        list.classList.add('complete');
        list.innerHTML = event.target.innerHTML;
        right.innerHTML = ' '+'Complete';
        right.classList.add('right');
        right.style.color="green";
        completedList.appendChild(list,right);
        list.appendChild(right);
        list.style.cursor="pointer";
        event.target.remove();     
  }
  if (event.target.classList.contains('complete') && event.target.tagName == 'LI') {
    event.target.remove();
  }
  
})

function createTask() {
  if (input.value == '') {
    alert("You must write something!");
  }else{
    let li = document.createElement('li');
    let i=flag;
    console.log("Value of i "+i);
    while(i<flag+1){
        li.classList.add('incomplete'+i);
        i++;
        console.log("Value of i "+i);    
    }
    flag++;
    let span = document.createElement('span');
    li.innerHTML = input.value;
    span.innerHTML = ' '+'Incomplete';
    span.classList.add('wrong');
    span.style.color="red";
    notCompletedList.appendChild(li,span);
    li.appendChild(span);
    input.value = '';
    document.querySelector(".incomplete"+(flag-1)).style.cursor="pointer";
    
  }
  
}

