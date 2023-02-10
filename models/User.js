const mongoose = require ('mongoose')
const Schema = mongoose.Schema()

const userSchema={
    name:{
type:String
    },
    age:{
type: Number
    },
    email:{
        type: String
            },
    
        
}
const User=mongoose.model("User",userSchema)
module.exports= User