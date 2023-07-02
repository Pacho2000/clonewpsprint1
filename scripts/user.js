const url = "http://localhost:3000/users";

export const getUser = async (user, password) => {
  try {
    const { data } = await axios.get(`${url}?user=${user}&password=${password}`);
    console.log(data);
    return data[0]; // Suponiendo que la respuesta es un array y solo necesitas el primer elemento
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los datos del usuario");
  }
};


/*
export const addUser = async (user) => {
  try {
    const response = await axios.post(url, user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al agregar el usuario");
  }
};

// Ejemplo de uso
const newUser = {
  username: "NuevoUsuario",
  password: "NuevoPassword",
};

try {
  const addedUser = await addUser(newUser);
  console.log("Usuario agregado:", addedUser);
} catch (error) {
  console.log(error.message);
}
*/