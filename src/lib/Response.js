import Enum from "../config/Enum.js"
import CustomError from "./Error.js"


class Response{
    constructor() {}

    static succcessResponse({data}){
        return {
            data
        }
    }
    static errorResponse(err){
        console.log(err)
        if(err instanceof CustomError){
            return {
                code:err.code,
                error:{
                    message:err.message,
                    description:err.description
                }
            }
        }
        else if(err.message.includes("E11000")){
            return {
                code:Enum.HTTP_CODES.CONFLICT,
                error:{
                    message:"ALREADY_EXIST",
                    desription:'already exist'
                }
            }
        }
        return {
            code:Enum.HTTP_CODES.INT_SERVER_ERROR,
            error:{
                message:err.message,
                description:err.description
            }
        }
    }
}
export default Response