console.log("Eu gosto de pizza");
console.log("Isso foi ótimo");

window.alert("EU gosto muito de pizza");

//Isso é um aviso

/*
Isso
è 
um 
multiplo 
aviso
*/


let PrimeiroNome = "Felipe"; //Textos
let idade = 21; //números
let estudante = true; //booleano

console.log("Hello", PrimeiroNome);
console.log("You are", idade, "years old");
console.log("Enrolled:", estudante);

document.getElementById("p1").innerHTML = "Hello " + PrimeiroNome;
document.getElementById("p2").innerHTML = "You are " + idade + "years old";
document.getElementById("p3").innerHTML = "Enrolled: " + estudante;


let students = 21;

//students = students + 1;
//students = students - 1;
//students = students / 2;
//students = students * 2;
//let extraStudents = students % 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

// console.log(students);


let result = 1 + 2 * (1 + 4);
console.log(result);


let username = window.prompt("What's you name?");
console.log(username);

document.getElementById("myButton").onclick = function(){

  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = `Hello ${username}`;
}