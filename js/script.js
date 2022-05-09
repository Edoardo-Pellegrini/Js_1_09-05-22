

var nome = window.prompt('Scrivi il nome');
var cognome = window.prompt('Scrivi il cognome');
var eta = window.prompt('Scrivi la tua età');
var citta = window.prompt('Scrivi la tua città');
var email = window.prompt('Scrivi la tua email');

document.getElementById('nome').innerHTML = nome;
document.getElementById('cognome').innerHTML = cognome;
document.getElementById('eta').innerHTML = eta;
document.getElementById('citta').innerHTML = citta;
document.getElementById('email').innerHTML = email;

console.log (nome+' '+cognome+' '+eta+' '+citta+' '+'('+email+')');
document.write(nome+' '+cognome+' '+eta+' '+citta+' '+'('+email+')');
window.alert(nome+' '+cognome+' '+eta+' '+citta+' '+'('+email+')')


