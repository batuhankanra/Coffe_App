import mongoose from "mongoose";


const schema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    
    image:{
        type:[String]
    },
    stock:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"category",
        required:true
    },
    ratings:[
        {
            user:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:'user'
            },
            rating:{
                type:Number
            }
            
        }
    ]
},{
    versionKey:false,
    timestamp:{
        created_at:'created_at',
        updated_at:'updated_at'
    }
})

class Product extends mongoose.Document{

}
schema.loadClass(Product)
export default mongoose.model('product',schema)