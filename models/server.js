 const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

class Server{
    
    constructor(){
        this.cnn = "testing";
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth:   '/api/auth',
            buscar: '/api/buscar',
            usuarios: '/api/usuarios',
            roles: '/api/roles'
        }
        
        //Midlewares
        this.midlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    midlewares(){
        //CORDS
        this.app.use( cors() );

        //Lectura y Parseo del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use(express.static('public'));

        //Carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.roles, require('../routes/roles'));
    }

    listen(){        
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;