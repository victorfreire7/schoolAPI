import multer from 'multer';
import config from '../config/multer';
import Photo from '../models/Photo';
import Aluno from '../models/Aluno';

const upload = multer(config).single('photo');

class Controller {
  store(req, res){
    return upload(req, res, async (e) => {
      if(e || !req.file) {
        return res.status(400).json({ // retorno um bad request
          errors: ['file incompatible'] // verifico se há algum erro (um arquivo nao desejado, por exemplo)
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const aluno = await Aluno.findByPk(aluno_id);
        if(!aluno){
          return res.status(404).json({
            errors: ['user not found']
          });
        } else {
          const photo = await Photo.create({
            originalname,
            filename,
            aluno_id
          })

          return res.json(photo)
        }
      } catch (e) {
        return res.status(400).json(e.errors);
      }

    });
  }
}

export default new Controller();
