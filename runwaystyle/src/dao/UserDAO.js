import User from '../models/User.js';

class UserDAO {
  async getById(id) {
    return await User.findById(id);
  }

  async getByEmail(email) {
    return await User.findOne({ email });
  }

  async create(data) {
    return await User.create(data);
  }
}

export default new UserDAO();
