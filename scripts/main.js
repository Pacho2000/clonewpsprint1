import { printChats, printChats2 } from './printchats.js';


document.addEventListener('DOMContentLoaded', async () => {
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