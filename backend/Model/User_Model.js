const mongoose=require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const userSchema= new mongoose.Schema({
    firstName:{
      type:String,
      required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
         required:true
    },
    role:{
        type:String,
        default:"tenant"
    },
   
    address:{
        type:ObjectId ,
        ref:"AddressModel"
    }

});

mongoose.model('UserModel',userSchema);