const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const sondageSchema = new Schema({
    titre: { type: String, required: true,unique:true },
    describe: { type: String, required: true,unique:true },
    response:[ { type: String}],
  }, {
    versionKey: false,
    timestamps: true
});
sondageSchema.plugin(uniqueValidator)
const Sondage = mongoose.model('sondage', sondageSchema);

module.exports = Sondage;