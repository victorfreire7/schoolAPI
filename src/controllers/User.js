import User from '../models/User';

class Controller {
  async store(req, res) {
    try {
      await User.create(req.body)
      .then((user) => {
        const { id, nome, email } = user;
        return res.json({ id, nome, email })
      })
    } catch {
      return res.status(400).json({
        errors: ['email must be unique']
      });
    }
  }

  async delete(req, res) {
    try {
      await User.findByPk(req.user_id) // aonde "user_id" é o dado retornado pleo JWT.
      .then((user) => {
        if(!user){
            return res.status(400).json({
              errors: ['user not found']
            });
        } else {
          user.destroy();
          res.status(200).json({
            success: ['user delete successfuly']
          });
        }
      })
    } catch (e) {
      return res.status(400).json(e.errors);
    }
  }

  async update(req, res) {
    try {
      await User.findByPk(req.user_id) // aonde "user_id" é o dado retornado pleo JWT.
      .then((user) => {
        if(!user){
            return res.status(400).json({
              errors: ['user not found']
            })
        } else {
          user.update(req.body);
          res.json(user)
        }
      })
    } catch (e) {
      return res.status(400).json(e.errors);
    }
  }
}

export default new Controller();
