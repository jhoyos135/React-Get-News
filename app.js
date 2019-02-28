
const express = require('express');

const app = express();

if(process.env.NODE_ENV) {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};


const PORT = process.env.PORT || 4000;
app.listen(PORT)
console.log(`listening to port ${PORT}`);
