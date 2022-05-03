const mongoose=require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/MERATHAN",{
useNewUrlParser:true,
}).then(()=>{
    console.log(" database connection successful");
}).catch((e)=>{
    console.log("no connection",e.message);
})