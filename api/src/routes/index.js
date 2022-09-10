const {Router} = require('express');
const controllers = require('../controllers/index');

const router = Router();

router.post('/load',controllers.loadDB);
router.post('/',controllers.create);
router.get('/',controllers.read);
router.put('/:id',controllers.update);
router.delete('/:id',controllers.delete);

module.exports = router;