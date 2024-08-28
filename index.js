const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/orders', (req, res) => {
    res.send(`¡Pedido tomado! ID: ${req.body.id}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
