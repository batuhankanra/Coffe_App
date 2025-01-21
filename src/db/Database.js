import mongoose from 'mongoose'

let instance=null
class DataBase{
    constructor(){
        if(!instance){
            this.mongoConnection=null
            instance=this
        }
        return instance
    }
    async connect(options){
        try{
            console.log(options)
            console.log('db conneting...')
            let db=await mongoose.connect(options.Connect)
            this.mongoConnection=db
            console.log('db connected!')
        }catch (err){
            console.log(err)
            process.exit(1)
        }
    }
}

export default new DataBase