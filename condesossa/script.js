// Container de div
const container = document.createElement('div');
container.id = 'lista-container';
document.body.appendChild(container);

// Estilo da div
container.style.backgroundColor = '#fff';  // Definido fundo branco para o container
container.style.border = '2px solid #f5feff';
container.style.borderRadius = '10px';
container.style.padding = '20px';
container.style.maxWidth = '500px';
container.style.margin = '20px auto';
container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

// Título
const titulo = document.createElement('h1');
titulo.textContent = 'Lista de Desejo';
titulo.style.textAlign = 'center';
titulo.style.color = 'black';  // Mudança para tornar o texto legível
titulo.style.textShadow = '2px 2px 4px #000000';    
titulo.style.fontFamily = 'Arial, sans-serif';
titulo.style.fontWeight = 'bold';
container.appendChild(titulo);

// Input de item
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'Adicione um item.';
inputItem.style.textAlign = 'center';
inputItem.style.width = '70%';
inputItem.style.borderRadius = '15px';
inputItem.style.padding = '8px';
container.appendChild(inputItem);

// Botão
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
btnAdd.style.borderRadius = '15px';
btnAdd.style.margin = '10px';
btnAdd.style.padding = '6px 12px';
btnAdd.style.color = 'dark';
btnAdd.style.fontWeight = 'bold';
container.appendChild(btnAdd);

// Criar lista
const lista = document.createElement('ol');
lista.style.marginTop = '15px';
container.appendChild(lista);

// Função para adicionar item com lixeira
function adicionarItemComLixeira() {
    const valor = inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.textContent = valor;
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.padding = '6px 0';
        li.style.borderBottom = 'solid 1px #ccc';
        li.style.fontFamily = 'Arial, sans-serif';
        li.style.fontSize = '16px';
        li.style.position = 'relative';
        li.style.paddingRight = '30px';
        lista.appendChild(li);
        inputItem.value = '';
        inputItem.focus(); // Volta o foco para o campo

        // Botão excluir
        const btnExcluir = document.createElement('span');
        btnExcluir.textContent = '㊙️​';
        btnExcluir.style.position = 'absolute';
        btnExcluir.style.right = '0';
        btnExcluir.style.top = '50%';
        btnExcluir.style.transform = 'translateY(-50%)';
        btnExcluir.style.cursor = 'pointer';
        li.appendChild(btnExcluir);

        // Evento de clique no botão excluir
        btnExcluir.addEventListener('click', () => {
            lista.removeChild(li);
        });
    }
}

// Adicionar item ao clicar no botão
btnAdd.addEventListener('click', adicionarItemComLixeira);

// Adicionar item ao pressionar Enter
inputItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarItemComLixeira();
    }
});

// Estilo da página inteira (body)
document.body.style.backgroundColor = 'black';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.margin = '0';
document.body.style.padding = '0';