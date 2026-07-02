import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  name : {type : String , required:true},
  image : {type : String , required : true},
  description : {type:String , required : true},
  category : { type:String , required : true},
  totalQuantity : {type:Number , required : true},
  availableQuantity : {type:Number , required : true},
  damagedQuantity : {type:Number, required : true},
  storageId : {type:mongoose.Schema.Types.ObjectId , ref : 'storage'}

});

export default mongoose.model('inventory',inventorySchema)
