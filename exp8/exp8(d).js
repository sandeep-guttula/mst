const express = require("express");
const session = require("express-session");
const app = express();
var PORT = process.env.port || 3000;
app.use(
  session({
    secret: "Your_Secret_Key",
    resave: true,
    saveUninitialized: true,
  })
);
app.get("/", function (req, res) {
  req.session.name = "Sessionname:alr";
  return res.send("Session Set");
});
app.get("/session", function (req, res) {
  var name = req.session.name;
  return res.send(name);
});
app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT :", PORT);
});
