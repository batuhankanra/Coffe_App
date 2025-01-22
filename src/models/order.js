import mongoose from "mongoose";

const schema=mongoose.Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user',
        reqiored:true,

    },
    items:{
        product:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'product',
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    },
    totalAmount:{
        type:Number,
        required:true
    },
    shippingAdress:{
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


class Order extends mongoose.Document{

}
schema.loadClass(Order)
export default mongoose.model('order',schema)