// import data from '/logn/login.json' assert {type:"json"};
// console.log(data);
const username= document.getElementById('username')
const password= document.getElementById('password')
const button= document.getElementById('button')


button.addEventListener('click',(e)=>{
    e.preventDefault()
    const data={
        username: username.value,
        password: password.value
    }
    console.log(data);
})
const validarUser = () => {
    const user= userInput.value;
    const password = passwordInput.value;


    getUsr(user,password,urlUsuario);
}
const getUser = (user, password ) =>{
    console.log(user,password);
}