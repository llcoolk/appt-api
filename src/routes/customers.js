const router = require('express').Router();
const RoutesCtrl = require('../controllers/Customers');

router.get('/', RoutesCtrl.getAll);
router.get('/:id', RoutesCtrl.getOne);
router.post('/', RoutesCtrl.create);
router.put('/:id', RoutesCtrl.update);
router.delete('/:id', RoutesCtrl.remove);

module.exports = router;