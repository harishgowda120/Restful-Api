const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2
    },
    email:{
        type:String,
        unique:[true,"Email Id Already Exist"],
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10
    },
    address:{
        type:String,
        required:true
    }
});

const Student=mongoose.model("Student",studentSchema);

module.exports=Student;
