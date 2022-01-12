import User from '../models/User';

class TokenController {
  async store(req, res) {
    res.json('ok');
  }
}

export default new TokenController();
