const { Router } = require('express');
const { check } = require('express-validator');
const { crearCategoria, getCategorias, getCategoriaById, actualizarCategoria, borrarCategoria } = require('../controllers/categorias');
const { existeCategoria } = require('../helpers/db-validators');

const { validarJWT, validarCampos, esAdminRole } = require('../middlewares')

const router = Router();

/**
 * {{url}}/api/categorias
 */

//Obtener todas las categorias - publico
router.get('/', getCategorias);
//Obtener una categoria por id - publico
router.get('/:id', [
    check('id', 'No es un id de Mongo valido').isMongoId(),
    check('id').custom( existeCategoria ),
    validarCampos
], getCategoriaById);
//crear actegoria - privado - cualquier persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);
//actualizar categoria - privado - cualquier persona con token valido
router.put('/:id', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom( existeCategoria ),
    validarCampos
], actualizarCategoria);
//Borrar una categoria - Admin 
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id Valido').isMongoId(),
    check('id').custom( existeCategoria ),
    validarCampos
], borrarCategoria);

module.exports = router;