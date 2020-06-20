const express = require("express");
const app=express();
const morgan = require("morgan");
const { json } = require("express");

app.set("port", process.env.PORT ||3000);
app.set("json spaces", 2)
//Routes
app.use(require("./routes/index"));
app.use("/api/movies",require("./routes/movies"));

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(app.get("port"), () =>{
    console.log(`Server on port ${app.get("port")}`);
});