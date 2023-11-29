import mongoose from "mongoose";
const schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    address:{type:String},
    empid:{type:String},
    salary:{type:String},
    designation:{type:String},
    experience:{type:String},
    photo:{type:String},
})

export default mongoose.model.Tasks||mongoose.model("task",schema)