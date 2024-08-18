/*  
CONCEPTS INVOLVED=>
    1)Array.from()
    2)forEach loop
    3)event.target.innerHTML
    4)Substring concept
    5)eval concept
*/


let display=document.getElementById('displayBox');
let buttons=document.querySelectorAll('button'); /*button tag is taken inside
                querySelectorAll; for taking all the btns querySelectorAll is used;
                All the buttons are saved inside Nodelist named buttons */


let buttonsArray=Array.from(buttons); /*All the values of buttons nodelist are
                                      converted into array*/
let val='';


//Now we want to work on each button of buttonsArray                                      
buttonsArray.forEach(btn =>{
    btn.addEventListener('click', (event)=> {
        console.log(event.target.innerHTML); //gives the btn name on clicking at the console
        
        if(event.target.innerHTML == 'DEL'){
            val=val.substring(0, val.length-1);
            display.value=val;
        }
        else if(event.target.innerHTML == 'AC'){
            val='';
            display.value=val;
        }
        else if(event.target.innerHTML == '='){
            val=eval(val); //eval converts string to number or code
            display.value=val;
        }
        else{
           val += event.target.innerHTML;
           display.value = val;
        }
    })
});


