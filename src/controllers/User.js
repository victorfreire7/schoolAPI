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
    try {
      await User.create(req.body)
      .then((result) => {
        res.json(result)
      })
    } catch (e) {
      res.status(400).json(e.errors)
    }
  }
}

export default new Controller();
