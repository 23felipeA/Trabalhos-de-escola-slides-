
//primeira div
document.getElementById("Button").onclick = function () {

  nome = document.getElementById("Text").value;
  console.log(nome);
  document.getElementById("myLabel").innerHTML = `Eu vou multiplicar o número por dois. Ok, usúario ` + nome + " ? Digite apenas números.";

  var add1 = document.getElementById ('div-1');
  var remove2 = document.getElementById ('div-2');

    if (!add1.classList.contains("hidden")) {
      add1.classList.add("hidden");
      remove2.classList.remove("hidden");
    } 

};


//segunda div
document.getElementById("myButton").onclick = function () {

  nome = document.getElementById("Text").value;
  console.log(nome);
  vezesdois = document.getElementById("myText").value;
  console.log(vezesdois);
  document.getElementById("myLabel").innerHTML =  nome + ` ,o resultado foi: ` + vezesdois * 2;

};


