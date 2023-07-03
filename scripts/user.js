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

export const filterChatsById = async (id) => {
    try {
      const response = await axios.get("http://localhost:3000/chats");
      const chats = response.data;
  
      let filteredChats;
  
      switch (id) {
        case 0:
          filteredChats = chats.filter((chat) => chat.id >= 0 && chat.id <= 2);
          break;
        case 1:
          filteredChats = chats.filter((chat) => chat.id === 3 || chat.id === 4);
          break;
        default:
          filteredChats = [];
          break;
      }
  
      console.log(filteredChats);
      return filteredChats;
    } catch (error) {
      console.log(error);
      throw new Error("Error al filtrar los chats por ID");
    }
  };
  
