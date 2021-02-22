import errorResponse from '../helpers/errorHandeler';
import Todos from '../models/todosModel';

export default async (req, res, next) => {
  try {
    const foundTodo = await Todos.findById(req.params.id);
    if (!foundTodo) return errorResponse(res, 404, "can't find that Todo");

    return next();
  } catch (error) {
    errorResponse(res, 404, 'There was an error finding that todo');
  }
};
