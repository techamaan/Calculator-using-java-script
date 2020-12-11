 function res() 
         { 
             document.getElementById("result").value="" 

             displayval="";
            previousval=0;
             opt='+';    
         } 



var displayval="";
var previousval=0;
var num=0;
var opt='+';
var result;
function calculate(operand)
{
    
    displayval+=operand;
    document.getElementById("result").value=displayval;
}
function operation(operator)
{
    console.log(previousval);
    switch(opt)
    {
        case '+':
            result=parseInt(parseInt(previousval)+parseInt(displayval));
            document.getElementById("result").value=result;
            console.log(result);
            break;
        case '-':
            result=parseInt(parseInt(previousval)-parseInt(displayval));
            document.getElementById("result").value=result;
            console.log(result);
            break;
        case '*':
            result=parseInt(parseInt(previousval)*parseInt(displayval));
            document.getElementById("result").value=result;
            console.log(result);
            break;
        case '/':
            result=parseInt(parseInt(previousval)/parseInt(displayval));
            document.getElementById("result").value=result;
            console.log(result);
            break;
        case '%':
            result=parseInt(parseInt(previousval)%parseInt(displayval));
            document.getElementById("result").value=result;
            console.log(result);    
            break;
        case '=':
            result=document.getElementById("result").value;
            document.getElementById("result").value=result;
            console.log(result);    
            break;
           
    }
    opt=operator;
    previousval=result;
    displayval="";
}