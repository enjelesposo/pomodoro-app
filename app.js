pomodoro = () => {
    const sound = document.querySelector('.ambient-sound');   // audio
    const endBell = document.querySelector('.end-bell');      // audio
    const message = document.querySelector('.message');       // text
    const playImg = document.querySelector('.play-button img');  // image play button

    
    const timeDisplay = document.querySelector('.time-display');    // h3 time display
    
    const playButton = document.querySelector('.play-button');  // play button

    const soundButton = document.querySelectorAll('.sound-button'); // ambient sound buttons
    
    var studyDuration = 60;  // 25 minutes

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

    // change ambient sound
    soundButton.forEach( function(button){
        button.addEventListener('click', function() {
            sound.src = this.getAttribute('data-sound');
            playImg.src = './img/play.svg';
            soundButtons.style.display = 'none'; 
        })
    })

    // show buttons for ambient sounds
    const showButtons = document.querySelector('.show-buttons');
    const soundButtons = document.querySelector('.sound-button-wrapper');
    showButtons.addEventListener('click', function(){
        
        if (soundButtons.style.display == 'none'){
            soundButtons.style.display = 'flex';
        } else{
            soundButtons.style.display = 'none';
        }
    })

    // checks the sound runtime
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
            breakTime();
        }
    }

    // BREAK TIME     !!! I DONT KNOW WHAT TO DO YET !!!
    /*
        const breakTimePopup = document.querySelector('.break-popup');  // POPUP
        const breakTimeButton = document.querySelector('.break-start'); // START button
        const popupMessage = document.querySelector('.break-message');  // POP message
    function breakTime(){
        breakTimePopup.style.display = 'flex'; // makes the pop up visible
    }

    breakTimeButton.addEventListener('click', function(){
        studyDuration = 5;
        message.textContent = 'Time for a short break';
        breakTimePopup.style.display = 'none';
    })
    */

    // ADD A TASK
    const inputField = document.querySelector('.task-input');       // the text input field
    const addTaskButton = document.querySelector('.task-button');   // the add button
    const tasksList = document.querySelector('.tasks-list');        // the ul

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
        // append li to divTask
        divTask.appendChild(task);

        // create a checkbox
        const checkDiv = document.createElement('DIV');     // create a checkbox container
        checkDiv.className = 'check-container';    
        const taskCheckbox = document.createElement('INPUT');
        taskCheckbox.setAttribute('type', 'checkbox');      // change input type to checkbox
        taskCheckbox.className = 'checkbox';
        //append to divTask
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


        // DELETE TASK
        deleteButton.addEventListener('click', function(){
            divTask.remove();
        })

        // CHECKBOX changes opacity and styles text
        taskCheckbox.addEventListener('change', function(){
            if(taskCheckbox.checked){ 
                divTask.style.opacity = 0.7;
                task.style.opacity = 0.6;
                task.style.textDecoration = 'line-through';
            } else {
                task.style.opacity = 'initial';
                task.style.color = '#F3EED9';
                task.style.textDecoration = 'none';
            }
        })

    })
    


}


pomodoro();