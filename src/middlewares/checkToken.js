import errorResponse from '../helpers/errorHandeler';
import User from '../models/userModal';
import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  try {
    const token = req.headers.auth.split(' ')[1];

    if (!token) {
      return errorResponse(
        res,
        401,
        res.__('Please login first or check the token you are sending.')
      );
    }

    const info = jwt.decode(token, process.env.JWT_KEY);
    const user = await User.find({ _id: info.id });

    if (!user) {
      return errorRes(res, 401, 'Check if you are sending the right token');
    }
    return next();
  } catch (error) {
    return errorResponse(res, 401, 'Not authorized. No token provided');
  }
};
