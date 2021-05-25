let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let emerror=document.getElementById("emerror");
let pwerror=document.getElementById("pwerror");
function validate()
{   let phreg1=/^([0-9]{3,3}).([0-9]{3,3}).([0-9]{4,4})$/;
    let phreg2=/^([0-9]{3,3})-([0-9]{3,3})-([0-9]{4,4})$/;
    let phreg3=/^([0-9]{3,3}) ([0-9]{3,3}) ([0-9]{4,4})$/;
    let phreg0=/^([0-9]{10,10})$/;
    let emreg=/^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let pwreg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$%^&*]).{7,28}$/;
    if(!((phreg1.test(email.value) || phreg2.test(email.value) || phreg3.test(email.value) || phreg0.test(email.value)) || emreg.test(email.value)) && !pwreg.test(pwd.value))
    {
    emerror.innerHTML="Invalid Email or Phone number";
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
    emerror.innerHTML="Valid Email or Phone number";
    emerror.style.color="green";
    email.style.border="2px solid rgb(218, 210, 210)"; 
    email.style.borderRadius="3px";
    pwerror.innerHTML="Invalid Password";
    pwerror.style.color="red";
    pwd.style.border="2px solid red";
    pwd.style.borderRadius="3px";
    return false;
    }
    else if(!((phreg1.test(email.value) || phreg2.test(email.value) || phreg3.test(email.value) || phreg0.test(email.value)) || emreg.test(email.value)))
    {
    emerror.innerHTML="Invalid Email or Phone number";
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
    emerror.innerHTML="Valid Email or Phone number";
    emerror.style.color="green";
    email.style.border="2px solid green";
    email.style.borderRadius="3px";
    pwerror.innerHTML="Valid Password";
    pwerror.style.color="green";
    pwd.style.border="2px solid green";
    pwd.style.borderRadius="3px";
    if(1)
    {
    return true;
    }
    else
    {
    return false;
    }
    }
}