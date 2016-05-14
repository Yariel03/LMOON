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
  GUI.Label(Rect(210,600,350,300),"Apolo 11 fue la misión espacial que Estados Unidos envió al espacio el 16 de julio de 1969, siendo la primera misión tripulada en llegar a la superficie de la Luna.");
//GUI.Label(Rect(503,299,350,300),"Apolo 11 fue la misión espacial que Estados Unidos envió al espacio el 16 de julio de 1969, siendo la primera misión tripulada en llegar a la superficie de la Luna.");
}}


