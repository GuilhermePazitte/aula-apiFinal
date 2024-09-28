const express = require('express');
const ConquistaService = require('../services/conquistaService');

const router = express.Router();

router.post('/registrar', async(req, res) =>{
    try{
        const { nameConquista, descConquista } = req.body;
        const Conquista = ConquistaService.createConquista({ nameConquista, descConquista });
        res.json(Conquista);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

router.get('/registrar', async(req, res) =>{
    try{
        const conquistas = await ConquistaService.getConquista();
        res.json(conquistas);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = router;