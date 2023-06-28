export const setupChatbox = async () => {
    const sendIcon = document.getElementById('sendIcon');
    const inputField = document.getElementById('icon2');
    const chatbox = document.getElementById('main2');
    const mensajesEnviados = document.getElementById('soloenviados');
    
    // Verifica si hay mensajes guardados en el sessionStorage
    if (sessionStorage.getItem('messages')) {
      // Recupera los mensajes guardados y los muestra en el chatbox
      chatbox.innerHTML = sessionStorage.getItem('messages');
    } else {
      mensajesEnviados.innerHTML = '';
    }
    
    // Función para validar si el mensaje es null o vacío
    const isValidMessage = (message) => {
      return message !== null && message.trim() !== '';
    };
  
    sendIcon.addEventListener('click', async () => {
      let mensaje = inputField.value;
      
      if (isValidMessage(mensaje)) {
        let htmlCode = `
        <article class="main2__article" id="soloenviados">
            <p class="mensajeenviado">${mensaje}</p>
        </article>
        `;
  
        // Agrega el nuevo mensaje al chatbox
        chatbox.innerHTML += htmlCode;
        inputField.value = '';
  
        // Guarda los mensajes en el sessionStorage
        await saveMessagesToSessionStorage(chatbox.innerHTML);
      } 
    });
  
    // Desactiva el botón de enviar si el campo de entrada está vacío o es null
    inputField.addEventListener('input', () => {
      if (isValidMessage(inputField.value)) {
        sendIcon.disabled = false;
      } else {
        sendIcon.disabled = true;
      }
    });
  };
  
  const saveMessagesToSessionStorage = async (messages) => {
    try {
      await new Promise((resolve, reject) => {
        sessionStorage.setItem('messages', messages);
        resolve();
      });
    } catch (error) {
      console.error('Error al guardar los mensajes en el sessionStorage:', error);
    }
  };
  
