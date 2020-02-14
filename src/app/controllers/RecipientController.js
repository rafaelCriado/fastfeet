import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    try {
      const recipient = await Recipient.create({
        ...req.body,
        user_id: req.userId,
      });

      return res.json(recipient);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async index(req, res) {
    const recipients = await Recipient.findAndCountAll();
    return res.json(recipients);
  }

  async detail(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);

    if (!recipient)
      return res.status(400).json({ error: 'Recipient not exists' });

    return res.json(recipient);
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const recipient = await Recipient.findByPk(id);

      if (!recipient)
        return res.status(400).json({ error: 'Recipient not exists' });

      await recipient.update(req.body);

      return res.json(recipient);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const recipient = await Recipient.findByPk(id);

      if (!recipient)
        return res.status(400).json({ error: 'Recipient not exists' });

      await recipient.destroy();

      return res.json(recipient);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default new RecipientController();
