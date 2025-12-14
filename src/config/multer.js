import multer from "multer";
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000); // sera usado posteriormente para mudar o nome do arquivo de upload

//por este arquivo 'funcionar como um middleware', o arquivo 'file' pode ser acessado na proxima requisicao (neste caso, o controller)
export default {
  fileFilter: (req, file, cb) => {
    if(file.mimetype != 'image/png' && file.mimetype != 'image/jpeg'){ // aceito apenas arquivos de imagem para upload
      return cb(new multer.MulterError(`${file.mimetype} incompatible`)); // a funçao cb() recebe como primeiroo argumento um erro; que nesse caso foi preenchido
    }

    return cb(null, true); // retorno o argumento de erro como nulo, e o segundo como true, para prosseguir para multer.diskStorage
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => { // seto o destino que os uploads serao guardados
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => { // funçao que altera o nome dos arquivos
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`); // seto o arquivo como: 1º a data de upload; 2º um numero aleatorio; 3º a extensao de origem.
    }
  })
}
