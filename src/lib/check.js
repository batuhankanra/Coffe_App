import Enum from "../config/Enum.js"
import CustomError from "./Error.js"

let instance = null
class Check{
    constructor(){
        if(!instance){
            instance=this
        }
        return instance
    }
    /** 
     * Checks the at least one arg in arg is empty
     * @param {String[]} args
     */
    isEmpty(...args){
        for(let i =0;i<args.length;i++){
            if(args[i]===undefined || args[i]===null || args[i]==='')
                return true
        }
        return false
    }
    /**
     * Check the str is a JSON
     * @param {String} str
     */
    isJson(str){
        try{
            let json=JSON.parse(str)
            return json
        }
        catch{
            return null
        }
    }

    /**
     * check wheter the mustNecessaryFields are in the DataObject
     * @param {Object} dataObject
     * @param {String[]} mustNecessaryFields
     */
    areThereEmptyFields(dataObject,...mustNecessaryFields){
        let emptyField=[]
        for(let i=0; i<mustNecessaryFields.length;i++){
            if(!dataObject.hasOwnProperty(mustNecessaryFields[i])|| this.isEmpty(dataObject[mustNecessaryFields[i]])){
                emptyField.push(mustNecessaryFields[i])
            }
        }
        if(emptyField.length>1){
            console.log(emptyField)
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,'Validation Error',`${emptyField.join(',')} fields is required`)
        }
        if(emptyField.length>0){
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Validation Failed", `${emptyField[0]} field is required`);
        }
        return null
    }

}
export default new Check