
function taskDone(){

    const label = document.getElementById('label');
    const taskCheckBox = document.getElementById('taskCheckBox');

    if (taskCheckBox.checked == true) {
        label.classList.add('crossedOut')
    }
    else if (taskCheckBox.checked != true) {
        label.classList.remove('crossedOut')
    }
 
    else {
        console.log('hi');
    }

}

function deleteAll(){
    let lsItem = document.getElementById('taskls')
    lsItem.innerHTML = null
}

function addTask() {
    let clickCount = 0;
    const taskls = document.getElementById('taskls');
    const addTask = document.getElementById('addTask');

    const input = document.createElement('input');
    const label = document.createElement('label');
    const button = document.createElement('button');
    const br = document.createElement('br');

    clickCount++;

    input.setAttribute('type','checkbox');
    input.setAttribute('id','input' + clickCount);
    input.setAttribute('onclick','taskDone()')
    taskls.append(input);

    label.innerHTML = addTask.value 
    label.setAttribute('for','taskCheckBox');
    label.setAttribute('id','label' + clickCount)
    taskls.append(label);

    button.innerHTML = 'x'
    button.setAttribute('type','button');
    button.setAttribute('id','button' + clickCount);
    taskls.append(button);

    br.setAttribute('id','br' + clickCount);
    taskls.append(br);

    addTask.value = null;

}
