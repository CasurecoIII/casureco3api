const express = require('express');
const bodyParser = require('body-parser');

const dataRoutes = require('./routes/accountroute');



const app = express();
const port = process.env.PORT || 3308;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTER MOUNTS
app.use('/api', dataRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
