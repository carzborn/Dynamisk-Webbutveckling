const PokemonFriends = require('../models/pokemonfriends');
const models = require('../models/pokemoncards');

const read =  async(req, res) => {
    try{
        let card;

        card = await PokemonFriends.fetchAll();
        return res.status(200).send({ 
            success: true,
            data: {
                card
            }
        });
    } catch(err){
        return res.status(500).send(
            {
                success: false,
                 data: err.message
            }
        );
    }
};

module.exports ={
    read
}