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

// Magic 8 Ball
const answers = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"
]

app.get("/magic/:question", (req, res) => {
//localhost:3000/magic/Will%20I%20Be%20A%20Millionaire
    let question = req.params.question
    let randomAnswer = answers[Math.floor(Math.random() * answers.length)]
    res.send(
        `<h1>You asked: ${question}?</h1>
        <h1>Magic 8 Ball Says: ${randomAnswer}</h1>
        `)
})


app.listen(3000, () => {
    console.log("You are headbanging to the heavy hums of Halloween on port 3000...")
})