import {Router} from 'express'



const routes=Router()

routes.get('/',(req,res)=>{
    res.send('geldi')
})

export default routes