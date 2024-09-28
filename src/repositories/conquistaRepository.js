const Conquista = require('../models/conquista')

class ConquistaRepository{
    async createConquista(conquista){
        return await Conquista.create(conquista);
    }
 
    async findAll(){
        return await Conquista.findAll();
    }
}

module.exports = new ConquistaRepository();