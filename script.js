
var array = [];

function PushToArray(){


const inputs = document.getElementById('inputs');
inputs.classList.add('hide');
const body = document.getElementById('body');
body.classList.remove('hide');
console.log(' push to array called');
var inputQuestion = document.getElementById('inputQuestion').value;
var inputQuestion1 = document.getElementById('inputQuestion1').value;
var inputQuestion2 = document.getElementById('inputQuestion2').value;


array.push([inputQuestion]);
array.push([inputQuestion1]);
array.push([inputQuestion2]);
array.push([inputQuestion3]);


var questionText = "";
var questionText1 = "";
var questionText2 = "";

questionText =  questionText + array[0];
questionText1 =  questionText1 + array[1];
questionText2 =  questionText2 + array[2];

console.log(questionText)

var input = document.getElementById('boxName');
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

