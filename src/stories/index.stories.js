export default {
  title: 'Demo',
};

export const Heading = () => '<h1>Hello First World</h1>';

export const Heading2 = () => '<h2>Second world</h2>';

export const Heading3 = () => '<h3>Heading 3 here</h3>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', (e) => console.log(e));
  return btn;
};
