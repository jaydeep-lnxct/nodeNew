import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    text: 'string',
    description: 'string',
    file: 'string',
});

const user = mongoose.model('newuser', userSchema)
export default user;

