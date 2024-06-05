const host = "http://localhost:3000/api";
const idVeiculo = "1"


document.querySelector('#solicitarEntrega').addEventListener('click', () => {
    solicitarEntrega();
})

async function solicitarEntrega(){
    const command = 3;
    const url = `${host}/solicitar/${idVeiculo}`;
    const data = new URLSearchParams();
    data.append('command', command);
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar requisição');
        }

        const responseData = await response.json();
        console.log('Resposta do servidor:', responseData);
        
        fetch(`${host}/solicitar/${idVeiculo}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((resposta) => resposta.json())
        .then((resposta => {
            alert(`Comando enviado ao AGV`)
        }))
 
    } catch (error) {
        console.error('Erro:', error);
    }  

}

document.querySelector('#solicitarRetirada').addEventListener('click', () => {
    solicitarRetirada();
})

async function solicitarRetirada(){
    const command = 2;
    const url = `${host}/solicitar/${idVeiculo}`;
    const data = new URLSearchParams();
    data.append('command', command);
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar requisição');
        }

        const responseData = await response.json();
        console.log('Resposta do servidor:', responseData);
        
        fetch(`${host}/solicitar/${idVeiculo}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((resposta) => resposta.json())
        .then((resposta => {
            alert(`Comando enviado ao AGV`)
        }))
 
    } catch (error) {
        console.error('Erro:', error);
    }  

}



document.querySelector('#solicitarRE').addEventListener('click', () => {
    solicitarRE();
})

async function solicitarRE(){
    const command = 1;
    const url = `${host}/solicitar/${idVeiculo}`;
    const data = new URLSearchParams();
    data.append('command', command);
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar requisição');
        }

        const responseData = await response.json();
        console.log('Resposta do servidor:', responseData);
        
        fetch(`${host}/solicitar/${idVeiculo}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((resposta) => resposta.json())
        .then((resposta => {
            alert(`Comando enviado ao AGV`)
        }))
 
    } catch (error) {
        console.error('Erro:', error);
    }  

}


document.querySelector('#repouso').addEventListener('click', () => {
    repouso();
})

async function repouso(){
    const command = 0;
    const url = `${host}/solicitar/${idVeiculo}`;
    const data = new URLSearchParams();
    data.append('command', command);
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar requisição');
        }

        const responseData = await response.json();
        console.log('Resposta do servidor:', responseData);
        
        fetch(`${host}/solicitar/${idVeiculo}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((resposta) => resposta.json())
        .then((resposta => {
            alert(`Comando enviado ao AGV`)
        }))
 
    } catch (error) {
        console.error('Erro:', error);
    }  

}