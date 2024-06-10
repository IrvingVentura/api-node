const express = require('express');

const CompartirService = require('./../services/compartir.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCompartirSchema, updateCompartirSchema, getCompartirSchema } = require('./../schemas/compartir.schema');

const router = express.Router();
const service = new CompartirService();

router.get('/', async (req, res) => {
  const compartir = await service.find();
  res.json(compartir);
});

router.get('/:id_compartir',
  validatorHandler(getCompartirSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id_compartir } = req.params;
      const compartir = await service.findOne(id_compartir);
      res.json(compartir);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCompartirSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newCompartir = await service.create(body);
    res.status(201).json(newCompartir);
  }
);

router.patch('/:id_compartir',
  validatorHandler(getCompartirSchema, 'params'),
  validatorHandler(updateCompartirSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id_compartir } = req.params;
      const body = req.body;
      const compartir = await service.update(id_compartir, body);
      res.json(compartir);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id_compartir', async (req, res) => {
  const { id_compartir } = req.params;
  const rta = await service.delete(id_compartir);
  res.json(rta);
});

module.exports = router;
