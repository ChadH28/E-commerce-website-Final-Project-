import express from 'express';
import data from './Data';

const app = express();

// creating pathway
app.get('/api/products', (req,res) => {
    res.send(data.products);
});

app.listen(5000, () => {console.log('SERVER STARTED AT http://localhost:5000')});