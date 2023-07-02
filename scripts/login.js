import { getUser } from './user.js';

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
      
    } else {
      alert("No coinciden");
    }
  } catch (error) {
    alert("Ocurrió un error al obtener los datos del usuario");
  }
});
