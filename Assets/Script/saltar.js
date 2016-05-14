
var personaje: GameObject;
function OnTriggerEnter(other : Collider)
{
if (other.gameObject.tag=="Player")
personaje.GetComponent.<Rigidbody>().AddForce(new Vector3 (0,10,0),ForceMode.VelocityChange);
}