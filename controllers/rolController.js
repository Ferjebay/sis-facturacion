const { response } = require('express');
const MySQL = require('../database/config');

const rolesGet = async (req, res = response) =>{
    const mysql = new MySQL();

    try{
        const query = 'SELECT * FROM roles';

        const roles = await mysql.ejecutarQuery( query );
                
        res.json({ roles })        
    }catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al consultar en la DB' })
    }
}

const rolesPost = async (req, res = response) =>{
    console.log(req.body);
    // const mysql = new MySQL();

    // try{
    //     const query = 'SELECT * FROM roles';

    //     const roles = await mysql.ejecutarQuery( query );
                
    //     res.json({ roles })        
    // }catch (error) {
    //     console.log(error);
    //     return res.json({ msg: 'Error al consultar en la DB' })
    // }
}

module.exports = {
  rolesGet,
  rolesPost
}