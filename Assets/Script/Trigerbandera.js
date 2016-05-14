#pragma strict
var entro : boolean = false;
var SKIN : GUISkin;
function OnTriggerEnter () {
entro=true;
}

function OnTriggerExit () {
entro=false;
}

 function OnGUI () {
GUI.skin=SKIN;
if(entro==true){
  GUI.Label(Rect(210,600,350,300),"Neil Armstrong tiene el honor de ser el primer humano en pisar la Luna.");
//GUI.Label(Rect(503,299,350,300),"Neil Armstrong tiene el honor de ser el primer humano en pisar la Luna.");
}}




