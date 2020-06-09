const mongoose = require('mongoose');

const clixoomSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: {type: String, required: true},
  Name2: {type: String, required: true},
  MemberId: {type: String, required: true},
  Nickname: {type: String, required: true},
  Date: {type: Date, required: true},
  lastdaily: {type: Date, required: false},
  Channelid: {type: String, required: false},
  createdDate: {type: Date, required: false},
  cxc: {type: Number, required: false},
  messages: {type: Number, required: false},
  update: {type: String, required: false},
  memes: {type: Number, required: true},
  stammgast: {type: Number, required: true},
  Bohr: {type: Number, required: true},
  Curie: {type: Number, required: true},
  Tesla: {type: Number, required: true},
  Newton: {type: Number, required: true},
  Einstein: {type: Number, required: true},
  Hawking: {type: Number, required: true},
  Musk: {type: Number, required: true},
  Vip: {type: Number, required: true},
  Clixoomer:{type: Number, required: true},
  byegif: {type: Number, required: true},
  happygif: {type: Number, required: true},
  klickgif: {type: Number, required: true},
  pointgif: {type: Number, required: true},
  sadgif: {type: Number, required: true},
  spockgif: {type: Number, required: true},
  thumbsgif: {type: Number, required: true}
});

module.exports = mongoose.model('Sale', clixoomSchema);