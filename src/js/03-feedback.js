import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const data = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

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

feedbackForm.addEventListener('input', handleStorage);
feedbackForm.addEventListener('submit', handleSubmit);
