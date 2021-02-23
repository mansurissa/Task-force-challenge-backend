import errorResponse from '../helpers/errorHandeler';
import userValidator from '../validators/userValidator';

export const validateUser = (req, res, next) => {
  const { error } = userValidator.validate(req.body);
  if (error) {
    return errorResponse(
      res,
      500,
      `Validation error: ${error.details[0].message.replace(/"/g, '')}`
    );
  }
  return next();
};
