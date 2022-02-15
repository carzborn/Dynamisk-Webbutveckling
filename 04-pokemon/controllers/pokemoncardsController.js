const PokemonCards = require('../models/pokemoncards');
const models = require('../models/pokemoncards');

const create = async (req, res) => {
    try {
        let card = new PokemonCards(req.body).save();

        return res.status(201).send(
            {
                success: true,
                data: {
                    card
                }
            }
        );

    }catch(err) {
        return res.status(500).send(
            {
                success: false,
                data: err.message
            }
        );
    }
};

const read =  async(req, res) => {
    try{
        let card;

        if(req.params.id){
            card = await PokemonCards.where( {"id" : req.params.id} ).fetch({require: false});
        }else{
            card = await PokemonCards.fetchAll();
        }

        if(!card){
            return res.status(400).send({
                success: false,
                data: "Din mamma på en pizza"
            });
        }

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

const update = async(req, res) => {
    try {
        let card = await  PokemonCards.where( { "id" : req.params.id} ).fetch(  {require: true}  );

        card = await card.set(req.body).save();

        return res.status(200).send(
            {
                success: true,
                data: {
                    card
                }
            }
        )

    } catch (err) {
        return res.status(500).send(
            {
                success: false,
                 data: err.message
            }
        );
    }

};

const remove = async(req,res) =>{
    try {
        let card = await  PokemonCards.where( { "id" : req.params.id} ).fetch(  {require: true}  );

        card = await card.set(req.body).destroy();

        return res.status(200).send(
            {
                success: true,
                data: {
                    card
                }
            }
        )

    } catch (error) {
        return res.status(500).send(
            {
                success: false,
                 data: err.message
            }
        );
    }
};


module.exports ={
    read,
    create,
    update,
    remove
}