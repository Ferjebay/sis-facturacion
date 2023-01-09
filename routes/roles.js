const { Router } = require('express');
const { check } = require('express-validator');

const { rolesGet, rolesPost } = require('../controllers/rolController');

const { validarCampos, validarJWT } = require('../middlewares');

const router = Router();

router.get('/', [
  validarJWT,
  validarCampos,
], rolesGet); 

router.post('/', [
  validarJWT,
  check('nombre', 'Ingresa el nombre del rol').not().isEmpty(),
  validarCampos,
], rolesPost); 

module.exports = router;



