const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');
const baseUrl = 'https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/'


const validateFormHandler = () =>{
  if(loginForm.reportValidity()){
    submitBtn.removeAttribute('disabled')
  }
  else{
    submitBtn.setAttribute('disabled',true)
  }
}
loginForm.addEventListener('input',validateFormHandler)
//1
// const user = {
//   email: emailInput.value,
//   name: nameInput.value,
//   password: passwordInput.value,
// };

//2
const createUserHandler = (event)=>{
  event.preventDefault();
const user = Object.fromEntries(new FormData(loginForm));
   fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }).then(response=> response.json())
  .then(body=>alert(JSON.stringify(body)))
  .then(loginForm.reset())


    // eslint-disable-next-line no-return-assign
    .catch(() => {errorText.textContent = 'Failed to create user'});
};
loginForm.addEventListener('submit', createUserHandler);