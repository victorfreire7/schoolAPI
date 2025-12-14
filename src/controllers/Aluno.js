import Aluno from '../models/Aluno';
import Photo from '../models/Photo';

class Controller {
  async index(req, res) {
    await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['filename']
      }
    })
    .then((aluno) => {
      return res.json(aluno);
    })
  }

  async store(req, res) {
    try {
      await Aluno.create(req.body)
      .then((aluno) => {
        return res.json(aluno)
      })
    } catch (e) {
      return res.status(400).json(e.errors);
    }
  }

  async show(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['id missing']
        });
      }

      await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename']
        }
      })
      .then((aluno) => {
        if(!aluno) {
          return res.status(404).json({
            errors: ['aluno not found ']
          });
        } else {
          return res.json(aluno);
        }
      })
    } catch (e) {
      return res.status(400).json(e.errors);
    }
  }

  async delete(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['id missing']
        });
      }

      await Aluno.findByPk(req.params.id)
      .then((aluno) => {
        if(!aluno) {
          return res.status(404).json({
            errors: ['aluno not found ']
          });
        } else {
          aluno.destroy();
          return res.status(200).json({
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
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['id missing']
        });
      }

      await Aluno.findByPk(req.params.id)
      .then((aluno) => {
        if(!aluno) {
          return res.status(404).json({
            errors: ['aluno not found ']
          });
        } else {
          aluno.update(req.body);
          return res.json(aluno);
        }
      })
    } catch (e) {
      return res.status(400).json(e.errors);
    }
  }
}

export default new Controller();
