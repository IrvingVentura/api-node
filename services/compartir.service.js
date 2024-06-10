const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class CompartirService {
  constructor() {
    this.compartir = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.compartir.push({
        id_compartir: faker.commerce.price({ min: 1, max: 1000 }),
        id_publicacion: faker.commerce.price({ min: 1, max: 1000 }),
        id_usuario: faker.commerce.price({ min: 1, max: 1000 }),
        fecha_compartido: faker.date.recent(),
      });
    }
  }

  async create(data) {
    const newCompartir = {
      id_compartir: faker.datatype.number({ min: 1001, max: 2000 }),
      ...data
    }
    this.compartir.push(newCompartir);
    return newCompartir;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.compartir);
      }, 5000);
    });
  }

  async findOne(id) {
    const compartir = this.compartir.find(item => item.id_compartir === id);
    if (!compartir) {
      throw boom.notFound('compartir not found');
    }
    return compartir;
  }

  async update(id, changes) {
    const index = this.compartir.findIndex(item => item.id_compartir === id);
    if (index === -1) {
      throw boom.notFound('compartir not found');
    }
    const compartir = this.compartir[index];
    this.compartir[index] = {
      ...compartir,
      ...changes
    };
    return this.compartir[index];
  }

  async delete(id) {
    const index = this.compartir.findIndex(item => item.id_compartir === id);
    if (index === -1) {
      throw boom.notFound('compartir not found');
    }
    this.compartir.splice(index, 1);
    return { id };
  }
}

module.exports = CompartirService;
