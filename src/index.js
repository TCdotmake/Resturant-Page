//imports
import './style.css';
import Logo from '../images/stackLogo.svg';
//main content
const content = document.createElement('div');
content.id = 'content';
content.textContent = 'Something else';
document.body.insertAdjacentElement("beforeend", content);

//try to put in logo
const logo = document.createElement('div');
logo.classList.add('logo');
content.insertAdjacentElement('beforeend', logo);
