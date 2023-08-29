let collection = require('../models/fairway')


function postFairway(req, res) {
    dog = req.body;
    collection.postFairway(fairwayy, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, messsage: 'post success' })
        }
    });
}

function getAllFairway(req, res) {
    collection.getAllFairway((err, cards) => {
        if (err) {
            console.error(err);
            return res.statusCode(500).send('Error occurred');
        }
        res.render('index', { cards });
    })
}

 function getAllFairway(req, res) {
     collection.getAllFairway((error, result) => {
         if (!error) {
             res.json({ statusCode: 200, data: result, messsage: 'post success' })
         }
     })
 }


module.exports = { postFairway, getAllFairway }