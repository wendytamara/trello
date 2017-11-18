window.addEventListener("load", function(){

var lista = document.getElementById("lista");
var inputOne = document.getElementById("inputOne");
var container = document.getElementById("contNewElement");
/*var btn = document.getElementById("btn"); */
var container2 = document.getElementById("contNewElement2");

lista.addEventListener("click", insertForm);
      function insertForm(event){
      inputOne.removeChild(lista);

        var textLista = document.createElement("input");
        var boton = document.createElement("input");
        textLista.value =

      boton.setAttribute("type", "submit");
      boton.setAttribute("value", "Guardar");
      boton.setAttribute("id", "btn");
      boton.classList.add("button");

      container.appendChild(textLista);
      container.appendChild(boton);

textLista.addEventListener("keyup", show);
function show{
  if (textLista.value > 2) {
    var textLista = document.createElement("input");
  }
}

boton.addEventListener("click", insertFormFilaTwo);
    function insertFormFilaTwo(event){

      var textListaFilaTwo = document.createElement("input");
      var botonFilaTwo = document.createElement("input");


      botonFilaTwo.setAttribute("type", "submit");
      botonFilaTwo.setAttribute("value", "Guardar");
      //botonFilaTwo.setAttribute("placeholder", "Guardar");

      container2.appendChild(textListaFilaTwo);
      container2.appendChild(botonFilaTwo);


}
      }








})
