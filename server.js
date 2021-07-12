// Faça seu código aqui
const express = require('express');

const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhgost:3001',
        method: ['GET', 'POST'],
    },
});

const UsersController = require('./controller/User');

require('./sockets/chat.js')(io);
require('./sockets/user.js')(io);

app.use(cors());

app.use(express.static(`${__dirname}/views`));

app.get('/', UsersController.getAll);

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});