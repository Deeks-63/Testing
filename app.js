require('dotenv').config()

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My Routes
const authRoutes = require("./routes/auth_routes")
const userRoutes = require("./routes/user")
//DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(() => {
    console.log("DB connected");
});
//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//My Routes
app.use("/api",authRoutes)
app.use("/api",userRoutes)
//PORT
const port = process.env.PORT || 8000
//Starting a Server
app.listen(port, ()=> {
    console.log(`App is running on ${port}`);
})