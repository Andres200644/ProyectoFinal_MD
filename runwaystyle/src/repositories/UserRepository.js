import User from '../models/User.js';

class UserRepository {
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async getUserById(userId) {
    return await User.findById(userId);
  }

  async updateUserRole(userId, role) {
    return await User.findByIdAndUpdate(userId, { role }, { new: true });
  }
}

export default new UserRepository();
