




var imgArray = [];
var array = [];

function PushToArray(){

// brand ??????
    if( document.getElementById('br').value == "yes"){
        console.log('yes')
        document.getElementById('boxName3').classList.remove('hide');
        document.getElementById('brand').classList.remove('hide');
        document.getElementById('boxName3').classList.add('block');
        document.getElementById('brand').classList.add('block');
    }
    if(document.getElementById('br').value == "no"){
        console.log('no');
        document.getElementById('boxName3').classList.add('hide');
        document.getElementById('brand').classList.add('hide');
        document.getElementById('boxName3').classList.remove('block');
        document.getElementById('brand').classList.remove('block');
    }



//pic

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
   


const inputs = document.getElementById('inputs');
inputs.classList.add('hide');
const body = document.getElementById('body');
body.classList.remove('hide');
console.log(' push to array called');
var inputQuestion = document.getElementById('inputQuestion').value;
var inputQuestion1 = document.getElementById('inputQuestion1').value;
var inputQuestion2 = document.getElementById('inputQuestion2').value;
var img = document.getElementById('img').value;
var insta = document.getElementById('insta').value;
var github = document.getElementById('github').value;
var twitter = document.getElementById('twitter').value;

var photo = document.getElementById('image');
var instaLink = document.getElementById('instaLink');
var gitLink = document.getElementById('gitLink');
var twitterLink = document.getElementById('twitterLink');

array.push([inputQuestion]);
array.push([inputQuestion1]);
array.push([inputQuestion2]);


photo.src = img;
instaLink.href = "https://www.instagram.com/" + insta;     
gitLink.href = "https://www.github.com/" + github; 
twitterLink.href = "https://www.twitter.com/" + twitter; 



var questionText = "";
var questionText1 = "";
var questionText2 = "";

questionText =  questionText + array[0];
questionText1 =  questionText1 + array[1];
questionText2 =  questionText2 + array[2];



var input  = document.getElementById('boxName');
var input1 = document.getElementById('boxName1');
var input2 = document.getElementById('boxName2');
var input3 = document.getElementById('boxName3');
var input4 = document.getElementById('boxName4');
var input5 = document.getElementById('footerInput');

input.innerText += questionText;
input4.innerHTML += "Hello, my name is <span style='text-transform:capitalize'>" +  questionText + "</span>.";
input1.innerText += questionText1;
input2.innerText += questionText2;
input3.innerText += questionText;
input5.innerHTML += "<span>&copy;</span> " + questionText + " 2020"
 



}

function red(){
    document.getElementById('mainBody').classList.remove('black');
    document.getElementById('mainBody').classList.remove('blue');
    document.getElementById('mainBody').classList.remove('green');
    document.getElementById('mainBody').classList.add('red');
    document.getElementById('mainNav').classList.remove('black');
    document.getElementById('mainNav').classList.remove('blue');
    document.getElementById('mainNav').classList.remove('green');
    document.getElementById('mainNav').classList.add('red');
    
}
function blue(){
    document.getElementById('mainBody').classList.remove('black');
    document.getElementById('mainBody').classList.remove('red');
    document.getElementById('mainBody').classList.add('blue');
    document.getElementById('mainBody').classList.remove('green');
    document.getElementById('mainNav').classList.remove('black');
    document.getElementById('mainNav').classList.remove('red');
    document.getElementById('mainNav').classList.add('blue');
    document.getElementById('mainNav').classList.remove('green');
}
function green(){
    document.getElementById('mainBody').classList.remove('black');
    document.getElementById('mainBody').classList.remove('blue');
    document.getElementById('mainBody').classList.add('green');
    document.getElementById('mainBody').classList.remove('red');
    document.getElementById('mainNav').classList.remove('black');
    document.getElementById('mainNav').classList.remove('blue');
    document.getElementById('mainNav').classList.add('green');
    document.getElementById('mainNav').classList.remove('red');
}

function black(){

}
function white(){
    
}
function execCommandWithArg(command, arg){
    richTextField.document.execCommand(command, false, arg);
}
function enableEditMode(){
    richTextField.document.designMode = "On";
    }




