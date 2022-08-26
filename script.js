
let numberOfButtons = document.querySelectorAll(".gender").length;
let inputName = document.querySelector(".input-name").value;

for(i=0; i<numberOfButtons; i++){

  document.querySelectorAll(".gender")[i].addEventListener("click",function(e){

    let inputName = document.querySelector(".input-name").value;

    let lengthOfInputName = inputName.length;

    let randomNumber = Math.random() * 11;

    randomNumber = Math.floor(randomNumber) + 1;

  let maleOrFemale = this.innerHTML;

  if(maleOrFemale === "Mr" && lengthOfInputName !== 0){

document.querySelector(".cupid").style.display = "none";

document.querySelector("h1").innerHTML = "<em>"+inputName+"'s"+"</em>"+" "+"Soul mate is here!"

document.querySelector("h5").innerHTML = "<em>hello..there, I am your soul mate.I love you so much. This song is my present for you!</em>";

document.querySelector(".greeting").innerHTML = "Hey.."+" ,"+"<em style ='font-size:1.875rem; color:#FBDF07;'>"+"'"+inputName+"'"+"</em>"+" "+"your soul mate is here =>";

    document.querySelector(".soulmate").setAttribute("src","images/female/attress"+randomNumber+".PNG");




speech();
playSong();
setTimeout(myAnimation,10000)

  }else if(maleOrFemale === "Ms" && lengthOfInputName !== 0){

document.querySelector(".cupid").style.display = "none";

document.querySelector("h1").innerHTML = "<em>"+inputName+"'s"+"</em>"+" "+"Soul mate is here!"

document.querySelector("h5").innerHTML = "<em>hello..there, I am your soul mate.I love you so much. This song is my present for you!</em>"

document.querySelector(".greeting").innerHTML = "Hey.."+" ,"+"<em style ='font-size:1.875rem; color:#FBDF07;'>"+"'"+inputName+"'"+"</em>"+" "+"your soul mate is here =>";

    document.querySelector(".soulmate").setAttribute("src","images/male/actor"+randomNumber+".PNG");



talk();
playSong();

setTimeout(myAnimation,10000);

}else{

let warning = document.createElement("p");

warning.innerHTML = "<strong style = 'color:red;'>Please type your name first!</strong>"

  let myInput = document.querySelector(".input-information");
  
  myInput.prepend(warning);
  }


document.querySelector(".input-name").value = "";
});

}



function speech() {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[4];
  msg.voiceURI = "native";
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 0.8;
  msg.text = "hello..there, I am your soul mate. I love you so much. This Song is my present for you."
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function talk(){
  var msg = new SpeechSynthesisUtterance("hello..there,I am your soul mate. I love you so much. This song is my present for you.");

window.speechSynthesis.speak(msg);
}
function playSong(){
  let number = Math.random() * 2;

  number = Math.floor(number) + 1;

  console.log(number);

  let audio = new Audio("audio/song" + number + ".mp3");

  if(number === 2){

    setTimeout(function(){

      audio.play();

    },7000)

  }else{

  audio.play();
  }

}



function myAnimation(){

  let me = document.createElement("h6");

  me.innerHTML = "<p style ='font-family:Alex Brush, cursive; color:#F94892;'>Hi..Sweetheart!</p>"

  document.querySelector(".images-container").appendChild(me).style.animation = "myFancy 5s ease-in-out infinite alternate";

setTimeout(function(){

  me.innerHTML = "<p style ='font-family:Alex Brush, cursive; color:#F94892;'>I hope you love my present</p>"

},20000);

setTimeout(function(){

me.innerHTML = "<p style ='font-family:Alex Brush, cursive; color:#F94892;'>I wanna meet you in pereson</p>"

},40000)

setTimeout(function(){

me.innerHTML = "<p style ='font-family:Alex Brush, cursive; color:#F94892;'>Whatever ethnicity of you are...!</p>"

},60000)

setTimeout(function(){

me.innerHTML = "<p style ='font-family:Alex Brush, cursive; color:#F94892;'>Wherever you live in the world!</p>"

},80000)

setTimeout(function(){

me.innerHTML = "<p style ='font-family:Alex Brush, cursive; color:#F94892;'>No matter at All!</p>"

},100000)

setTimeout(function(){

me.innerHTML = "<p style ='font-family:Alex Brush, cursive; color:#F94892;'>you are my everything</p>"

},120000)

setTimeout(function(){

me.innerHTML = "<p style ='font-family:Alex Brush, cursive; color:#F94892;'>No matter how far it is!</p>"

},140000)

setTimeout(function(){

me.innerHTML = "<p style ='font-family:Alex Brush, cursive; color:#F94892;'>I will come to you..</p>"

},160000)

setTimeout(function(){

me.innerHTML = "<p style ='font-family:Alex Brush, cursive; color:#F94892;'>Thank you..Honey!</p>"

},180000)

setTimeout(function(){

    document.querySelector(".images-container").appendChild(me).style.animation = "";

},190000);

}
