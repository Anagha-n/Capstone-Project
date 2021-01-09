  function cat(){
	  document.getElementById("cat").style.display = "none";
	  document.getElementsByClassName("cat").style.display="flex";
  }
  function how() {
	document.getElementById("how").style.display = "none";
	document.getElementById("good").style.display = "flex";
  }
  const audio = new Audio('./Cat_Meow_2-Cat.mp3');
  document.getElementsById("meow").onclick = () => {
  audio.pause();
      audio.currentTime = 0;
  audio.play();
  }
  document.getElementsById("meo").onclick = () => {
    audio.pause();
        audio.currentTime = 0;
    audio.play();
    }
    document.getElementsById("me").onclick = () => {
      audio.pause();
          audio.currentTime = 0;
      audio.play();
      }
  const dogAudio = new Audio('./Dog Woof.mp3');
  document.getElementById("woof").onclick = () => {
  dogAudio.pause();
      dogAudio.currentTime = 0;
  dogAudio.play();
  }
  const dogAudio = new Audio('./Dog Woof.mp3');
  document.getElementById("woo").onclick = () => {
  dogAudio.pause();
      dogAudio.currentTime = 0;
  dogAudio.play();
  }
  const dogAudio = new Audio('./Dog Woof.mp3');
  document.getElementById("wo").onclick = () => {
  dogAudio.pause();
      dogAudio.currentTime = 0;
  dogAudio.play();
  }
  

var i = 0 ;
var j = 0 ;

var x = "";
var y = "";
var button1=document.getElementById("bats");
button1.onclick=()=>{
  if(i<batsman.length){
    x+=batsman[i++]+"<br>";
  }
  document.getElementById("list1").innerHTML = x ; 
}