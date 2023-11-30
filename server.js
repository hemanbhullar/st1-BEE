const express = require("express");
const mongoose = require("mongoose");
// const router = require("./routes/book-routes");

const app = express();
//MiddleWares: which will convert all the database and response to the JSON
app.use(express.json());

app.use('/posts', router)//localhost
app.use('/comment', router) //localhost

mongoose.connect("mongodb+srv://admin1:FPksa6KIzDlmLd8b@cluster0.tcqj3ix.mongodb.net/Viva?retryWrites=true&w=majority").then(()=>console.log("connect hogya Bhaiyo"))
.then(()=> {
    app.listen(5000);
}).catch((error)=>console.log("Error agya hmmm"));