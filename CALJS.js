let input = document.getElementById('INPUTBOX');
let input1 = document.getElementById('INPUTBOX1');
let buttons = document.querySelectorAll('button');

let string = "";
let string1 = "";
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML=='='){
           try { string = eval(string);}
           catch(err){
            string = "flase input";
           }
            input1.value=string;
            
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
            input1.value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            input.value = string;
            input1.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        


    });
}); 