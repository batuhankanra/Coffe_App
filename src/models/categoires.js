import mongoose from "mongoose";


const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    is_active:{
        type:Boolean,
        required:true
    },
    created_by:{
        type:mongoose.SchemaTypes.ObjectId
    }
},
{
    versionKey:false,
    timestamp:{
        created_at:'created_at',
        updated_at:'updated_at'
    }
})

class Categories extends mongoose.Document{}
schema.loadClass(Categories)
export default mongoose.model('categories',schema)