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
  }
}

export default new HomeController();
