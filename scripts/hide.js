export const hideEvents = async () => {

    const chats = document.getElementById('chats');
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('iconPhoto');
    const menuLogin = document.getElementById("menuLogin");
    const photomain = document.getElementById("photomain");

  photomain.addEventListener("click",() => {
    menuLogin.classList.remove("ocultar")
    section1.classList.add('ocultar');
  });
  icon2.addEventListener('click', () => {
    menuLogin.classList.add("ocultar")
    section1.classList.remove('ocultar');
  });

  chats.addEventListener('click', () =>{
    section1.classList.add('ocultar');
    section2.classList.remove('ocultar');
    console.log('hice click');
  });

  //A este evento click toca pintarlo dinámicamente en la 2da sección
  icon1.addEventListener('click', () => {
    section2.classList.add('ocultar');
    section1.classList.remove('ocultar');
  });

  window.addEventListener('resize', () =>{
    if (window.innerWidth >= 768) {
      section2.classList.remove('ocultar');
      icon1.classList.add('ocultar');
    } else {
      section2.classList.add('ocultar');
      icon1.classList.remove('ocultar');
    }
    console.log(window.innerWidth);
  });

  document.addEventListener('keyup', e => {
    if (e.target.matches('#searchInput')) {
        const searchTerm = e.target.value.toLowerCase();

        document.querySelectorAll('.chats__item').forEach(chatItem => {
            const chatName = chatItem.querySelector('.chat__name').textContent.toLowerCase();

                if (chatName.includes(searchTerm)) {
                    chatItem.classList.remove('ocultar'); // Mostrar el chat y su contenedor
                } else {
                    chatItem.classList.add('ocultar'); // Ocultar el chat y su contenedor
                }
            });
        }
    });  
};




