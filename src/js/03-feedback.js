import throttle from 'lodash.throttle';
import storage from './storage';

const form = document.querySelector('.feedback-form');
unitForm();
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;
  const formData = new FormData(form);
  const userData = {};
  formData.forEach((value, email) => {
    userData[email] = value;
  });
  e.target.reset();
  storage.remove('input_data');
}

form.addEventListener('input', throttle(onInput, 300));

function onInput(e) {
  let saveData = storage.load('input_data');
  saveData = saveData ? saveData : {};
  saveData[e.target.name] = e.target.value;
  storage.save('input_data', saveData);
}

function unitForm() {
  const saveData = storage.load('input_data');
  if (saveData) {
    Object.entries(saveData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
