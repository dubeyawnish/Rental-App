const express=require('express');
const cors=require('cors');
const Connection = require('./database/db');
global.__basedir = __dirname;


const app=express();

// Redirect to frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../frontend/build/index.html"));
});

require('./Model/User_Model');
require('./Model/Address_Model');
require('./Model/Property_Model');
require('./Model/Interested_Model');
require('./Model/Tenant_Model');


app.use(cors());
app.use(express.json());

app.use(require('./Route/User_Route'))
app.use(require('./Route/File_Route'))
app.use(require('./Route/Properties_Route'))
app.use(require('./Route/Address_Route'))
app.use(require('./Route/Interested_Route'))
app.use(require('./Route/Tenant_Route'))
app.use(require('./Route/Mulitple_Image.js'))

const PORT=5000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log("Server has been Started");
});
Connection();
