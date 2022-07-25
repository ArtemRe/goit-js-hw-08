// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;
  const formData = new FormData(form);
  const userData = {};
  formData.forEach((value, email) => {
    userData[email] = value;
  });
  console.log(userData);
  e.target.reset();
}
form.addEventListener('input', onInput);
userData = {};
function onInput(e) {
  userData[e.target.email] = e.target.value;
  localStorage.setItem('nimber', JSON.stringify(userData));
}
