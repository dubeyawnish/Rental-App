const express=require('express');
const cors=require('cors');
const Connection = require('./database/db');
global.__basedir = __dirname;


const app=express();



require('./Model/User_Model');
require('./Model/Address_Model');
require('./Model/Property_Model');
require('./Model/Interested_Model');


app.use(cors());
app.use(express.json());

app.use(require('./Route/User_Route'))
app.use(require('./Route/File_Route'))
app.use(require('./Route/Properties_Route'))
app.use(require('./Route/Address_Route'))
app.use(require('./Route/Interested_Route'))

const PORT=4000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log("Server has been Started");
});
Connection();
