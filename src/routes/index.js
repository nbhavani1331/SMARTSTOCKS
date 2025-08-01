const{Router}=require('express');
const IndexControllerController=require('../controllers/index');

const router = Router();
const indexController = new IndexController();

function setRoutes(app){
    app.use('/api/stocks', router);
    router.get('/', indexController.getStocks.bind(indexController));
    router.post('/', indexController.createStock.bind(indexController));
    router.put('/:id', indexController.updateStock.bind(indexController));
    router.delete('/:id', indexController.deleteStock.bind(indexController));

}

module.exports = { setRoutes };