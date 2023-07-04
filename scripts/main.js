import { printChats, printChats2, printUser } from './printchats.js';


document.addEventListener('DOMContentLoaded', async () => {
  printUser();
  printChats();
  printChats2();

});


/*
setTimeout(() => {
    sessionStorage.clear();
    const mensajesEnviados = document.getElementById('soloenviados');
    mensajesEnviados.innerHTML = '';
  }, 3000);
  */