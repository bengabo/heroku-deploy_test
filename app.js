const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send("Ben API is there")
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if(err){
    console.log("Something wrong!")
  } else {
    console.log(`Server running on port ${PORT}`)
  }
});
