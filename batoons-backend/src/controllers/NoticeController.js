const mongoose = require("mongoose");

const Notice = mongoose.model("Notice");

module.exports = {
  // ShowAll()
  async index(req, res) {
    const { page = 1 } = req.query;
    const notices = await Notice.paginate({}, { page, limit: 10 });

    return res.json(notices);
  },

  // ShowById()
  async show(req, res) {
    const notice = await Notice.findById(req.params.id);

    return res.json(notice);
  },

  // Create()
  async store(req, res) {
    const notice = await Notice.create(req.body);

    return res.json(notice);
  },

  // UpdateById()
  async update(req, res) {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(notice);
  },

  // DeleteById()
  async destroy(req, res) {
    await Notice.findByIdAndDelete(req.params.id);

    return res.send();
  },
};
