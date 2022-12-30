const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema(
    {
        Fname:String,
        Lname:String,
        Address:String,
        PhoneNo:Number,
    });

module.exports=mongoose.model('students',studentSchema);