const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to Spookytown!")
})

// Greetings
app.get("/greeting/", (req, res) => {
    res.send("Hello, stranger.")
})

app.get("/greeting/:name", (req, res) => {
    res.send(`Howdy, ${req.params.name}`)
})

// Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`Your tip will be $${ (parseInt(req.params.total) * parseInt(req.params.tipPercentage)) / 100}`)
})





app.listen(3000, () => {
    console.log("You are headbanging to the heavy hums of Halloween on port 3000...")
})