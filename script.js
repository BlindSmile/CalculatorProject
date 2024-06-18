let input=document.querySelector("#inputBox");
let buttons=document.querySelectorAll("button");
let string="";

let arr=Array.from(buttons);
arr.forEach(butt=>{
    butt.addEventListener("click",(evt)=>{
        if(evt.target.innerText == '='){
            string=eval(string);
            input.value=string;
        }
        else if(evt.target.innerText== 'AC'){
            string="";
            input.value=string;
        }
        else if(evt.target.innerText=='DEL'){
            string=string.slice(0,string.length-1);
            input.value=string;
        }
        else{
            string+=evt.target.innerText;
            input.value=string;
        }
        
    });
})