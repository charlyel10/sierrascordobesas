function loguear()
{

let user=document.getElementById("usuario").value;
let pass=document.getElementById("clave").value;

if(user=="carlos" && pass=="codoacodo") 
{
   window.location="Api.html";
}

else
{
    alert("Datos incorrectos, ingrese los datos nuevamente");
    
    
}

}

