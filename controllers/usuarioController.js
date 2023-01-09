const { response } = require('express');
const bcryptjs = require('bcryptjs');
const MySQL = require('../database/config');

const usuarioGet = async (req, res = response) =>{
    const mysql = new MySQL();

    try{
        const query = `SELECT u.*, r.nombre AS rol
                        FROM usuarios u, roles r
                        WHERE u.rol_id = r.id ORDER BY u.id DESC`;

        const usuarios = await mysql.ejecutarQuery( query );
                
        res.json({ usuarios: usuarios })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}


const usuarioPost = async (req, res = response) =>{
    const { rol_id, nombres, apellidos, cedula, celular, email, password } = req.body;
    const mysql = new MySQL();

    try {
        //Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        const passwordEncriptada = bcryptjs.hashSync(password, salt);

        //Verificar si el correo existe
        const query = `INSERT INTO usuarios(rol_id, nombres, apellidos, cedula, celular, email, password) 
                VALUES( ${ rol_id }, '${ nombres.toUpperCase() }', '${ apellidos.toUpperCase() }', '${ cedula }', '${ celular }', '${ email }', '${ passwordEncriptada }' )`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "usuario creado" })        
    } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Error, no se logro guardar al usuario'
        })
    }
}

const usuarioDelete = async (req, res = response) =>{
    const { id, estado } = req.params;
    const mysql = new MySQL();

    try {
        const query = `UPDATE usuarios SET estado = ${ estado } WHERE id = ${ id }`;
        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "usuario eliminado exitosamente" })        
    } catch (error) {
        return res.json({ msg: 'Error al eliminar al usuario' })
    }
}

const usuarioPut = async (req, res = response) =>{
    const { id } = req.params;
    const { rol_id, nombres, apellidos, cedula, celular, email, password } = req.body;
    const mysql = new MySQL();
    
    if (password) {
        const salt = bcryptjs.genSaltSync();
        var passwordEncriptada = bcryptjs.hashSync(password, salt);
    }

    try {
        let query = `UPDATE usuarios SET 
            rol_id      = ${ rol_id },
            nombres     = '${ nombres.toUpperCase() }',
            apellidos   = '${ apellidos.toUpperCase() }',
            cedula      = '${ cedula }',
            celular     = '${ celular }',
            email       = '${ email }'`;
        
        if( password ) query += `, password = '${ passwordEncriptada }'`

        query += ` WHERE id = ${ id }`;     

        await mysql.ejecutarQuery( query );
                
        res.json({ msg: "usuario actualizado exitosamente" })        
    }catch (error) {
        return res.json({ msg: error.sqlMessage })
    }
}

module.exports = {
    usuarioDelete,
    usuarioGet,
    usuarioPost,
    usuarioPut
}