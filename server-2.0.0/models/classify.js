const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classifySchema = new Schema({
  id: Number,
  title: {
    type: String,
    unique: true,
  },
  value: {
    type: String,
    unique: true,
  },
  createAt: {                        // 创建日期
    type: Date,
    default: Date.now
  },
  updateAt: {                        // 更新日期
    type: Date,
    default: Date.now
  },
});


classifySchema.index({ id: 1 });

// 时间更新
classifySchema.pre('findOneAndUpdate', function (next) {
  this.findOneAndUpdate({}, { updateAt: Date.now() });
});

const Classify = mongoose.model('Classify', classifySchema)

module.exports = Classify;