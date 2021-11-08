const express = require('express');
const router = express.Router();
// require controller
const sondageContoller = require(('../controllers/sondageConroller'));

// add one sondage
router.post('/addsondage', sondageContoller.addSondage)

// Remove one sondage
router.delete('/removesondage/:id', sondageContoller.removeSondage)

//get all sondages
router.get('/allsondages', sondageContoller.allSondages)

// update sondage by id
router.put('/updatesondage/:id', sondageContoller.updateSondage)

//get sondage by id
router.get('/getsondage/:id', sondageContoller.getSondage)

//affect reponse to sujet
router.put('/affectreponse/:idsujet/:reponse', sondageContoller.affectSondage)

// //desaffect owner to service
// router.put('/desaffectService/:idService/:idOwner', serviceContoller.desaffectOwner)


module.exports = router;