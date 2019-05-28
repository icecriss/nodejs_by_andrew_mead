const path = require("path");
const express = require("express");

const app = express();
const port = 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

// we set the use of handlebars
app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Ice"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Ice"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    helpText: "This is some helpful text."
  });
});

app.get("/weather", (req, res) => {
  res.render("weather", {
    title: "Weather page",
    forecast: "It is currently 25°C",
    location: "Cucuron, PACA, France"
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
