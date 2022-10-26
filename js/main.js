
const nome = prompt ("inserisci il tuo nome");
const cognome = prompt ("inserisci il tuo cognome");
const colore = prompt ("inserisci il tuo colore preferito");
const htmlName = document.getElementById("name");
htmlName.innerHTML = nome;
const htmlSurname = document.getElementById("surname");
htmlSurname.innerHTML = cognome;
const htmlColor = document.getElementById("color");
htmlColor.innerHTML = (colore);
