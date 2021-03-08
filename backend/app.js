const express = require("express");
const path = require("path");

module.exports = (port) => {
  const app = express();

  app.use("/", express.static(path.join(__dirname, "../", "dist")));
  app.use("/about", express.static(path.join(__dirname, "../", "dist")));

  //   app.get("/", (req, res) => {
  //     express.static('public')
  //     res.send("Hello World!");
  //   });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};
