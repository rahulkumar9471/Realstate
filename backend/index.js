import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(PORT, () => {
    console.log('app listening on port ' + PORT);
})

