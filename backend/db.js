const mongoose=require('mongoose')
const url=process.env.MONGO_URI

function connectedToMongo(){
    mongoose.connect(url)
    .then(()=>console.log("Connected to database Successfully"))
    .catch((err)=>console.log(err.message))
}

module.exports=connectedToMongo;