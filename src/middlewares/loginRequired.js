import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['login required']
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    await User.findOne(
      {
        where: {
          id,
          email
        }
      }
    )
    .then((user) => {
      if(!user){
        return res.status(401).json({
          errors: ['invalid user']
        });
      } else {
        req.user_id = id;
        req.user_email = email;
        return next();
      }
    })
  } catch {
    return res.status(401).json({
      errors: ['invalid token']
    });
  }
}
