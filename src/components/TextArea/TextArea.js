import './TextArea.css';

export const textArea = () => {

  const textArea = document.createElement('TEXTAREA');
  textArea.setAttribute('id','textArea');
  textArea.classList.add('textArea','dark');
  textArea.placeholder = 'Start typing here… (or paste your text)'

  return textArea;

}
