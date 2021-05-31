import { registrBtn, startBtn } from '../change-btns/change-btns';
import { playerArray } from './dataBase';
import { email, firstName, lastName } from './pop-ap-form';

export function ValidateEmail() {
  const mailformat = /^[a-zA-Z0-9]{1,18}[@]{1}[a-zA-Z0-9]{3,9}[.]{1}[a-zA-Z0-9]{1,5}$/;
  if (email.value.match(mailformat)) {
    return true;
  }
  alert('You have entered an invalid email address!');

  return false;
}
export function validateName() {
  const nameFormat = /^(?=.*?[a-zA-Z])[a-zA-Z0-9]{1,30}$/;
  if (firstName.value.match(nameFormat)) {
    return true;
  }
  return alert('You have entered an invalid name!');
}

export function validateLastName() {
  const lastNameFormat = /^(?=.*?[a-zA-Z])[a-zA-Z0-9]{1,30}$/;
  if (lastName.value.match(lastNameFormat)) {
    return true;
  }
  return alert('You have entered an invalid lastName!');
}

export function formValidation() {
  if (validateName() && validateLastName() && ValidateEmail()) {
    playerArray[0] = firstName.value;
    playerArray[1] = lastName.value;
    playerArray[2] = email.value;
    alert('Now you can close this field and start Game');
    startBtn.classList.remove('displayNone');
    registrBtn.classList.add('displayNone');
  }
  return false;
}
