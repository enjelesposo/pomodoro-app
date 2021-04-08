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

    addTaskButton.addEventListener('click', function(e){
        e.preventDefault();
        
        
    })



}


pomodoro();