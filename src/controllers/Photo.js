import multer from 'multer';
import config from '../config/multer';
const upload = multer(config).single('photo');

class Controller {
  async store(req, res){
    return upload(req, res, (e) => {
      if(e) {
        return res.status(400).json({ // retorno um bad request
          errors: ['file incompatible'] // verifico se há algum erro (um arquivo nao desejado, por exemplo)
        });
      }

      res.json(req.file);
    });
  }
}

export default new Controller();
