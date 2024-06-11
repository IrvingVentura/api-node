const Joi = require('joi');

const id_compartir = Joi.number().integer();
const id_publicacion = Joi.number().integer();
const id_usuario = Joi.number().integer();
const fecha_compartido = Joi.date().iso();

const createCompartirSchema = Joi.object({
  id_publicacion: id_publicacion.required(),
  id_usuario: id_usuario.required(),
  fecha_compartido: fecha_compartido.required()
});

const updateCompartirSchema = Joi.object({
  id_publicacion: id_publicacion,
  id_usuario: id_usuario,
  fecha_compartido: fecha_compartido
});

const getCompartirSchema = Joi.object({
  id_compartir: id_compartir.required(),
});

module.exports = { createCompartirSchema, updateCompartirSchema, getCompartirSchema };
