const { request, response } = require('express');
const { ObjectId } = require('mongoose').Types

const { Usuario, Categoria, Producto } = require('../models')

const coleccionesPermitidas = [
    'categorias',
    'usuarios',
    'productos',
    'roles'
];

const buscar = (req, res = request) => {
    const { coleccion, termino } = req.params;

    if (!coleccionesPermitidas.includes(coleccion)) {
        return res.status(400).json({
            msg: `Las colecciones permitidas son: ${coleccionesPermitidas}`
        })
    }

    const buscarUsuarios = async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid( termino ); //TRUE

        if( esMongoID ){
            const usuario = await Usuario.findById(termino);
            return res.json({
                results: usuario ? [usuario] : []
            });
        }

        const regex = new RegExp(termino, 'i');

        const usuarios = await Usuario.find({ 
            $or: [{ nombre: regex }, { correo: regex }],
            $and: [{ estado: true }]
         });   
        
        res.json({
            results: usuarios
        })
    }

    const buscarCategorias = async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid( termino ); //TRUE

        if( esMongoID ){
            const categoria = await Categoria.findById(termino);
            return res.json({
                results: categoria ? [categoria] : []
            });
        }

        const regex = new RegExp(termino, 'i');

        const categoria = await Categoria.find({ nombre: regex, estado: true });   
        
        res.json({
            results: categoria
        })
    }

    const buscarProductos = async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid( termino ); //TRUE

        if( esMongoID ){
            const producto = await Producto.findById(termino).populate('categoria', 'nombre');
            return res.json({
                results: producto ? [producto] : []
            });
        }

        const regex = new RegExp(termino, 'i');

        const productos = await Producto.find({ nombre: regex, estado: true }).populate('categoria', 'nombre');;   
        
        res.json({
            results: productos
        })
    }

    switch (coleccion) {
        case 'categorias':
            buscarCategorias(termino, res);
            break;
        case 'usuarios':
            buscarUsuarios(termino, res);
            break;
        case 'productos':
            buscarProductos(termino, res);
            break;
    
        default:
            res.status(500).json({
                msg: 'Se me olvido hacer esta busqueda'
            })
            break;
    }

}

module.exports = {
    buscar
}