const container = document.createElement('div');
container.id = 'lista-container';
document.body.appendChild(container);

container.style.backgroundColor = '#f9f9f9';
container.style.border = '2px solid #ccc'
container.style.borderRadius = '10px';
container.style.padding = '20px';
container.style.maxWidth = '400px';
container.style.margin = '20px auto';
container.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';

// Cria título
const titulo = document.createElement('h1');
título.textContent = 'Lista de compras';
document.body.appendChild(titulo);

// Cria input de texto
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'Digite umitem';
document.body.appendChild(inputItem);

// Criar botão de adicionar
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
document.body.appendChild(btnAdd);

//Criar lista 
const lista = document.createElement('ul');
document.body.appendChild(lista);

//Função para adicionar item
function adicionarItem() {
    const valor = inputItem.value.trim();
    if (valor !=='') {
        const li = document.createElement('li');
        li.textContent = valor;
        lista.appendChild(li);
        inputItem.value = '';
        inputItem.focus(); // volta o foco para o campo
    }
}

// Evento do botão
btnAdd.addEventListener('click', adicionarItem);

// Evento para tecla Enter no input
inputItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarItem();
    }
});