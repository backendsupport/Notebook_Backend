const connectToMongo=require('./db');
connectToMongo();
const express = require('express');
const app = express();
const port = 5000;
var cors=require('cors');
const corsOptions = {
  origin: "*",
};
app.options('*', cors(corsOptions));

app.use(cors(corsOptions));

app.use(express.json());
//Availabe Notes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.get('/', (req, res) => {
  res.send(`There is Nothing here`)
})

app.listen(process.env.PORT || port, () => {
  console.log(`iNotebook_Backend listening at http://localhost:${port}`)
})
  
