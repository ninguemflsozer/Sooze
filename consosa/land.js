document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data);//adiciona linha para verificar os dados no console

    fetch('https://script.google.com/macros/s/AKfycbz8CeYoyb_Wjo0R3giPPeiBmRi5aqRaL6I665FxiHKlVWLmcE3rCPzrYtPTBF2cieCw/exec', {
        method: 'POST',
        body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.result === 'success') {
            alert ('Dados enviados com sucesso!');
            event.target.reset();
        } else if (responseData.result === 'error' && responseData.message ==='Email already exists' ) {
            alert('Erro: O email já existe.');
        } else {
            alert('Erro ao enviar os dados.')
        }
    })
    .catch(error => console.error('Error:' , error));
});