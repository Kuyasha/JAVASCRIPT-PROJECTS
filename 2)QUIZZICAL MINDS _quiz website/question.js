
const quesJSON = [
    {
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'L. Frank Baum',
      options: [
        'Suzanne Collins',
        'James Fenimore Cooper',
        'L. Frank Baum',
        'Donna Leon',
      ],
      question:
        "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
      correctAnswer: 'Atlanta United',
      options: [
        'Atlanta United',
        'Atlanta Impact',
        'Atlanta Bulls',
        'Atlanta Stars',
      ],
      question:
        'Which of these is a soccer team based in Atlanta?',
    },
    {
      correctAnswer: 'A Nanny',
      options: [
        'A Sow',
        'A Lioness',
        'A Hen',
        'A Nanny',
      ],
      question: 'A female goat is known as what?',
    },
    {
      correctAnswer: 'P. L. Travers',
      options: [
        'J. R. R. Tolkien',
        'P. L. Travers',
        'Lewis Carroll',
        'Enid Blyton',
      ],
      question:
        "Which author wrote 'Mary Poppins'?",
    },
];




//Accessing all the elements
const questionElement = document.querySelector(".question");
const optionElement = document.querySelector(".options");
const scoreElement = document.querySelector(".header-score");
const questionTotal=document.querySelector(".question-total");
const nextBtn = document.querySelector('.next-btn');
const quiz_Box=document.querySelector('.quiz-box');
const resultBox=document.querySelector('.result-box');
const scoreText=document.querySelector(".score-text");
const circularProgress=document.querySelector(".circular-progress");
const progressValue=document.querySelector(".progress-value");
const tryAgainBtn=document.querySelector(".tryAgain-btn");
const goHomeBtn=document.querySelector(".goHome-btn");



let score=0;
let index = 0;//(index number of questions in quesJSON array
                        // used to keep the count of questions)
const totalScore=quesJSON.length;



showQuestion();


//Activate next button
nextBtn.addEventListener('click', ()=>{
    scoreElement.textContent = `Score: ${score} / ${totalScore}`;
    nextQuestion();
    nextBtn.classList.remove("active");
});



//SHUFFLING THE OPTIONS
function shuffleOptions(options){
    for(let i=options.length-1;i>=0;i--){
        //j=any random number upto length of the array.
        const j=Math.floor(Math.random()*i+1); //(Math.random() gives any decimal number between 0 and 1)
        [options[i],options[j]]=[options[j],options[i]];
    };
    return options;
}


//SHOW QUESTION
function showQuestion(){
   const {correctAnswer,options,question}=quesJSON[index]; // Destructuring the object
   questionElement.textContent=question; //question=>destructured from quesJSON above 
   scoreElement.textContent=`Score: ${score} / ${totalScore}`;
   questionTotal.textContent=`${index+1} of ${quesJSON.length} Questions`;

   //Now I want to loop over each and every element of the options array and
   //create a button over it    
   const shuffledOptions=shuffleOptions(options);
   //Populating the options div with the buttons
   shuffledOptions.forEach((opt)=>{
       //creating button and appending it to the option div
        const btn=document.createElement("button");
        btn.textContent=opt;
        optionElement.appendChild(btn);
        
        
       //Event handling on the button
        btn.addEventListener("click", ()=>{
            if(opt===correctAnswer){
               score++;
               btn.classList.add('correct');
            }
            else{
                btn.classList.add('incorrect');
            }
           scoreElement.textContent=`Score: ${score} / ${totalScore}`;
           nextBtn.classList.add("active");
        });
   });
}


//NEXT QUESTION
function nextQuestion(){
    index++;
    optionElement.textContent = '';
    if(index>=quesJSON.length){
        showResultBox();
        //questionElement.textContent = 'Quiz Completed!!'; 
    }                       
    else{
      showQuestion();
    }
}




//SHOW RESULT BOX
function showResultBox(){
    quiz_Box.classList.remove("active");
    resultBox.classList.add("active");
    
    scoreText.textContent=`Your Score ${score} out of ${totalScore}`;

    //Score Progress
    let progressStartValue = -1;
    let progressEndValue = (score/totalScore) * 100;
    let speed=20;
    let progress=setInterval(()=>{
        progressStartValue++;

        progressValue.textContent=`${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`;

        if(progressStartValue === progressEndValue)
        {
            clearInterval(progress);
        }
    }, speed);
}




//TRY AGAIN BUTTON
tryAgainBtn.addEventListener("click", () =>{
    quiz_Box.classList.add('active');
    resultBox.classList.remove("active");
    nextBtn.classList.remove("active");

    score=0;
    index=0;
    showQuestion();
    scoreElement.textContent=`Score: ${score} / ${totalScore}`;
});


//GO HOME BUTTON
goHomeBtn.addEventListener("click", () =>{
    quizSection.classList.remove("active");
    resultBox.classList.remove("active");
});



