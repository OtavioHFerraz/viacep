// criando um titulo nivel 1

const h1 = document.createElement('h1');
h1.innerHTML = 'minha pagina dinamica';


// Criando um titulo nivel 2 
const h2 = document.createElement('h2');
h2.innerHTML = 'Esta pagina esta sendo gerada dinamicamente '


//pendurando os filhos
document.body.appendChild(h1);
document.body.appendChild(h2);