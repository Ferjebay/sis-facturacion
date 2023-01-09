const mysql = require('mysql2/promise');

class MySQL{     
    
    async conectarDB(){
        try{
            const cnn = await mysql.createConnection({
                host:'34.123.30.226',
                user: 'root', 
                database: 'pos-ventas'
            });
            return cnn;
        }catch (error) {
            console.log("Fallo en la conexion a la base de datos");
        }
    }

    async ejecutarQuery( query ){
        const connection = await this.conectarDB();
        const [rows, fields] = await connection.execute( query );
        return rows
    }    
}

module.exports = MySQL;