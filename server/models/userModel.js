import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: { type: String },
    isComplete: { type: Boolean },
  },
  {
    timestamps: true,
  },
)

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: [taskSchema],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);
export default User;