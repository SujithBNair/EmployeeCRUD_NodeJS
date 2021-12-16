const express   =  require('express')// include express
const mongoose  = require('mongoose') // include mongo
const url='mongodb://localhost/cruddb2'
const cors = require('cors'); // for handling cores issue install npm i cors --save 
const app= express() // start express
app.use(cors());
// establish connetion to mogodb
mongoose.connect(url)
const con=mongoose.connection
con.on('open',()=>{
    console.log('connected....')
})
app.use(express.json())


// for routing
const employeeRouter=require('./routers/employees')
app.use('/employee',employeeRouter)

// start the server and listen the port 9000
app.listen(9000,()=>{
    console.log('server started..');
})


