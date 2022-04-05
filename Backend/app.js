require("dotenv").config();
const express = require("express");
const app = express();
const appPort = process.env.APP_PORT
const userRouter = require("./api/users/user.router");
var cors = require('cors');

// use it before all route definitions
app.use(cors({
    origin: 'http://localhost:8080',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));


//json-al kommunikáljon
app.use(express.json());

//Minden /api/users-re lesz felpítve:
//pl.: /api/users/login, /api/users/1 stb.
app.use("/api", userRouter);

// app.get("/api", (req, res) => {
//     res.json({
//         success: 1,
//         message: "this is rest api working"
//     });
// });


app.listen(appPort, () => {
    console.log(`http://localhost:${appPort}`);
})