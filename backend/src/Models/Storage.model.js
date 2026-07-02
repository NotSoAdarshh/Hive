import mongoose from 'mongoose';

const storageSchema = new mongoose.Schema({
  storageNumber : {type: Number ,required:true},
  name : {type : String}
});

export default mongoose.model('storage',storageSchema);