const { Router } = require('express');
const { check } = require('express-validator');
const { 
    crearProducto, 
    getProductos, 
    getProductoById, 
    actualizarProducto,
    borrarProducto } = require('../controllers/productos');
const { existeProducto } = require('../helpers/db-validators');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');


const router = Router();

/**
 * {{url}}/api/categorias
 */

//Obtener todas los productos - publico
router.get('/', getProductos);

//Obtener un producto por id - publico
router.get('/:id', [
    check('id', 'No es un id de Mongo valido').isMongoId(),
    check('id').custom( existeProducto ),
    validarCampos
], getProductoById);

//actualizar producto - privado - cualquier persona con token valido
router.put('/:id', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom( existeProducto ),
    validarCampos
], actualizarProducto);

//crear producto - privado - cualquier persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('categoria', 'La categoria es obligatorio').not().isEmpty(),
    check('categoria', 'No es un ID valido').isMongoId(),
    validarCampos
], crearProducto);

//Borrar un producto - Admin 
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id Valido').isMongoId(),
    check('id').custom( existeProducto ),
    validarCampos
], borrarProducto);

module.exports = router;