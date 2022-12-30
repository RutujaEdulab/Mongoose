const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/School');
const schoolschema = new mongoose.Schema({
    Fname: String,
    Lname: String,
    Address: String,
    PhoneNo: Number
});

const savedb = async () => {
    const StudentModel = await mongoose.model('students', schoolschema);
    let data = await StudentModel(
        {
            Fname: "Radhika",
            Lname: "Deshmukgh",
            Address: "Kolhapur",
            PhoneNo: 45988465654
        });
    let result = await data.save();
    console.log(result);
}

const Updatedb = async () => {
    const StudentModel = await mongoose.model('students', schoolschema);
    let data = await StudentModel.updateOne(
        { Fname: "Radhika" },
        { $set: { Address: "Pune", Lname: "Joshi" } }
    )
    console.log(data);
}

const Deletedb = async () => {
    const StudentModel = await mongoose.model('students', schoolschema);
    let data = await StudentModel.deleteOne(
        { Fname: "Radhika" }
    )
    console.log(data);
}
 const Finddb=async ()=>{
    const StudentModel=await mongoose.model('students',schoolschema);
    let data= await StudentModel.find({Fname:"Rushikesh"});
    console.log(data);
 }

 Finddb();