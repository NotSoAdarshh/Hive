import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema ({
  requestedBy : {type : mongoose.Schema.Types.ObjectId , ref:'user',required:true},
  approvedBy : {type:mongoose.Schema.Types.ObjectId , ref : 'user',required:true},
  issuedOn : {type:Date, required:true},
  returnDate : {type:Date , required:true},
  status : {type:String , required:true},
  items : [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'inventory', required: true},
      quantity: { type: Number, required: true },
      damagedQuantity: { type: Number, default: 0 },
      remarks: { type: String }
    }
  ]

})

export default mongoose.model('transaction',transactionSchema);