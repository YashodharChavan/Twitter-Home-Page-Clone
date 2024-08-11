const express = require("express"); 
const app = express();
const port = 3000;


app.use(express.static("public")); 

 

app.get("/api", (req, res) => { 
  res.json({a: 2, b: 23, userName: ["harry", "Hetty"]});
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


// Start server and log URL
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
