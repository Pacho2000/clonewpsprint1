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

