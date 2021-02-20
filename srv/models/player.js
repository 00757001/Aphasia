import mongoose from 'mongoose';
const { Schema } = mongoose;

const PlayerSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    team:String,
    position:String
});
module.exports = mongoose.model('Player', PlayerSchema)