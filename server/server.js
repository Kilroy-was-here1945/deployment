const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use("/styles", express.static(path.join(__dirname, "../public/html.css")))



//endpoints
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.css"))
});


const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`we doin it ${port}`)
})