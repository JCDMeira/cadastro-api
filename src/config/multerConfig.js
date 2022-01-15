import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStoraged({
    destination: (req, file, cb) => {
      // primeiro parâmetro é o que ocorre no caso de erro, segundo o caminho para salvar a foto
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      // primeiro prâmetro é o caso de erro, segundo o nome do arquivo.
      // usando a data tende a ser único, e o extname da a extensão do arquivo original
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
