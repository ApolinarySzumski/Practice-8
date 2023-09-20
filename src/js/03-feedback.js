import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const data = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

const handleInput = e => {
  const { email, message } = e.currentTarget.elements;

  data.email = email.value;
  data.message = message.value;
};

const handleStoragePrototype = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  localStorage.getItem(LOCAL_STORAGE_KEY);
};

const handleStorage = throttle(handleStoragePrototype, 500);

const handleSubmit = e => {
  e.preventDefault();
  console.log(data);
  localStorage.clear();
  feedbackForm.reset(); // or e.currentTarget.reset()
};

feedbackForm.addEventListener('input', handleInput);
feedbackForm.addEventListener('input', handleStorage);
feedbackForm.addEventListener('submit', handleSubmit);
