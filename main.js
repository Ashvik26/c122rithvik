x=0;
y=0;
screenwidth=0;
screenheight=0;
tonumber=0;
drawapple="";
apple="";
speakdata="";
function preload() {
apple=loadImage("");
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
tonumber=Number(content);
if(Number.isInteger(tonumber)){
document.getElementById("status").innerHTML="started drawing apple";
drawapple="set";
}
else{
document.getElementById("status").innerHTML="speach has not been recognized as a number";
}
}
function setup(){
screenwidth=window.innerWidth;
screenheight=window.innerHeight-150;
canvas=createCanvas(screenwidth,screenheight-150);
canvas.position(0,150);
}
function draw(){
if(drawapple=="set"){
for(i=1;i<tonumber;i++){
x=Math.floor(Math.random()*700); 
y=Math.floor(Math.random()*700);
image(apple,x,y,50,50); 
}
document.getElementById("status").innerHTML=tonumber+"drawn";
speekdata=tonumber+"apples drawn";
speek();
drawapple="";
}
}
function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
