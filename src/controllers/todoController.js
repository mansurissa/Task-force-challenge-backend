import errorResponse from '../helpers/errorHandeler';
import successHandler from '../helpers/successHandler';
import Todos from '../models/todosModel';

export const createTodo = async (req, res) => {
  await Todos.findOne({ title: `${title}` }, (result) => {
    if (result) {
      errorResponse(res, 500, 'The Todo with that title already exists');
    }
  });

  try {
    const todo = await Todos.create({
      ...req.body,
      created_at: Date.now(),
      updated_at: Date.now()
    });
    return successHandler(res, 201, 'new todo item created successfully', todo);
  } catch (error) {
    return errorResponse(res, 500, 'Failed to create a todo item', error);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todos.find().sort({ created_at: -1 });
    return successHandler(res, 200, 'successfully fetched all todos', {
      todossCount: todos.length,
      todos
    });
  } catch (error) {
    return errorResponse(res, 500, 'there was error getting all todos', error);
  }
};

export const getOneTodo = async (req, res) => {
  try {
    const oneTodo = await Todos.findById(req.params.id);
    return successHandler(res, 200, 'Todo got successfully', oneTodo);
  } catch (error) {
    return errorResponse(res, 404, 'not found on Todos list', error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const foundTodo = await Todos.findById(req.params.id);
    if (!foundTodo) return errorResponse(res, 404, "can't find that Todo");
    await Todos.deleteOne({ _id: foundTodo._id });
    return successHandler(res, 200, 'Deleted Todo successfully');
  } catch (error) {
    return errorResponse(res, 500, 'There was error deleting Todo', error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todos.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedTodo) {
      return errorResponse(res, 404, " Can't find that Todo on list");
    }
    return successHandler(res, 201, 'Updated Todo successfully', updatedTodo);
  } catch (error) {
    return errorResponse(res, 500, 'There was a problem updating Todo', error);
  }
};
