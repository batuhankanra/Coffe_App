import express from "express";
import cors from 'cors'
import config from "./src/config/index.js";
import Database from "./src/db/Database.js";
import morgan from "morgan";
import routes from "./src/routes/index.routes.js";

const app =express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
Database.connect({Connect:config.DB_URL})


app.use('/api',routes)

app.listen(config.PORT,()=>{
    console.log('server is running...',config.PORT)
})









