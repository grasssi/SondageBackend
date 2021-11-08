const Sondage = require('../models/sondageSchema')

//add sondage Controller
exports.addSondage = async (req, res) => {
    try {
        const createdSondage = await Sondage.create(req.body)
        res.json(createdSondage );

        // const updatedSondage = await Sondage.findByIdAndUpdate(createdSondage._id, { $push: { owners: req.body.owner } }, { new: true })
        //     console.log('ownerrrr',(req.body.owner).length);
        //    //affect Sondage to the owners
        //     for (let i = 0; i < (req.body.owner).length; i++) {
        //     const updatedOwner = await Owner.findByIdAndUpdate(req.body.owner[i], { $push: { Sondage: createdSondage._id } }, { new: true })
        //      }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//remove by Id Sondage Contoller
exports.removeSondage = async (req, res) => {
    try {
        const deletedSondage = await Sondage.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted base successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// get all Sondages 
exports.allSondages = async (req, res) => {
    try {
        const Bases = await Sondage.find({}).populate();
        res.json(Bases);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update Sondage by id controller
exports.updateSondage = async (req, res) => {
    try {
        console.log(req.body.value);
        const updatedSondage = await Sondage.findByIdAndUpdate(req.params.id, req.body.response, { new: true })
        res.json(updatedSondage);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//Get Sondage By id contoller
exports.getSondage = async (req, res) => {
    try {
        const Sondage = await Sondage.findById(req.params.id)
        res.json(Sondage);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//affect owner to Sondage
exports.affectSondage = async (req, res) => {
    try {
        const updatedSondage = await Sondage.findByIdAndUpdate(
            req.params.idsujet,
             { 
                 $push: { response:req.body.reponse } },
              { new: true })
        res.json(updatedSondage);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//desaffect owner from Sondage
exports.desaffectOwner = async (req, res) => {
    try {
        const updatedSondage = await Sondage.findByIdAndUpdate(req.params.idSondage, { $pull: { owners: req.params.idOwner } }, { new: true })
        res.json(updatedSondage);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}