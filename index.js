// importing express framework
const express = require("express");
const app = express();
// Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("It works Clark!");
});
// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running on 7000");
});
console.log("appvre ");
module.exports = app;
