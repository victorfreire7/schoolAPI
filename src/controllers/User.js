import User from '../models/User';

class Controller {
  async index(req, res) {
    res.json(
      {
        "index": true
      }
    )
  }

  async store(req, res) {
    const novoUser = await User.create({
      nome: 'victor hugo',
      email: 'email@email.com',
      password: '123456'
    });

    res.json(novoUser)
  }
}

export default new Controller();
