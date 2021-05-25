let genre=document.getElementById("genre");
let genreerror=document.getElementById("genreerror");
var check=0;
var check1=0;

function showfiles()
{
$('#preview').removeAttr('hidden');
let inputField=document.getElementById("input");
let file=inputField.files;
let fileReader=new FileReader();

fileReader.onload=(event)=>{
    let ImageURL=fileReader.result;
    $("#preview").attr("src",`${ImageURL}`);
};

fileReader.readAsDataURL(file[0]);
 check=1;

};
function showfiles1(){
    $('#preview1').removeAttr('hidden');
    let inputField=document.getElementById("input1");
    let fileReader=new FileReader();
    let file=inputField.files;
    fileReader.onload=(event)=>{
        let ImageURL=fileReader.result;
        $("#preview1").attr("src",`${ImageURL}`);
    };
    fileReader.readAsDataURL(file[0]);
    check1=1;
  
};


function validate()
{
    if(genre.value=="invalid") 
    {
    genreerror.innerHTML="Please Choose a genre";
    genreerror.style.color="red";
    genre.style.border="2px solid rgb(218, 210, 210)"; 
    genre.style.borderRadius="3px";
    alert("Please Choose a Genre");
    return false;
    
    }

    else
    {
    genreerror.innerHTML="";
    return true;
    }
    
    
  
};

function validatex()
{
if(validate() && check=="1" && check1=="1")
{
alert("Successfully added data!");
return true;

}
else
{

return false;
}
};

    

