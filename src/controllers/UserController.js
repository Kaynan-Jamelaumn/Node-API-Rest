import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body)
      return res.json({
        blabla: newUser,
      });
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map(error => error.message
        )
      });
    }

  }
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    }
    catch (e) {
      return res.json(null)
    }
  }
  async filterById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    }
    catch (e) {
      return res.json(null)
    }
  }


  async update(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({
        errors: ['Missing ID'],
      });
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(400).json({
        errors: ['User not found'],
      });
      const newData = await user.update(req.body);
      return res.json(newData);
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map(error => error.message
        )
      });
    }
  }


  async delete(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({
        errors: ['Missing ID'],
      });
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(400).json({
        errors: ['User not found'],
      });
      await user.destroy();
      return res.json(user);
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map(error => error.message
        )
      });
    }
  }







}
export default new UserController();
