const express=require("express");
const student=require("../model/students");


const router=new express.Router();

router.get("/route",(req,res)=>{
    res.send("<h1>Hello from route</h1>");
})


// create
router.post("/students",(req,res)=>{
    console.log(req.body);

    const user=new student(req.body);

    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((err)=>{
        res.status(400).send(err);
    })

    // res.send("Hello from the server side");
});

// read
router.get("/students",async (req,res)=>{
    try {
        // const getData=await student.find({name:"jac"});
        const getData=await student.find();
        res.send(getData);
    } catch (error) {
        res.status(400).send(error);
    }
});

// update
router.patch("/students",async (req,res)=>{
    try {
        const _id=req.params.id;
        const UpdateStudent=await student.findByIdAndUpdate({_id:"673f313f6e233ad2ed34bd44"},req.body,{
            new:true
        });
        res.send(UpdateStudent);
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete
router.delete("/students/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const deleteStudent=await student.findByIdAndDelete(_id);
        res.send(deleteStudent);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports=router;