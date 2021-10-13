const express = require('express')
const CarController = require('../controllers/carController')
const RecordController = require('../controllers/recordController')
const router = express.Router()

router.post('/car', CarController.createInventory)
router.put('/car', CarController.updateInventory)
router.delete('/car/:id', CarController.deleteInventory)
router.get('/car', CarController.getCars)

router.post('/record', RecordController.addRecord)
router.put('/record', RecordController.updateRecord)
router.delete('/record/:id', RecordController.deleteRecord)
router.get('/record', RecordController.getRecords)

module.exports = router