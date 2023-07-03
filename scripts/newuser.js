
const button = document.getElementById('button2');
const url = "http://localhost:3000/users";


const user = {
    id: 4,
    user: "Elois",
    cel: 21352352,
    password: "12345",
    url: "https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZmlsJTIwZGUlMjBob21icmV8ZW58MHx8MHx8&w=1000&q=80",
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
    try {
      const createdUser = await createUser(user);
      console.log("Usuario creado:", createdUser);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  });
  
