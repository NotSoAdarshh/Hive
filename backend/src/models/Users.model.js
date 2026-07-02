import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name : {type:String, required : true},
  email : {type:String , required : true},
  role : {type:String, required:true},
  avatar : {type:String},
  accessToken : {type:String},
  refreshToken : {type : String},
  password :{type:String, required:true},
  createdAt : {type: Date , default :Date.now},
  updatedAt : {type :Date , default : Date.now}

});

export default mongoose.model('user',userSchema);