import { Animal } from "../model/Animal.js";

export class AnimalService {
  constructor() {}

  async add(animal) {
    await Animal.create(animal);
  }

  async findAll() {
    return await Animal.findAll();
  }

  async findById(id) {
    return await Animal.findOne({
      where: { id },
    });
  }

  async deleteOne(id) {
    const animal = await this.findById(id);
    if (!animal) {
      throw new Error("not found");
    }
    await animal.destroy();
  }
}
