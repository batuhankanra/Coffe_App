import mongoose from "mongoose";

const schema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    adress:{
        street:String,
        city:String,
        postalCode:String,
        country:String
    }
    

},{
    versionKey:false,
    timestamp:{
        created_at:'created_at',
        updated_at:'updated_at'
    }
})

class User extends mongoose.Document{

}
schema.loadClass(User)
export default mongoose.model('user',schema)