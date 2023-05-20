const express = require('express')
const router  = express.Router()
const controller = require('../controller/usuario')

router.get('/', controller.get)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router