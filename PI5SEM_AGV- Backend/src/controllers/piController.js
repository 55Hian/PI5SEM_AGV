const { json } = require('body-parser');
const piService = require('../services/piService');

module.exports = {
    getAllAGV: async (req, res) => {
        let json = {error:'', result:[]};
        let agvs = await piService.getAllAGV();

        for(let x in agvs){
            json.result.push({
                id_veiculo: agvs[x].id_veiculo,
                tempo: agvs[x].tempo,
                ciclo: agvs[x].ciclo,
                id_status: agvs[x].id_status
            })
        }
        res.json(json);
    },

    getAGV: async(req,res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let agv = await piService.getAGV(id);

        if(agv) json.result = agv;

        res.json(json);
    },

    getAllClient: async(req,res) => {
        let json = {error:'', result:[]};
        let clients = await piService.getAllClient();

        for(let x in clients){
            json.result.push({
                id_cliente: clients[x].id_cliente,
                nome_cliente: clients[x].nome_cliente,
                senha_cliente: clients[x].senha_cliente,
            })
        }
        res.json(json);
    },

    getClient: async(req,res) => {
        let json = {error:'', result:{}};
        let id = req.params.id;
        let client = await piService.getClient(id);

        if(client) json.result = client;

        res.json(json);
    },

    postClient: async(req,res) =>{
        let json = {error:'', result: {}};

        let clientName = req.body.name;
        let clientPass = req.body.password;

        if(clientName && clientPass){
            let UserCreate = await piService.postClient(clientName, clientPass);
            json.result = {
                clientName,
                clientPass
            };
        } else {
            json.error = 'Faltam informações, campos não enviados |' + 'clientName: ' + clientName + 'clientPass' + clientPass
        }
        res.json(json);
    },

    putClient: async(req,res) =>{
        let json = {error:'', result: {}};

        let clientID = req.params.id;
        let clientName = req.body.name;
        let clientPass = req.body.password;

        if(clientName && clientPass && clientID){
            await piService.putClient(clientID, clientName, clientPass);
            json.result = {
                clientID,
                clientName,
                clientPass
            };
        } else {
            json.error = 'Faltam informações, campos não enviados'
        }
        res.json(json);

    },

    deleteClient: async(req,res) =>{
        let json = {error:'', result:{}};
        let clientID = req.params.id;

        await piService.deleteClient(clientID);

        res.json(json);
    },

    getSolicitar: async(req,res) => {
        let id = req.params.id;
        let solicitarLista = await piService.getSolicitar(id);
        
        // Selecionando o primeiro objeto da lista (se existir)
        let solicitar = solicitarLista.length > 0 ? solicitarLista[0] : null;
    
        res.json(solicitar);
    },
    
    

    putSolicitar: async(req,res) => {
        let json = {error:'', result: {}};

        let id = req.params.id;
        let command = req.body.command;

        if(id && command){
            await piService.putSolicitar(id, command);
            json.result = {
                id,
                command
            };
        } else {
            json.error = 'Faltam informações, campos não enviados'
        }
        res.json(json);
    },
    
    getControlar_veiculo: async(req,res) => {
        let id = req.params.id;
        let solicitarLista = await piService.getControlar_veiculo(id);
        
        // Selecionando o primeiro objeto da lista (se existir)
        let solicitar = solicitarLista.length > 0 ? solicitarLista[0] : null;
    
        res.json(solicitar);
    },
    
    

    putControlar_veiculo: async(req,res) => {
        let json = {error:'', result: {}};

        let id = req.params.id;
        let command = req.body.command;

        if(id && command){
            await piService.putControlar_veiculo(id, command);
            json.result = {
                id,
                command
            };
        } else {
            json.error = 'Faltam informações, campos não enviados'
        }
        res.json(json);
    }
}