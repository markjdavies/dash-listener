const express = require("express");
const app = express();

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

// Listen on port 5000
app.listen(port, () => {
    console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});


// Home route
app.get("/ping", (req, res) => {
    res.send("I'm here");
});

// Mock APIs
app.get("/press/", (req, res) => {
    const buttonName = req.query.buttonName;
    res.send(`You pressed ${buttonName}`);
});
