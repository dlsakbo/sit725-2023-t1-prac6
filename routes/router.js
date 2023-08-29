var express = require("express")
//var app = express()
let router = express.Router()
let controller = require('../controllers/controller')

router.post('/api/fairway', (req, res, next) => {
    controller.postFairway(req, res);
})

router.get('/api/fairway', (req, res, next) => {
    controller.getAllFairway(req, res)
})

router.get('/', (req, res, next) => {
    controller.getAllFairway(req, res)
})


module.exports = router;