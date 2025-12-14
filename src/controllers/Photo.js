import multer from 'multer';
import config from '../config/multer';
const upload = multer(config).single('photo');

class Controller {
  async store(req, res){
    return upload(req, res, (e) => {
      if(e) {
        return res.status(400).json({
          errors: ['file incompatible']
        });
      }

      res.json(req.file);
    });
  }
}

export default new Controller();
