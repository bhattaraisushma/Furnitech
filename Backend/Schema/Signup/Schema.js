import mongoose from "mongoose";
const signupSchema = mongoose.Schema({

name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
}
})
const newUser = mongoose.model('newUser', signupSchema)
export default newUser;