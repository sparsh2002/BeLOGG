const mongoose = require('mongoose')
const url = "mongodb+srv://sparsh2002:sparsh3435@mycluster.bt23o.mongodb.net/?retryWrites=true&w=majority"

module.exports.connect = () =>{
    mongoose.connect(url , {
        useNewUrlParser :true,
        useUnifiedTopology :true,
    }).then(()=>{
        console.log('MongoDB connected successfully!')
    }).catch((error)=>{
        console.log("Error: " , error)
    })
}