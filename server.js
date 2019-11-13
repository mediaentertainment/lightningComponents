var express = require('express')
var app = express()
app.use(express.static('Lightning-Demo-App-master'))
app.listen(8081,()=>{
    console.log("listening at 8081")
})