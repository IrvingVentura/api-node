const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
const { limit, offset } = req.query;
if(limit && offset) {
    res.json({
        limit,
        offset
    });
} else {
    res.send('No hay parametros');
}
});


module.exports = router;

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//     const { categoryId, productId} = req.params;
//     res.json({
//         categoryId,
//         productId,
// });
// })
