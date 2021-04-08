pomodoro = () => {
    const sound = document.querySelector('.ambient-sound');   // audio
    const endBell = document.querySelector('.end-bell');      // audio
    const message = document.querySelector('.message');       // text
    const playImg = document.querySelector('.play-button img');  // image play button

    // TIME 
    const timeDisplay = document.querySelector('.time-display');    
    // PLAY BUTTON
    const playButton = document.querySelector('.play-button');

    var studyDuration = 10;  // 25 minutes

    // click to play
    playButton.addEventListener('click', function(){
        checkPlaying(sound);
    })

    // check if sound is playing or paused
    const checkPlaying = sound =>{
        if (sound.paused){
            sound.play();
            playImg.src = './img/pause.svg';
        } else {
            sound.pause();
            playImg.src = './img/play.svg';
        }
    }

    // timer duration
    sound.ontimeupdate = () => {
        let currentTime = sound.currentTime;
        let timeLeft = studyDuration - currentTime;
        let seconds = Math.floor(timeLeft % 60);
        let minutes = Math.floor(timeLeft / 60);

        timeDisplay.textContent = `${minutes}:${seconds}`;
        // if time is up do this
        if(currentTime + 1 >= studyDuration){
            sound.pause();
            sound.currentTime = 0;
            playImg.src = './img/play.svg';
            endBell.play();
        }
    }




    // INPUT TASK
    const inputField = document.querySelector('.task-input');
    const addTaskButton = document.querySelector('.task-button');
    const tasksList = document.querySelector('.tasks-list');

    addTaskButton.addEventListener('click', function(e){
        e.preventDefault();
        // Create a div
        const divTask = document.createElement('DIV');
        divTask.className = 'task-wrapper';

        // create an li
        const task = document.createElement('LI');
        task.className = 'task';
        // input text to li
        task.textContent = inputField.value;
        // insert li to divTask
        divTask.appendChild(task);

        // create a checkbox
        const checkDiv = document.createElement('DIV');     // create a checkbox container
        checkDiv.className = 'check-container';    
        const taskCheckbox = document.createElement('INPUT');
        taskCheckbox.setAttribute('type', 'checkbox');      // change input type to checkbox
        taskCheckbox.className = 'checkbox';
        //insert to divTask
        checkDiv.appendChild(taskCheckbox);
        divTask.appendChild(checkDiv);

        // create delete button
        const deleteButton = document.createElement('BUTTON');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        // insert delete button to divTask
        divTask.appendChild(deleteButton);

        // append   divTask to ul
        tasksList.appendChild(divTask);
        //delete task

        deleteButton.addEventListener('click', function(){
            divTask.remove();
        })



        taskCheckbox.addEventListener('changed', function(){
            if(taskCheckbox.checked){
                task.style.color = 'lightgrey';
                task.style.textDecoration = 'line-through';
            } else {
                task.style.color = '#F3EED9';
                task.style.textDecoration = 'none';
            }
        })

    })
    
    


}


pomodoro();