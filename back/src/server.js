/* const http = require("http");
const characters = require("./utils/data");

const PORT = 3001;

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character/')) {
        console.log(req.url.split('/'));
        const  id = Number(req.url.split('/').pop());
        const character = characters.filter(char => char.id === id);

        res.writeHead(200, {'Content-Type': 'application-json'});
        return res.end(JSON.stringify(character[0]))
    }

}).listen(PORT, 'localhost');

*/
/* const http = require("http");
const getCharById = require('./controllers/getCharById');
const getCharDetail = require("./controllers/getCharDetail");

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const id = req.url.split('/').pop();

    if(req.url.includes('onsearch')) {
      getCharById(res, id);
    }

    if(req.url.includes('detail')) {
      getCharDetail(res, id);
    }
})
.listen(3001,'localhost'); */

const express = require ('express');
const server = express();
const morgan = require('morgan');
const PORT = 3001;
const router = require('./routes/index');
const cors = require('cors');

server.use(express.json());
server.use(morgan('dev'));
server.use(cors()); 

server.use('/', router);


server.listen(PORT, () => {
  console.log('Server raised in port ' + PORT);
});