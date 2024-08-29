
const left=document.querySelector(".left");
const right=document.querySelector(".right");
const slider=document.querySelector(".slider");
const images=document.querySelectorAll(".images");
const bottom=document.querySelector(".bottom");

//For each image, on every click slideNumber increased by 1.
//600*1 600*2=1200 600*3=1800 600*4=2400 600*5=3000 600*6=3600
let slideNumber=1;
const length=images.length;



//WORKING WITH BUTTONS
for(let i=0;i<length;i++){
    const btnDiv=document.createElement("div");
    btnDiv.className="button";
    bottom.appendChild(btnDiv);
}

//Writing this at the beginning, will not work.As the button class is added just now
const buttons=document.querySelectorAll(".button");
buttons[0].style.backgroundColor="purple";

const resetBackground=()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor="transparent";
    });
};

buttons.forEach((button, i) =>{
    button.addEventListener("click", ()=>{
        resetBackground();
        slider.style.transform= `translateX(-${i * 600}px)`;
        slideNumber=i + 1;
        button.style.backgroundColor="purple";
    });
});




// WORKING WITH LEFT-RIGHT ARROW 
//NextSlide() fn
const nextSlide=()=>{
    slider.style.transform = `translateX(-${slideNumber * 600}px)`;
    slideNumber++;
}
//Previous Slide
const prevSlide=()=>{
    slider.style.transform = `translateX(-${(slideNumber-2) * 600}px)`;
    slideNumber--;
}
//Go to First Slide fn
const firstSlide=()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber=1;
}
//Go To Last Slide
const lastSlide=()=>{
    slider.style.transform = `translateX(-${(length-1) * 600}px)`;
    slideNumber=length;
}
//For changing the bgColor of buttons while changing images by clicking on arrow
const changeBtnBgColor=()=>{
    resetBackground();
    buttons[slideNumber-1].style.backgroundColor="purple";
}


right.addEventListener("click", ()=>{
    if(slideNumber < length){
        nextSlide();
    }
    else{ //go to the first image
        firstSlide();
    }
    
    changeBtnBgColor();
})


left.addEventListener("click", ()=>{
    if(slideNumber > 1){
        prevSlide();
    }
    else{ //go to the last image
        lastSlide();
    }
    
    changeBtnBgColor();
})


