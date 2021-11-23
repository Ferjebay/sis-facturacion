const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
const { googleVerify } = require('../helpers/google-verify');

const login = async (req, res = response) =>{
    const { correo, password } = req.body;

    try {
        //Verificar si el correo existe
        const usuario = await Usuario.findOne({correo})
        
        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos - correo"
            })
        }
        //Si el usuario esta activo
        if(!usuario.estado) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos - correo estado: false"
            })
        }
        //Verificar contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(400).json({
                msg: "Usuario / Password no son correctos - correo password"
            })
        }
        //Generar JWT
        const token = await generarJWT(usuario.id);

        res.json({
            msg: 'Login ok',
            usuario,
            token        
        })        
    } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Hable con el administrador'
        })
    }

}

const googleSignIn = async (req, res = response) => {
    const { id_token } = req.body;

    try {
        const { correo, nombre, img } =  await googleVerify(id_token);
        
        let usuario = await Usuario.findOne({correo});

        if (!usuario) {
            //tengo que crearlo
            const data = {
                nombre,
                correo,
                password: ':P',                
                img,
                google: true
            }
            usuario = new Usuario( data );
            await usuario.save();
        }

        //Si el usuario en BD
        if(!usuario.estado){
            return res.status(401).json({
                msg: 'Hable con el administrador, usuario bloqueado'
            })
        }
        //Generar JWT        
        const token = await generarJWT(usuario.id);

        res.json({
            msg: "Todo ok google signIn",
            token
        })
        
    } catch (error) {
        console.log(error);

        res.status(400).json({
            msg: 'Token de Google no es valido'
        })
    }

}

module.exports = {
    login,
    googleSignIn
}