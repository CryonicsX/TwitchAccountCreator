const { model, Schema } = require('mongoose'); //Developed By CryonicX
module.exports = model('inventory', new Schema({
    Guild: String,
    User: String,
    Inventory: Object,
}))