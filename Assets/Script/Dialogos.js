#pragma strict

 var MSN:String=" ";
 var TiempoEspera: int=5;

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
MSN="BIENVENIDO";

yield WaitForSeconds(TiempoEspera);
MSN="A ESTA NUEVA EXPERIENCIA";

yield WaitForSeconds(TiempoEspera);
MSN="MUEVE LA CABEZA";

yield WaitForSeconds(TiempoEspera);
MSN="PARA CUALQUIER LADO";

yield WaitForSeconds(TiempoEspera);
MSN="PUEDES IR A";

yield WaitForSeconds(TiempoEspera);
MSN="LA LUNA";

yield WaitForSeconds(TiempoEspera);
MSN="SI DESEAS";

yield WaitForSeconds(TiempoEspera);
MSN="SOLO ACERCATE";
yield WaitForSeconds(TiempoEspera);
MSN="A LA NAVE";

yield WaitForSeconds(TiempoEspera);
MSN="PARA EMPEZAR";

yield WaitForSeconds(TiempoEspera);
MSN="ESTE VIAJE";

yield WaitForSeconds(TiempoEspera);
MSN="";
}