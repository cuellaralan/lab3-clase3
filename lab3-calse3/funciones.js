function cargar()
{
    var btnsave = document.getElementById("Guardar");
    var btndel = document.getElementById("borrar");
    // boton.onclick = log;
    btnsave.addEventListener("click",GuardaPersona);
    btndel.addEventListener("click",Borrar);
}
window.addEventListener("load",cargar );

function GuardaPersona()
{
    var nom = document.getElementById("nombre");
    var ape = document.getElementById("apellido");
    if(nom.value == "" && ape.value == '')
    {
        alert("error en datos");
    }
    else
    {
        var tabla = document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+nom.value+'</td><td>'+ape.value+'</td><td>'+'<a href="" onclick="Borrar(event)" id="borrar">Borrar</a>'+'</td>';
    }
    
}

function Borrar(evento)
{
    evento.preventDefault();
    console.log(evento.target);
    console.log(evento.target.ParentNode);
    // console.log(evento.target.ParentNode.ParentNode);
    evento.target.parentNode.parentNode.innerHTML = "";
    
    alert("borando...");
    
}
