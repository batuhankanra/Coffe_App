import mongoose from "mongoose";

const schema=mongoose.Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user',
        required:true
    },
    order:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'order',
        required:true
    },
    paymentMethod:String,
    paymenStatus:String,
    amount:Number
},
{
    versionKey:false,
    timestamp:{
        created_at:'created_at',
        updated_at:'updated_at'
    }
})

class Payment extends mongoose.Document{

}
schema.loadClass(Payment)
export default mongoose.model('payment',schema)