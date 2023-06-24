const server = require("./app.js");
require('dotenv').config();
const { PORT} = process.env;

// Importo instancia de "sequelize" => "conn"
const { conn } = require("./DB_connection.js");

conn.sync({ force: true })
   .then(() => {
      server.listen(PORT, () => {
         console.log('Server raised in port: ' + PORT);
      })
   })
   .catch(error => console.log(error.message))