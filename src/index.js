import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = Schema({
  name: String,
  email: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const model = mongoose.model('User', schema);

export default model;
