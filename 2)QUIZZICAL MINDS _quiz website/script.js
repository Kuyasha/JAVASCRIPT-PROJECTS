
const startBtn=document.querySelector('.start-btn');
const popupInfo=document.querySelector('.popup-info');
const exitBtn=document.querySelector('.exit-btn');
const main=document.querySelector('main');
const continueBtn=document.querySelector('.continue-btn');
const quizSection=document.querySelector('.quiz-section');
const quizBox=document.querySelector('.quiz-box');

startBtn.addEventListener("click", () =>{
    popupInfo.classList.add('active');
    main.classList.add('active');
});

exitBtn.addEventListener("click", () =>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
});

continueBtn.addEventListener("click", () =>{
    quizSection.classList.add('active');
    quizBox.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
});





