
import { setupChatbox } from "./sendmessage.js";

let userdinamic = document.getElementById('header')
let chatdinamics = document.getElementById('chats');
let chatdinamics2 = document.getElementById('section2');
const filteredChats = JSON.parse(sessionStorage.getItem('filteredChats'));
const datauser = JSON.parse(sessionStorage.getItem('user'));
console.log("Usuario datos:", datauser);
console.log("Chats filtrados:", filteredChats);


export const printUser = async () => {
  const resp = await datauser;

  if (typeof resp === 'object') {
    userdinamic.innerHTML += `
      <div class="header__main">
        <img class="header__perfil" id="photomain"  src="${resp.url}" alt="fotoPerfil">
        <div class="header__options">
          <button>
            <a href="login.html">
              <ion-icon class="material-icons header__icon" name="exit-outline"><i alt="¿Desea salir de su cuenta?">more_vert</i></ion-icon>
            </a>
          </button>
        </div>
      </div>
    `;
  } else {
    // Manejar el caso cuando no hay un objeto iterable
    console.log('No hay valores para mostrar');
  }
};

export const printChats = async () =>{
  const resp = await filteredChats;
  resp.forEach(chat => {
    chatdinamics.innerHTML += `
    <ul class="chats__list">
      <li class="chats__item chat">
        <img class="chat__photo" src="${chat.img}" alt="Profile">
        <div class="chat__container">
          <div class="chat__info">
            <h2 class="chat__name">${chat.name}</h2>
            <p class="chat__text">${chat.mensaje}</p>
          </div>
          <div class="chat__extra chat__extra--active">
            <div class="chat__time">${chat.dateConection}</div>
            <div class="chat__amount">3</div>
          </div>
        </div>
      </li>
    `;
  });
}


export const printChats2 = async () =>{
  const resp = await filteredChats;
  resp.forEach(chat => {
    chatdinamics2.innerHTML += `
      <header class="header2">
        <ion-icon class="icon" id="icon1" name="arrow-back-outline"></ion-icon>
        <img class="chat__photo" src="${chat.img}" alt="Profile">
        <h2 class="chat__name">${chat.name}</h2>
      </header>
      <main class="main2" id="main2">
        <article class="main2__article">
          <p class="mensajerecibido">${chat.mensaje}</p>
        </article>
        <article class="main2__article" id="soloenviados">
          <p class="mensajeenviado">Hola Vale, bien ¿y tú?</p>
        </article>
    </main>
    <footer class="footer2">

    <input class="footer2__input" id="icon2" type="text" placeholder="Escribe algo">
    <ion-icon class="footer2__icon" id="sendIcon" name="send-outline"></ion-icon>


    </footer>
    `;
  });

  await setupChatbox();
}


