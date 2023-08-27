import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const studemts = await Student.findAll();
    res.json({
      blabla: studemts,
    });
  }

  async create(req, res) {
    try {
      const newUser = await Student.create(req.body)
      const { id, email, name } = newUser;
      return res.json({ id, email, name });
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map(error => error.message
        )
      });
    }

  }

  async filterById(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: 'Id not provided'
        })
      }
      const user = await Student.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: 'Student not found'
        })
      }
      const { id, email, name } = user
      return res.json({ id, email, name });
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map(error => error.message)
      })
    }
  }


  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: 'Id not provided'
        })
      }
      const student = await Student.findByPk(req.params.id);
      if (!student) {
        return res.status(400).json({
          errors: 'Student not found'
        })
      }
      const newData = await student.update(req.body);
      const { id, email, name } = newData
      return res.json({ id, email, name });
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map(error => error.message)
      })
    }
  }


  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: 'Id not provided'
        })
      }
      const student = await Student.findByPk(req.params.id);
      if (!student) {
        return res.status(400).json({
          errors: 'Student not found'
        })
      }
      await student.destroy();
      return res.json(null);
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map(error => error.message)
      })
    }
  }










}

export default new StudentController();
