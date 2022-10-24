const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require("cors");
const { response } = require("express");
app.use(cors());
app.use(express.json());
var blogdata = [
  {
    username: "Abhijit",
    userid: "abhipatil8806741994",
    blog: "This is my first blog",
  },
  {
    username: "Abhijit",
    userid: "abhipatil8806741994",
    blog: "This is my first blog 1",
  },
];

app.get("/viewblog", (req, res) => {
  //   res.writeHead(200, { "Content-Type": "application/json" });
  res.json(blogdata);
});

app.post("/createblog", (req, res) => {
  const result = req.body;
  blogdata.push(result);
  console.log(result);

  res.end();
});

app.listen(3500, () => {
  console.log("Server Listeining on 3500 Port");
});
