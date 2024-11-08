import { Schema, Model, model } from "mongoose";

export interface ITask {
  title: string;
  completed: boolean;
}

const TaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo: Model<ITask> = model<ITask>("Tasks", TaskSchema);

export default Todo;
