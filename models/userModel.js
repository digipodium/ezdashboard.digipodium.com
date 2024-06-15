const { model, Schema } = require('../connection');
const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
module.exports = model('user', userSchema);