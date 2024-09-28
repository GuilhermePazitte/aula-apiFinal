const Conquista = require('../models/cards')

class CardRepository{
    async createCard(card){
        return await Conquista.create(card);
    }

    async findAll(){
        return await Conquista.findAll({
            where: {
                deleted: false
            }
        });
    }
}

module.exports = new CardRepository();