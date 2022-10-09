const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to Spookytown!")
})








app.listen(3000, () => {
    console.log("You are headbanging to the heavy hums of Halloween on port 3000...")
})