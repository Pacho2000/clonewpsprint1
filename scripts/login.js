import { getUser, filterChatsById } from './user.js';

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', async (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  try {
    const data = await getUser(username, password);
    if (data && data.user === username && data.password === password) {
      console.log("Coinciden");

      const id = data.id; // Guardar el parámetro "id" en una variable
      console.log("ID:", id);

      const filteredChats = await filterChatsById(id); // Llamar a la función para filtrar los chats según el ID
      sessionStorage.setItem('user', JSON.stringify(data));
      sessionStorage.setItem('filteredChats', JSON.stringify(filteredChats));
      // Redireccionar a index.html
      window.location.href = 'index.html';
      alert(`Bienvenido de nuevo: ${data.user}`);

    } else {
      alert("No coinciden");
    }
  } catch (error) {
    alert("Ocurrió un error al obtener los datos del usuario");
  }
});

