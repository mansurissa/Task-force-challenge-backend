import mongoose from 'mongoose';

const todosSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, minlength: [10] },
  priority: { type: String, required: true },
  created_at: { type: Date },
  updated_at: { type: Date }
});

export default mongoose.model('Todos', todosSchema);
