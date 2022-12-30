const mongoose=require('mongoose');

const main=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/School");
    const StudentSchema=new mongoose.Schema({
        Fname:String
    });

const  StudentModel=mongoose.model('students',StudentSchema);
let data=new StudentModel({Fname:"Rushikesh"});
let result=await data.save();
console.log(result);
}

main()