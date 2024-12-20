const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api",{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("connection Failed!!");
});