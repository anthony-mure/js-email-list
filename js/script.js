
/*Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.*/

//recupero gli elementi dal dom che mi serviranno

const emailList = document.getElementById('list');


//uso un ciclo for per generare 10 elementi 
//dentro al ciclo effettuo una chiamata ajax con l'apposita API
//pusho gli elementi generati nell'array vuoto
//innietto la variabile con l'array di 10 elementi nell'html

for(let i=0 ; i < 10 ; i++){

  axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {

       const email = resp.data.response;

      emailList.innerHTML += `<li>${email}</li>`;
  });
};
