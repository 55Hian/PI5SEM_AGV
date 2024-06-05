
function monitorarTeclas(){
    sandData(0)
    document.addEventListener('keydown', function(event) {
        console.log(event.key);
        
        switch (event.key) {

            case 'ArrowLeft':
                sandData(3)
                document.querySelector('#imga').style.transform = 'rotate(180deg)'
                break;
            
            case 'ArrowRight':
                sandData(4)
                document.querySelector('#imga').style.transform = 'rotate(0deg)'
                break;
        
            case 'ArrowUp':
                sandData(1)
                document.querySelector('#imga').style.transform = 'rotate(270deg)'
                break;
            
            case 'ArrowDown':
                sandData(2)
                document.querySelector('#imga').style.transform = 'rotate(90deg)'
                break;
        
        
            default:
                sandData(0)
                break;
        }


        });
}

async function sandData(codigo){

    const host = "http://localhost:3000/api";
    const idVeiculo = "1"    
    const url = `${host}/Controlar_veiculo/${idVeiculo}`;
    const data = new URLSearchParams();
    data.append('command', codigo);

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
            console.log(`Comando enviado ao AGV`)
        }))
 
    } catch (error) {
        console.error('Erro:', error);
    }  

}


console.log(monitorarTeclas())