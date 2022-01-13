import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// - não deveriam existir em aplicações normais, pois a mostra de todos os usuários ou o retorno
// - de todos os dados de um usuário não são situações normais, e podem ser vistos como uma falha de segurança.
// - poderiam existir com certas modificações para algum usuário com privilégios de admin
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
  index -> lista todos os usuários -> GET
  store/create -> cria um usuário -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuário -> PATCH OU PUT
*/
