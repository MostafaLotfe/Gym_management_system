const mongoose= require('mongoose')
const dotenv= require('dotenv')
dotenv.config({path: './config.env'})

const app= require("./app")
mongoose.connect(process.env.DATABASE_LOCAL,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology:true
    }).then(con => console.log("Connecting to database..."))



// console.log(process.env)
const port= process.env.PORT ||  3000
app.listen(port, ()=> console.log(`Listinning on port ${port}...`))