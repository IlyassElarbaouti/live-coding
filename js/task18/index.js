// input:user
// output:undefined
function saveUser(userData) {
  // input : string url
  //output: promise
  const res = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users',{
    method: 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(userData)
    
  }).then(data=>data.json())
  .then(body=>console.log(body))
}

const user ={
  email:'mrfixer59@gmail.com',
  firstName:'Ilyass',
  lastName:'ElArbaouti',
  city:'Kharkiv',
  age:22
}
console.log(JSON.stringify(user));
saveUser(user);