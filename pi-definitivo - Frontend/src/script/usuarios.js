const host = "http://localhost:3000/api";
getUsers();

async function getUsers(){

    const request = new Request(`${host}/client`,
    {
        method: 'GET',
        headers:{
            'Content-type': 'application/json'
        }
    })

    fetch(request)
    .then((response) => response.json())
    .then((response) => {

        clients = response.result
        console.log(clients.length)

        document.getElementById('contido').innerHTML = `
        <div id="cliente">
        <div class="campoCliente" id="idCliente">ID</div>
        <div class="campoCliente" id="nomeCliente">Nome</div>
        <div class="campoCliente" id="editarCliente"></div>
        <div class="campoCliente" id="apagarCliente"></div>
        </div>  
        `

        if (clients.length > 0){
        clients.forEach(element => {
            document.getElementById('contido').innerHTML += 

            `

            <div id="cliente">
            <div class="campoCliente" id="idCliente">${JSON.stringify(element.id_cliente)}</div>
            <div class="campoCliente" id="nomeCliente">${JSON.stringify(element.nome_cliente)}</div>
            <div class="campoCliente" id="editarCliente"><button onclick="putClient(${element.id_cliente})"><img src="../style/source/escrever.png" alt=""></button></div>
            <div class="campoCliente" id="apagarCliente"><button onclick="apagarCliente(${element.id_cliente})"><img src="../style/source/botao-excluir.png" alt=""></button></div>
            </div>            
            `;

        });} else {
            document.getElementById('contido').innerHTML += `Não existem usuarios no sistema`;
        }

    });
    
}

async function apagarCliente(id){
    if(confirm("Tem certeza que deseja apagar o usuario?" )){
       const request = new Request(`${host}/client/${id}`,
    {
        method: 'DELETE',
        headers:{
            'Content-type': 'application/json'
        }
    })

    fetch(request)
    .then((response) => {
        console.log(response.status);
        getUsers();
    })
    }
}

async function criarUsuario(){

    document.querySelector('#overlay').classList.toggle('oculto');
    document.querySelector('#modalCreate').classList.toggle('oculto');       
  
}

document.querySelector('#cadastrar').addEventListener('click', () => {
    cadastrar();  
});


async function cadastrar(){

    console.log(String(document.querySelector('#nomeC').value))
    console.log(String(document.querySelector('#senhaCliente').value))

    const url = `${host}/client`;
    const data = new URLSearchParams();
    data.append('name', String(document.querySelector('#nomeC').value));
    data.append('password', String(document.querySelector('#senhaCliente').value));
    

    try {
        const response = await fetch(url, {
            method: 'POST',
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
    } catch (error) {
        console.error('Erro:', error);
    }

    document.querySelector('#overlay').classList.toggle('oculto');
    document.querySelector('#modalCreate').classList.toggle('oculto');

    getUsers();
}

document.querySelector('#cancelarCadastro').addEventListener('click', () => {

    document.querySelector('#overlay').classList.toggle('oculto');
    document.querySelector('#modalCreate').classList.toggle('oculto');

})

async function putClient(id){
    localStorage.setItem('idpessoa', id);

    document.querySelector('#overlay').classList.toggle('oculto');
    document.querySelector('#modalUpdate').classList.toggle('oculto');

}

document.querySelector('#enviar').addEventListener('click', () => {
    enviaratt();
})

async function enviaratt(){
    
    const nomeUsuario = String(document.querySelector('#nomeClientePUT').value);
    const senhaUsuario = String(document.querySelector('#senhaClientePUT').value);
    const idatt= localStorage.getItem('idpessoa');


    const url = `${host}/client/${idatt}`;
    const data = new URLSearchParams();
    data.append('name', nomeUsuario);
    data.append('password', senhaUsuario);

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
        
        alert(`${nomeUsuario} foi atualizado.`);
        document.querySelector('#overlay').classList.toggle('oculto');
        document.querySelector('#modalUpdate').classList.toggle('oculto');

        getUsers(); 
    } catch (error) {
        console.error('Erro:', error);
    }  
    
}




document.querySelector('#cancelarEnvio').addEventListener('click', () => {
    document.querySelector('#overlay').classList.toggle('oculto');
    document.querySelector('#modalUpdate').classList.toggle('oculto');

})

