const btnPari = document.querySelector(".btn-pari");
const btnDispari = document.querySelector(".btn-dispari");


btnPari.addEventListener("click", function(){
  const userNumber = parseInt(prompt("inserisci un numero compreso tra 1 e 5"))
  console.log("Numero da 1 a 5 pari:", userNumber);

  let createNumber = generateRandomNum();
  console.log("numero generato", createNumber)
  if(userNumber < 6){
  const somma = sommaNumeri(userNumber, createNumber);
  console.log("risultato", somma);

  function isPari(){
    return somma % 2 === 0;
  } 
  if(isPari()){
    console.log("Hai vinto")
  }else{
    console.log("hai perso")
  }
  }else{
    alert("inserisci un altro numero");
  }
})

btnDispari.addEventListener("click", function(){
  const userNumber = parseInt(prompt("inserisci un numero compreso tra 1 e 5"))
  console.log("Numero da 1 a 5 pari:", userNumber);

  let createNumber = generateRandomNum();
  console.log("numero generato", createNumber);

  if(userNumber < 6){
  const somma = sommaNumeri(userNumber, createNumber);
  console.log("risultato", somma);

  function isPari(){
    return somma % 2 === 0;
  }
  if(isPari()){
    console.log("Hai perso")
  }else{
    console.log("hai vinto")
  }
  }else{
    alert("inserisci un altro numero");
  }
})

function generateRandomNum() {
  return Math.ceil(Math.random() * 5);
}

function sommaNumeri(a, b){
  return a + b;
}










