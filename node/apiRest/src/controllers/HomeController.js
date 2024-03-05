<<<<<<< HEAD
import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Bruna',
      sobrenome: 'Pacheco',
      email: 'bruna@gmail.com',
      idade: 32,
      peso: 64.2,
      altura: 1.63,
    });
    res.json(novoAluno);
=======
class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
>>>>>>> 8a489c392e8da5a2345f192d646798670dd2b6e6
  }
}

export default new HomeController();
