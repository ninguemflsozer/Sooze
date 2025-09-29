

const btnSalvar = document.createElement('button');
btnSalvar.textContent = 'Salvar Lista';
btnSalvar.style.display = 'block';
btnSalvar.style.margin = '20px auto';
btnSalvar.style.padding = '6px 12px';
btnSalvar.style.cursor = 'pointer';
container.appendChild(btnSalvar);


function salvarlista() {
    const itens = Array.from(lista.querySelectorAll('li'))
        .map(li => li.textContent)
        .join('\n');
        
        
        if (!itens) {
            alert('A lista está vazia!');
            return;
        }

        const blob = new Blob([itens], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);


        const a = document.createElement('a');
        a.href = url;
        a.download = 'lista.txt'

}