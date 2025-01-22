import {Router} from 'express'
import CustomError from '../lib/Error.js'
import Enum from '../config/Enum.js'
import Response from '../lib/Response.js'


const routes=Router()
routes.get('/',(req,res)=>{
    try{
        let {name}=req.body
        if(!name){
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,'validation error','val error')
            
        }
    }catch (err){
        let errRes=Response.errorResponse(err)
        return res.status(errRes.code).json(errRes)
    }
})

export default routes