const express = require('express');
const router = express.Router();

// Ejemplo de pedidos
const orders = [
    { id: 1, product: 'Product 1', quantity: 2 },
    { id: 2, product: 'Product 2', quantity: 5 },
];

// Ruta para obtener todos los pedidos
router.get('/', (req, res) => {
    res.status(200).json(orders);
});

// Ruta para obtener un pedido específico por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const order = orders.find(o => o.id === parseInt(id));

    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

module.exports = router;
