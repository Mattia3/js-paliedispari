utenteParola(prompt("Inserisci una parola"));

function utenteParola(splitArray){
  //Scompongo la parola 
  const array = splitArray.split('');
   //Inverto l'array
  const arrayReverse = array.reverse();
  //ricompongo l'array
  const arrayJoin = arrayReverse.join('');
  //verifico SE la parola è palidroma oppure no
  if(arrayJoin === splitArray){
    parolaPalindroma = "la parola è palindroma"
  }else(
    parolaPalindroma = "la parola non è palindroma"
  )
}

console.log(parolaPalindroma)