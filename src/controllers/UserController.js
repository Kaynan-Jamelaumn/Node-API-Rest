import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body)
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
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(users);
    }
    catch (e) {
      return res.json(null)
    }
  }
  async filterById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, email, name } = user
      return res.json({ id, email, name });
    }
    catch (e) {
      return res.json(null)
    }
  }


  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(400).json({
        errors: ['User not found'],
      });
      const newData = await user.update(req.body);
      const { id, email, name } = newData
      return res.json({ id, email, name });
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
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(400).json({
        errors: ['User not found'],
      });
      await user.destroy();
      return res.json(null);
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
