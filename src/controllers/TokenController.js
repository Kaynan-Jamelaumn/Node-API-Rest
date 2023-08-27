import User from '../models/User';
import jwt from 'jsonwebtoken';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Invalid Credentials'],
      })
    }
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(401).json({
        errors: ['User not found'],
      })
    }
    if (!(await user.isValidPassword(password))) {
      return res.status(401).json({
        errors: ['Invalid Password'],
      })
    }
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    res.json({
      token: token
    });
  }
}
export default new TokenController();
