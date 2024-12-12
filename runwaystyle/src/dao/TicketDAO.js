import Ticket from '../models/Ticket.js';

class TicketDAO {
  async create(ticketData) {
    return await Ticket.create(ticketData);
  }

  async getById(ticketId) {
    return await Ticket.findById(ticketId);
  }

  async getAll() {
    return await Ticket.find();
  }
}

export default new TicketDAO();
