const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("appName", "batman bso");
app.set("port", 5001);
app.set("view engine", "ejs");

app.get("/user", (req, res) => {
  res.render("index.ejs");
});

app.use(express.json());
app.use(morgan("dev"));

app.get("/about", (req, res) => {
  res.send("Hello bots about");
});

app.post("/client/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("Data received");
});

app.get("/user", (req, res) => {
  res.json({
    username: "Olga",
    category: "Girlfriend",
  });
});

app.get("/product", (req, res) => {
  res.json([
    {
      name: "Laptop",
      model: "Lenovo",
      price: 500,
    },
    { name: "Pc", model: "Hp", price: 450 },
  ]);
});

/* For rendering a file in html  */
app.use(express.static("public"));

app.listen(5001, () => {
  console.log(app.get("appName"));
  console.log("Server on port", app.get("port"));
});
