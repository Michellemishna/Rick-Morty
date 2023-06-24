const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');
const { postFav, getFav, deleteFav } = require('../handlers/charactershandler')

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:detailId', getCharDetail);

router.post('/rickandmorty/fav', postFav)

router.get('/rickandmorty/fav', getFav)

router.delete('/rickandmorty/fav/:id', deleteFav)

module.exports = router;