import express from  'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

//chamar o banco de dados
import './database/connection';

//importar as rotas
import routes from './routes';
import errorHandler from './errors/handler';

//criar a aplicação, só tem uma unica aplicação
const app = express(); 

//permitir que outros frontends se comuniquem com a aplicação(API backend)
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

//Criando uma rota
// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=mario
// Route Params: http://localhost:3333/user/1 (Identificar um recurso)
// Body: http://localhost:3333/users (identificar um recurso)



//ouvindo a porta 3333
app.listen(3333)

//REQ / RES - REQUISIÇÂO / RESPOSTA

//Para acessar o backend da aplicação, acessar localhost:3333
//Pode colocar outra porta deseja

