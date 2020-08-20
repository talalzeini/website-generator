



var array = [];




function PushToArray(){
 
// const inputs = document.getElementById('inputs');
// inputs.classList.add('hide');
// const body = document.getElementById('body');
// body.classList.remove('hide');

var yourName = document.getElementById('yourName').value;
console.log("your first name is " + yourName)
var lastName = document.getElementById('lastName').value;
console.log("your last name is " + lastName)
var jobTitle1 = document.getElementById('jobTitle1').value;
console.log("your first job title is " + yourName)
var jobTitle2 = document.getElementById('jobTitle2').value;
console.log("your second job title is " + yourName)
emailId
var emailInput = document.getElementById('emailInput').value;
console.log("your email is " + emailInput)
var ageInput  = document.getElementById('ageInput').value;
console.log("your age is " + ageInput)
var numberInput = document.getElementById('numberInput').value;
console.log("your phone number is " + numberInput)
var birthInput = document.getElementById('birthInput').value;
console.log("your birth date is " + birthInput)

var fullName = document.getElementById('nameFull');
var job1 = document.getElementById('job1');
var job2 = document.getElementById('job2');
var navBrand = document.getElementById('navBrand');
var typeWriter = document.getElementById('boxName4');
var footerInput = document.getElementById('footerInput');
var emailId = document.getElementById('emailId');
var ageId = document.getElementById('ageId');
var numberId = document.getElementById('numberId');
var birthId = document.getElementById('birthId');


fullName.innerText = yourName + " " + lastName;
typeWriter.innerHTML += "Hello, my name is <span style='text-transform:capitalize'>" +  yourName + " " + lastName + "</span>.";
job1.innerText += jobTitle1;
job2 .innerText += jobTitle2;
navBrand.innerText = yourName;
footerInput.innerHTML += "<span>&copy;</span> " + yourName + " " + lastName + " 2020"
emailId.innerText = emailInput
ageId.innerText = ageInput
numberId.innerText = numberInput
birthId.innerText = birthInput

// Social media are called here

var insta = document.getElementById('insta').value;
var github = document.getElementById('github').value;
var twitter = document.getElementById('twitter').value;
var linkedin = document.getElementById('facebook').value;


var instaLink = document.getElementById('instaLink');
var gitLink = document.getElementById('gitLink');
var twitterLink = document.getElementById('twitterLink');
var fbLink = document.getElementById('fbLink');

instaLink.href = "https://www.instagram.com/" + insta;     
gitLink.href = "https://www.github.com/" + github; 
twitterLink.href = "https://www.twitter.com/" + twitter; 
fbLink.href="https://www.linkedin.com/in/" + linkedin;







}


function processData(c1){

var c1 = document.getElementById('color').value;
document.body.style.backgroundColor += c1;
document.getElementById('mainNav').style.backgroundColor = document.body.style.backgroundColor

}
    
function download(filename, text) {
       
var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);
      
element.style.display = 'none';
document.body.appendChild(element);
      
element.click();
document.body.removeChild(element);
console.log("download() function is called.")
}
function downloading(){
const eh =  "<!DOCTYPE html><html><head id='head'>" + document.getElementById('head').innerHTML +  "</head><body id='mainBody' class='black'><div id='body'>" + document.getElementById('body').innerHTML + "</div></body></html>";
download("index.html",eh);
console.log("downloading() function is called and index.html available to download.")
window.open("guide.html", '_blank');
document.getElementById('thirdForm').classList.remove("hide");
document.getElementById('secondForm').classList.add("hide");
}

function next(){
    
    // if all empty

if(document.getElementById('yourName').value.trim().length == 0 
|| document.getElementById('lastName').value.trim().length == 0 
|| document.getElementById('jobTitle1').value.trim().length == 0 
|| document.getElementById('jobTitle2').value.trim().length == 0 
|| document.getElementById('ageInput').value.trim().length == 0 
|| document.getElementById('numberInput').value.trim().length == 0 
|| document.getElementById('birthInput').value.trim().length == 0 
|| document.getElementById('emailInput').value.trim().length == 0 
|| document.getElementById("myFile").files[0].name == null
){
    window.alert("You must fill out this form properly in order to proceed.");
    document.getElementById('yourName').classList.add('redPH');
    document.getElementById('lastName').classList.add('redPH');
    document.getElementById('jobTitle1').classList.add('redPH');
    document.getElementById('jobTitle2').classList.add('redPH');
    document.getElementById('birthInput').classList.add('redPH');
    document.getElementById('ageInput').classList.add('redPH');
    document.getElementById('numberInput').classList.add('redPH');
    document.getElementById('emailInput').classList.add('redPH');
    return;
}
var resumeInput = document.getElementById("myFile").files[0].name;

document.getElementById('resume').href = resumeInput
document.getElementById('resume').download = resumeInput;
document.getElementById("firstForm").classList.add("hide")
document.getElementById("secondForm").classList.remove("hide")

}

    
function secondNext(){

    if( document.getElementById('pic').value == "round"){
        document.getElementById('image').classList.add('round');
        document.getElementById('image').classList.remove('square');
    }
    if(document.getElementById('pic').value == "square"){
        document.getElementById('image').classList.remove('round');
        document.getElementById('image').classList.add('square');
    }

    if(document.getElementById('inputURL').value.trim().length == 0
    || document.getElementById('insta').value.trim().length == 0 
    || document.getElementById('twitter').value.trim().length == 0 
    || document.getElementById('github').value.trim().length == 0 
    || document.getElementById('facebook').value.trim().length == 0 
    ){
        window.alert("You must fill out this form properly in order to proceed.");
        document.getElementById('inputURL').classList.add('redPH');
        document.getElementById('insta').classList.add('redPH');
        document.getElementById('twitter').classList.add('redPH');
        document.getElementById('github').classList.add('redPH');
        document.getElementById('facebook').classList.add('redPH');
        return;
    }
    if( document.getElementById('brandOptions').value == "yes"){
        document.getElementById('navBrand').classList.remove('hide');

        document.getElementById('navBrand').classList.add('block');
 
}
if(document.getElementById('brandOptions').value == "no"){
        console.log('no');
        document.getElementById('navBrand').classList.add('hide');

        document.getElementById('navBrand').classList.remove('block');

}

        var inputURL = document.getElementById('inputURL').value;
        document.getElementById('image').src = inputURL;
        downloading();
}



