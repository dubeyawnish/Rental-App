const express=require('express');
const cors=require('cors');
const Connection = require('./database/db');



const app=express();



require('./Model/User_Model');


app.use(cors());
app.use(express.json());

app.use(require('./Route/User_Route'))

const PORT=4000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log("Server has been Started");
});
Connection();
