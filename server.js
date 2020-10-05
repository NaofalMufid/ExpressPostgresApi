const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

var corsOptions = {
    origin: "http://localhost:8085"
}

app.use(cors(corsOptions))

// parse request content-type : application/json
app.use(bodyParser.json())

// parse request
app.use(bodyParser.urlencoded({ extended: true }))

// model
const db = require("./app/models")
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db")
})

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Selamat datang" })
})

// route app
require("./app/routes/turorial.routes")(app)
// set port
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})