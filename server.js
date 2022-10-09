const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to Spookytown!")
})

app.get("/greeting/", (req, res) => {
    res.send("Hello, stranger.")
})

app.get("/greeting/:name", (req, res) => {
    res.send(`Howdy, ${req.params.name}`)
})






app.listen(3000, () => {
    console.log("You are headbanging to the heavy hums of Halloween on port 3000...")
})