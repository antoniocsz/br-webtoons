const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const NoticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

NoticeSchema.plugin(mongoosePaginate);

mongoose.model("Notice", NoticeSchema);
