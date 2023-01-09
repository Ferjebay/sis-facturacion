const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
const MySQL = require('../database/config');

const login = async (req, res = response) =>{
    try {
        var { email, password: userPassword } = req.body;
        const mysql = new MySQL();
        //Verificar si el correo existe
        const query = `SELECT * FROM usuarios WHERE email = '${email}'`;
        const usuario = await mysql.ejecutarQuery( query );

        if (!usuario || usuario.length === 0) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos - correo"
            })
        }
        // //Si el usuario esta activo
        if(!usuario[0].estado) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos - correo | estado: false"
            })
        }
        // //Verificar contraseña
        const validPassword = bcryptjs.compareSync(userPassword, usuario[0].password);
        if(!validPassword){
            return res.status(400).json({
                msg: "Usuario / Password no son correctos - correo password"
            })
        }
        // //Generar JWT
        const { estado, password, ...rest } = usuario[0];
        const token = await generarJWT( rest );

        res.json({
            msg: 'Login ok',
            token        
        })        
    } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    login
}