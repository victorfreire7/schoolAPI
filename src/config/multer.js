import multer from "multer";
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000)

//por este arquivo 'funcionar como um middleware', o arquivo 'file' pode ser acessado na proxima requisicao (neste caso, o controller)
export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    }
  })
}
