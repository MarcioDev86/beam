const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({ origin: true });
const fs = require("fs");

const app = express();
app.use(cors);
app.use(express.json({ extended: false }));

/*
app.get("/", (req, res) => {
  res.send(`
      <!doctype html>
      <head>
        <title>Time</title>
        <link rel="stylesheet" href="/style.css">
        <script src="/script.js"></script>
      </head>
      <body>
        <p>In London, the clock strikes:
          <span id="bongs">${"BONG ".repeat(hours)}</span></p>
        <button onClick="refresh(this)">Refresh</button>
      </body>
    </html>`);
});*/

app.get("/api", (req, res) => {
  fs.readFile(__dirname + "/" + "codes.json", "utf-8", (err, data) => {
    res.send(data);
  });
});

exports.app = functions.https.onRequest(app);
