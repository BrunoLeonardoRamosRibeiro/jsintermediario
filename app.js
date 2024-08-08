// importar o express e o cors
const express = require('express');
var cors = require('cors')

// criamos o objeto express
const myApp = express();

myApp.use(cors());
myApp.use(express.json());


// Porta para comunicação
const porta = 3000;

const filmes = [
    {
        id: 1, 
        titulo: "Harry Porter",
        descricao: "FIleme xxcxcx0",
        ano: 2010
    },
    {
        id: 2, 
        titulo: "Harry Porter eo o Enigima do Príncipe",
        descricao: "Filme xccxvxvxv",
        ano: 2012
    },
];



myApp.listen(porta, ()=> {console.log('Servidor Rodando...')});

myApp.get('/listar-filmes', (request, response ) => {
    try {
        response.send(filmes);
    } catch (error) {
        response.status(500).json({msg: 'Erro ao listar filmes'},);
    }

} );

myApp.post('/adicionar-filme', (request, response ) => {
    try {
        const { titulo, ano, descricao } = request.body;
        const id = filmes.length ? filmes[filmes.length -1].id +1 : 1;
        const novoFilme = {id, titulo, ano, descricao};
        filmes.push(novoFilme);
        response.status(201).send(novoFilme);
    } catch (error) {
        response.status(500).json({msg: 'Erro ao inserir o filme'},);
    }

} );


myApp.put('/editar-filme/:id', (request, response ) => {
    try {
        const { id } = request.params;
        const { titulo, ano, descricao } = request.body;
        const filmeIndex = filmes.findIndex(f => f.id === parseInt(id));

        if (filmeIndex === -1) {
            return response.status(404).json({msg: "Filme não encontrado"});
        }
        
        filmes[filmeIndex] = { id: parseInt(id), titulo, ano, descricao };
        
        response.status(200).send( filmes[filmeIndex]);
    } catch (error) {
        response.status(500).json({msg: 'Erro ao atualizar o filme'},);
    }

} );

myApp.delete('/deletar-filme/:id', (request, response ) => {
    try {
        const { id } = request.params;
        const { titulo, ano, descricao } = request.body;
        const filmeIndex = filmes.findIndex(f => f.id === parseInt(id));

        if (filmeIndex === -1) {
            return response.status(404).json({msg: "Filme não encontrado"});
        }
        
        const filmeRemovido = filmes.splice(filmeIndex, 1);
        
        response.status(200).send( filmeRemovido );
    } catch (error) {
        response.status(500).json({msg: 'Erro ao excluir o filme'},);
    }

} );


