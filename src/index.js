//imports
import './style.css';

//main content
const content = document.createElement('div');
content.id = 'content';
content.textContent = 'Something else';
document.body.insertAdjacentElement("beforeend", content);
