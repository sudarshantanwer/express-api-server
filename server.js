const express = require('express');
const parser = require("body-parser")

// Create Express app
const app = express();
const port = 3001;
app.use(parser.urlencoded({extended: true}))

app.use((req, res, next)=>{
     console.log(req.body);
     next();
})

app.use((req, res, next)=>{
     console.log("middleware two");
     next();
})

app.use("/about", (req, res, next)=>{
    res.send('<h2>About</h2>');
})

app.use("/products", (req, res, next)=>{
    res.send('<h2>Product list</h2>');
})

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});



// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
