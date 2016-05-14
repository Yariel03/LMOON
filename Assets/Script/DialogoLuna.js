#pragma strict

 var MSN:String=" ";
 var TiempoEspera: int=4;

 var SKIN : GUISkin;
function Start () {
Mensaje();
}
 
 function OnGUI () {
 GUI.skin=SKIN;
// GUI.Box(Rect(503,299,350,300),MSN);
  GUI.Label(Rect(210,600,350,300),MSN);
}
function Mensaje(){

yield WaitForSeconds(TiempoEspera);
MSN="BIENVENIDO A LA LUNA";

yield WaitForSeconds(TiempoEspera);
MSN="TU MISION ES EXPLORARLA";


yield WaitForSeconds(TiempoEspera);
MSN="Y CONOCER MAS SOBRE ELLA";

yield WaitForSeconds(TiempoEspera);
MSN="";
}