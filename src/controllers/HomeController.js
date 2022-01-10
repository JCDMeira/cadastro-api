import Aluno from '../models/Aluno';
class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Jean',
      sobrenome: 'Meira',
      email: 'jean.meira10@hotmail.com',
      idade: 24,
      peso: 60,
      altura: 1.78,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
