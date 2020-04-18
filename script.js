



var array = [];


function PushToArray(){


if( document.getElementById('brandOptions').value == "yes"){
        document.getElementById('navBrand').classList.remove('hide');
        document.getElementById('brand').classList.remove('hide');
        document.getElementById('navBrand').classList.add('block');
        document.getElementById('brand').classList.add('block');
}
if(document.getElementById('brandOptions').value == "no"){
        console.log('no');
        document.getElementById('navBrand').classList.add('hide');
        document.getElementById('brand').classList.add('hide');
        document.getElementById('navBrand').classList.remove('block');
        document.getElementById('brand').classList.remove('block');
}
if( document.getElementById('pic').value == "round"){
    console.log('yes')
    document.getElementById('image').classList.add('round');
    document.getElementById('image').classList.remove('square');
    
}
if(document.getElementById('pic').value == "square"){
    console.log('no');
    document.getElementById('image').classList.remove('round');
    document.getElementById('image').classList.add('square');
}


console.log("PushToArray() function called.")
   
const inputs = document.getElementById('inputs');
inputs.classList.add('hide');
const body = document.getElementById('body');
body.classList.remove('hide');

var yourName = document.getElementById('yourName').value;
console.log("your name is" + yourName)
var jobTitle1 = document.getElementById('jobTitle1').value;
console.log("your first job title is" + yourName)
var jobTitle2 = document.getElementById('jobTitle2').value;
console.log("your second job title is" + yourName)

var nameFully = document.getElementById('nameFull');
var job1 = document.getElementById('job1');
var job2 = document.getElementById('job2');
var navBrand = document.getElementById('navBrand');
var typeWriter = document.getElementById('boxName4');
var footerInput = document.getElementById('footerInput');

nameFully.innerText += yourName;
typeWriter.innerHTML += "Hello, my name is <span style='text-transform:capitalize'>" +  yourName + "</span>.";
job1.innerText += jobTitle1;
job2 .innerText += jobTitle2;
navBrand.innerText += yourName;
footerInput.innerHTML += "<span>&copy;</span> " + yourName + " 2020"





// Social media are called here

var insta = document.getElementById('insta').value;
var github = document.getElementById('github').value;
var twitter = document.getElementById('twitter').value;
var facebook = document.getElementById('facebook').value;


var instaLink = document.getElementById('instaLink');
var gitLink = document.getElementById('gitLink');
var twitterLink = document.getElementById('twitterLink');
var fbLink = document.getElementById('fbLink');

instaLink.href = "https://www.instagram.com/" + insta;     
gitLink.href = "https://www.github.com/" + github; 
twitterLink.href = "https://www.twitter.com/" + twitter; 
fbLink.href="https://www.facebook.com/" + facebook;

document.getElementById('mainNav').style.backgroundColor =  document.body.style.backgroundColor

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
}
    
// contact
$(document).ready(function(){
$('.submit').click(function(event){
console.log('Clicked button')
        
var name=$('.name').val()
var email =$('.email').val()
var subject =$('.subject').val()
var message =$('.message').val()
var statusElm =$('.status')
statusElm.empty()

if(email.length > 5 && email.includes('@') && email.includes('.')){
    statusElm.append('')
    } else {
    statusElm.append('<div style="color:red; text-align:center;">The email you entered is not valid.<br><br></div>')
    event.preventDefault()
    }



    if(message.length != 0){
    statusElm.append('')
} else {
    statusElm.append('<div style="color:red; text-align:center;">Your message is empty.<br><br></div>')
    event.preventDefault()
    }

})

})
 
// 
function next(){

if(document.getElementById('yourName').value.trim().length == 0 && document.getElementById('jobTitle1').value.trim().length == 0 && document.getElementById('jobTitle2').value.trim().length == 0 ){
    window.alert("You must fill out this form properly in order to proceed.");
    document.getElementById('yourName').classList.add('redPH');
    document.getElementById('jobTitle1').classList.add('redPH');
    document.getElementById('jobTitle2').classList.add('redPH');
    return;
} 
if(!document.getElementById('yourName').value.trim().length == 0 && document.getElementById('jobTitle1').value.trim().length == 0 && document.getElementById('jobTitle2').value.trim().length == 0 ){
    window.alert("You must enter two job titles in order to proceed.");
    document.getElementById('jobTitle1').classList.add('redPH');
    document.getElementById('jobTitle2').classList.add('redPH');
    return;
}  
if(document.getElementById('yourName').value.trim().length == 0 && !document.getElementById('jobTitle1').value.trim().length == 0 && document.getElementById('jobTitle2').value.trim().length == 0 ){
    window.alert("You must enter your name and two job titles in order to proceed.");
    document.getElementById('yourName').classList.add('redPH');
    document.getElementById('jobTitle2').classList.add('redPH');
    return;
}   
if(document.getElementById('yourName').value.trim().length == 0 && document.getElementById('jobTitle1').value.trim().length == 0 && !document.getElementById('jobTitle2').value.trim().length == 0 ){
    window.alert("You must enter your name and two job titles in order to proceed.");
    document.getElementById('yourName').classList.add('redPH');
    document.getElementById('jobTitle1').classList.add('redPH');
    return;
}   
if(document.getElementById('yourName').value.trim().length == 0 && !document.getElementById('jobTitle1').value.trim().length == 0 && !document.getElementById('jobTitle2').value.trim().length == 0 ){
    window.alert("You must enter your name in order to proceed.");
    document.getElementById('yourName').classList.add('redPH');
    return;
}   
if(document.getElementById('yourName').value.trim().length == 0 && document.getElementById('jobTitle1').value.trim().length == 0 && !document.getElementById('jobTitle2').value.trim().length == 0 ){
    window.alert("You must enter two job titles in order to proceed.");
    document.getElementById('jobTitle1').classList.add('redPH');
    return;
}
if(document.getElementById('yourName').value.trim().length == 0 && !document.getElementById('jobTitle1').value.trim().length == 0 && document.getElementById('jobTitle2').value.trim().length == 0 ){
    window.alert("You must enter two job titles in order to proceed.");
    document.getElementById('jobTitle1').classList.add('redPH');
    return;
}
    document.getElementById('first').classList.add('hide')
    document.getElementById('second').classList.remove('hide')
}

    
    