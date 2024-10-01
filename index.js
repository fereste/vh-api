const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let database = [];

app.use(cors());
app.use(express.json());

app.post('/orders', (req, res) => {
    database.push({
        id: req.body.id,
        productName: req.body.productName,
    });
    res.send(`¡Pedido tomado! ID: ${req.body.id} - Producto: ${req.body.productName}`);
});

app.get('/orders', (req, res) => {
    res.send(database);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
