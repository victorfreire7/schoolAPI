import User from '../models/User';

class Controller {
  async index(req, res) {
    try {
      await User.findAll()
      .then((users) => {
        return res.json(users)
      })
    } catch {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      await User.create(req.body)
      .then((user) => {
        return res.json(user)
      })
    } catch (e) {
      return res.status(400).json(e.errors);
    }
  }

  async show(req, res) {
    try {
      if(!req.params.id){
        return res.status(400).json({
          errors: ['missing id']
        });
      }

      await User.findByPk(req.params.id)
      .then((user) => {
        if(!user){
            return res.status(400).json({
              errors: ['user not found']
            });
        } else {
          res.json(user);
        }
      })
    } catch (e) {
      return res.status(400).json(e.errors);
    }
  }

  async delete(req, res) {
    try {
      await User.findByPk(req.params.id)
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
      if(!req.params.id){
        return res.status(400).json({
          errors: ['missing id']
        });
      }

      await User.findByPk(req.params.id)
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
