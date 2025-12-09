import jwt from 'jsonwebtoken';
import User from '../models/User';

class Controller {
  async store(req, res) {
    const { email = '', password = ''} = req.body;

    if(!email || !password) {
      return res.status(401).json({
        errors: ['email or password missing']
      });
    }

    const user = await User.findOne({where: { email }});
    if(!user) {
      return res.status(401).json({
        errors: ['user not found']
      });
    }
    if(!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['invalid email or password']
      });
    }

    const { id } = user;
    const token = jwt.sign(
      { id, email }, //dados que eu vou recuperar ao enviar o jwt
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION }
    );

    return res.json({token});
  }
}

export default new Controller();
