const express = require("express");
const path = require("path");
const app = express();
const expBars = require("express-handlebars");
const logger = require("./middleware/looger");
const members = require("./Members");

/* app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
}); */

// Handlebar Middleware
app.engine("handlebars", expBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//initialize middleware
//app.use(logger);

// HANDLEBARS
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members,
  })
);

//STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
