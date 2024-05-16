const express = require('express');

// Create Express app
const app = express();
const port = 3001;

app.use((req, res, next)=>{
     console.log("middleware one");
     next();
})

app.use((req, res, next)=>{
     console.log("middleware two");
     next();
})

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});



// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
