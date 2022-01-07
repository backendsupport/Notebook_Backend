const mongoose = require('mongoose');
const user=process.env.DB_USER;
const pass=process.env.DB_PASSWORD;
const name=process.env.DB_NAME;
const connectToMongo=()=>{
    mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.nsa5j.mongodb.net/${name}?retryWrites=true&w=majority`).then(()=>{
    }).catch((error)=>{
    console.log(error);
    });
}
module.exports=connectToMongo;