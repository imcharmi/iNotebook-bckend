const express = require('express');
const connectMongo = require("./db")

const app = express()
app.use(express.json())
connectMongo()

//routes
app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes" ,require("./routes/notes"))

app.listen(8000)