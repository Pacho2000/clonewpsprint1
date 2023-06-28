import { setupChatbox } from './sendmessage.js';

document.addEventListener('DOMContentLoaded', async () => {
  await setupChatbox();
});

/*
setTimeout(() => {
    sessionStorage.clear();
    const mensajesEnviados = document.getElementById('soloenviados');
    mensajesEnviados.innerHTML = '';
  }, 3000);
  */