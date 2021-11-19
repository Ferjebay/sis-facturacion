const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config')

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar a la BD
        this.conectarBD();

        //Midlewares
        this.midlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarBD(){
        await dbConnection();
    }

    midlewares(){
        //CORDS
        this.app.use( cors() );

        //Lectura y Parseo del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){        
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;