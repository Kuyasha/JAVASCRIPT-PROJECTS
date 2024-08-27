
const generateBtn=document.querySelector(".generate-btn");
const qrCode=document.querySelector(".qr-code");
const container=document.querySelector(".container");
const qrInput=document.querySelector(".form input");
const qrImg=document.querySelector(".qr-code img");

generateBtn.addEventListener("click", ()=>{
    let qrValue=qrInput.value;
    if(!qrValue){ return; }
    generateBtn.innerText="Generating QR Code...";
    
   //Getting a QR code of user entered value using the
   //qrserver api(https://goqr.me/api/) and passing the api returned img src to
   // qrImg.
    qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    
    qrImg.addEventListener("load", ()=>{
        qrCode.classList.add("active");
        container.classList.add("active");
        generateBtn.innerText="Generate QR Code"; //reset after qrImg loads
    });
});


qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        qrCode.classList.remove("active");
        container.classList.remove("active");
    }
});