import { BaseComponent } from '../base-component';
import './pop-ap-form.scss';

export const formP = document.createElement('p');
formP.innerHTML ='<b>Registr new Player</b>';

export const firstName = document.createElement('input');
firstName.classList.add('inp-firstName');
firstName.type = 'text';
firstName.placeholder = 'James'
 firstName.required = true;

 export const labelName = document.createElement('label');
 labelName.innerHTML = '<b>First name</b>';

 export const lastName = document.createElement('input');
 lastName.classList.add('inp-lastName');
 lastName.type = 'text';
 lastName.placeholder = 'Bond'
 lastName.required = true;

 export const labelLastName = document.createElement('label');
 labelLastName.innerHTML = '<b>Last name</b>';

 export const email = document.createElement('input');
 email.classList.add('inp-email');
 email.type = 'email';
 email.placeholder = 'JamesBond007@gmail.com'
 email.required = true;

 export const labelEmail = document.createElement('label');
 labelEmail.innerHTML = '<b>Е-mail</b>';

 export const submitBtn = document.createElement('button');
 submitBtn.classList.add('btn-add');
 submitBtn.type = 'submit';
 submitBtn.innerText = 'ADD User';

 export const cancelBtn = document.createElement('button');
 cancelBtn.classList.add('btn-cancel');
 cancelBtn.type = 'button';
 cancelBtn.innerText = 'Cancel';

 export const formContainer = document.createElement('form');
 cancelBtn.classList.add('form-container');

 export class formPopAp extends BaseComponent {
   private readonly baseForAppend: HTMLElement;
   constructor(element:HTMLElement) {
     super('div', ['form-popup']);
     formContainer.appendChild(formP);
     formContainer.appendChild(labelName);
     formContainer.appendChild(firstName);
     formContainer.appendChild(labelLastName);
     formContainer.appendChild(lastName);
     formContainer.appendChild(labelEmail);
     formContainer.appendChild(email);
     formContainer.appendChild(submitBtn);
     formContainer.appendChild(cancelBtn);
     this.element.appendChild(formContainer);
     this.baseForAppend = element;
     this.baseForAppend.appendChild(this.element);
   }
 }
