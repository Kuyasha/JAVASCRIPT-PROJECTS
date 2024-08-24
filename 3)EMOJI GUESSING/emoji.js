
//Step-1=>(Add the emoji details in a object array form)
const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: "😎" },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
    // can add more emoji descriptions here
];


//Step-2
//(Accessing all the necessary elements using DOM manipulation)
const guessInput = document.querySelector(".guess-input");
const resultElement = document.querySelector(".result");
const scoreElement = document.querySelector(".score");
const timerElement=document.querySelector(".timer");
const emojiImage=document.querySelector(".emoji");
//(Initializing variables)
let index = 0; //this represents current index of emojiDetails object
let score = 0;
let seconds=60;
let timer;




//STEP-3=>(ADDING FUNCTIONS)
//1)Function to display the emoji
function displayEmoji(){
    emojiImage.textContent=emojiDetails[index].emoji;
    timerElement.textContent=`Time: ${seconds}secs`;//if we dont mention it
}                           //here,then timer will start from 59secs


//2)Function to guess the emoji after entering value in the input form
function checkGuess(){
    const guess=guessInput.value.trim().toLowerCase();//the value entered by user at input text box is accessed using guessInput.value
    const correctEmoji=emojiDetails[index].description.trim().toLowerCase();
    if(guess===correctEmoji){
        resultElement.textContent="Correct!";
        resultElement.classList.remove("incorrect");
        resultElement.classList.add("correct");
        score++;
    }
    else{
        resultElement.textContent="Wrong!";
        resultElement.classList.remove("correct");
        resultElement.classList.add("incorrect");
    }
    scoreElement.textContent=`Score : ${score}`;//to show the score on page

    //reset the value of guessInput to empty so that it can take the value
    //of next emoji which is comimg.
    guessInput.value='';
    guessInput.focus(); //it will bring the focus back to input box
    nextEmoji();
}


//3)Function to move on to the next emoji
function nextEmoji(){
    index++;
    
  //to make the result(Right/Wrong) go away after 5 secs 
    setTimeout(()=>{
        resultElement.textContent='';
    },5000);

    if(index===emojiDetails.length){
        index=0;//reset
    }
    displayEmoji();
}


//4)Timer function => [We want to start the timer as soon as the game starts
//and after 60 seconds the timer will be stopped
function startTimer(){
    timer=setInterval(()=>{
        seconds--;
        timerElement.textContent=`Time: ${seconds}secs`;
        if(seconds<=0){
            endGame();
        }
    },1000);
}
function endGame(){
    clearInterval(timer);
    guessInput.disabled=true;
    timerElement.textContent="";
}




//STEP-5=>(ADDING EVENT LISTENERS TO THE FUNCTIONS WHERE NECESSARY)
//1)After entering our guess in the input box,whenever we press enter,
//checkGuess() fn is called
guessInput.addEventListener('keydown',(event)=>{
    if(event.key==="Enter"){
        checkGuess();
    }
});

//2)Whenever the content is loaded,then display the emoji
document.addEventListener('DOMContentLoaded',()=>{
    displayEmoji();
    startTimer();
});




