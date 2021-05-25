let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let repwd=document.getElementById("repwd");
let phone=document.getElementById("phone");
let emerror=document.getElementById("emerror");
let pwerror=document.getElementById("pwerror");
let pwstg=document.getElementById("pwstg");
let pwmatch=document.getElementById("pwmatch");
let phch=document.getElementById("phch");
function strength()
{
if(pwd.value.length<8)
{
    pwstg.innerHTML="Password requires a min. of 8 characters";
    pwstg.style.color="red"; 
    return false;
}
else if(pwd.value.length<=11 && pwd.value.length>=8)
{
    pwstg.innerHTML="Password Strength: Poor";
    pwstg.style.color="red"; 
    return true;
    
}
else if(pwd.value.length<=14)
{
    pwstg.innerHTML="Password Strength: Medium";
    pwstg.style.color="orange";
    return true; 
   
}
else
{
    pwstg.innerHTML="Password Strength: Strong";
    pwstg.style.color="Green";
    return true; 
    
}
}

function match()
{
 if(pwd.value==repwd.value)
   {
    pwmatch.innerHTML="Password and confirm password match";
    pwmatch.style.color="green"; 
    repwd.style.border="2px solid rgb(218, 210, 210)"; 
    repwd.style.borderRadius="3px"; 
    return true;
   }
else
{
    pwmatch.innerHTML="Password and confirm password do not match";
    pwmatch.style.color="red";  
    repwd.style.border="2px solid red"; 
    repwd.style.borderRadius="2px"; 
    return false;
}

}
function phonecheck()
{
let phreg1=/^([0-9]{3,3}).([0-9]{3,3}).([0-9]{4,4})$/;
let phreg2=/^([0-9]{3,3})-([0-9]{3,3})-([0-9]{4,4})$/;
let phreg3=/^([0-9]{3,3}) ([0-9]{3,3}) ([0-9]{4,4})$/;
let phreg0=/^([0-9]{10,10})$/;
if(phreg1.test(phone.value) || phreg2.test(phone.value) || phreg3.test(phone.value) || phreg0.test(phone.value) )
{
    phch.innerHTML="Valid Phone number";
    phch.style.color="green"; 
    phone.style.border="2px solid rgb(218, 210, 210)"; 
    phone.style.borderRadius="3px"; 
    return true;
}
else
{
    phch.innerHTML="Invalid Phone number";
    phch.style.color="red";
    phone.style.border="2px solid red"; 
    phone.style.borderRadius="3px"; 
    return false;
}

}

function validate()
{   
    let emreg=/^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let pwreg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$%^&*]).{7,28}$/;

    if(!emreg.test(email.value) && !pwreg.test(pwd.value))
    {
    emerror.innerHTML="Invalid Username or Email";
    emerror.style.color="red";
    email.style.border="2px solid red";
    email.style.borderRadius="3px";
    pwerror.innerHTML="Invalid Password";
    pwerror.style.color="red";
    pwd.style.border="2px solid red";
    pwd.style.borderRadius="3px";
    return false;
    }
    else if(!pwreg.test(pwd.value))
    {
    emerror.innerHTML="Valid Username or Email";
    emerror.style.color="green";
    email.style.border="2px solid rgb(218, 210, 210)"; 
    email.style.borderRadius="3px";
    pwerror.innerHTML="Invalid Password";
    pwerror.style.color="red";
    pwd.style.border="2px solid red";
    pwd.style.borderRadius="3px";
    return false;
    }
    else if(!emreg.test(email.value))
    {
    emerror.innerHTML="Invalid Username or Email";
    emerror.style.color="red";
    email.style.border="2px solid red";
    email.style.borderRadius="3px";
    pwerror.innerHTML="Valid Password";
    pwerror.style.color="green";
    pwd.style.border="2px solid rgb(218, 210, 210)"; 
    pwd.style.borderRadius="3px";
    return false;
    }
    else 
    {
    emerror.innerHTML="Valid Username or Email";
    emerror.style.color="green";
    pwerror.innerHTML="Valid Password";
    pwerror.style.color="green";
    email.style.border="2px solid rgb(218, 210, 210)"; 
    email.style.borderRadius="3px";
    pwd.style.border="2px solid rgb(218, 210, 210)"; 
    pwd.style.borderRadius="3px";
    return true;
    }
}

    function validatex()
    {
        if(match() && phonecheck() && validate() && strength() )
        {
        return true;
        }
        else
        {
        return false;
        }
    }

