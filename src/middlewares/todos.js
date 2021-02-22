import errorResponse from '../helpers/errorHandeler';
import todosValidator from '../validators/todosValidator';

export const validateTodo = (req, res, next) => {
  const { error } = todosValidator.validate(req.body);
  if (error) {
    return errorResponse(
      res,
      500,
      `Validation error: ${error.details[0].message.replace(/"/g, '')}`
    );
  }
  return next();
};
