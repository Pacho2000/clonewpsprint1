const button = document.getElementById('button2');
const url = "http://localhost:3000/users";



const user = {
  id: "",
  user: '', 
  cel: '',
  password: '',
  url: '',
  status: false,
  description: "Otro estado",
  dateConection: "1/9/2020"
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(url, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el usuario");
  }
};

button.addEventListener('click', async (e) => {
  e.preventDefault();

  // Obtener los valores de 'stop', 'telefono', 'neWpassword' e 'imag' de los inputs
  const stop = document.getElementById('newusername').value;
  const telefono = document.getElementById('telefono').value;
  const neWpassword = document.getElementById('newpassword').value;
  const imag = document.getElementById('Foto').value;

  // Asignar los valores a las propiedades correspondientes del objeto 'user'
  user.user = stop;
  user.cel = telefono;
  user.password = neWpassword;
  user.url = imag;

  try {
    const createdUser = await createUser(user);
    console.log("Usuario creado:", createdUser);

    Swal.fire({
      title: "¡Usuario creado con éxito!",
      text: `Bienvenido: ${user.user}`,
      icon: 'success',
      timer: 3000, // Duración en milisegundos
      timerProgressBar: true,
      showConfirmButton: false
    }).then(() => {
      // Después de que se cierre la notificación, redirecciona a login.html
      window.location.href = 'login.html';
    });
    
  } catch (error) {
    console.error("Error al crear el usuario:", error);
  }
});
  


  