const conquistaRepository = require('../repositories/conquistaRepository');

class ConquistaService{
    async getConquista(){
        return conquistaRepository.findAll();
    }

    async createConquista(conquista){
        if(conquista.nameConquista.lenght > 50){
            throw new Error('Nome muito Grande')
        }

        if(conquista.descConquista.lenght > 500){
            throw new Error('Nome muito Grande')
        }


        return conquistaRepository.createConquista(conquista);
    }
}

module.exports = new ConquistaService();