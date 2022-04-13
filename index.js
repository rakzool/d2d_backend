const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Teams = require("./models/user.model");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express());
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
mongoose.connect("mongodb+srv://rahul:Rahulkumar1@dare2dev.rswnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.get("/api/data", (req, res) => {
  res.send(`<h1>Hello from server</h1>`);
});

app.post("/api/login" , async(req,res) => {
  const team = await Teams.findOne({
    userName : req.body.email,
    password : req.body.password
  });

  if(team) {
    const token = jwt.sign({
      teamName : team.data.teamName,
      userName : team.userName
    },
    "secret123"
    );

    return res.json({status :"ok", team: token});
  }else {
    return res.json({status : "error" , team: false});
  }
  
});


app.post("/api/register" , async(req,res) =>{
  try{

    await Teams.create({
      userName : req.body.userName,
      password: req.body.password,
      teamSize : req.body.size,
      phone : req.body.phone,
      email : req.body.email,
       data : {
         teamName : req.body.data.teamName,
         teamLead : req.body.data.teamLead,
         member1 : req.body.data.member1,
         member2 : req.body.data.member2,
         member3 : req.body.data.member3,
         member4 : req.body.data.member4,
       }
    });
    res.json({status : "ok"});

  }catch(err){
    console.log(err.message);
    res.json({status : "error" , error : "Duplicate Username"});
  }
})
app.listen(port, () => {
  console.log("listening on port 8000 . . .");
});
