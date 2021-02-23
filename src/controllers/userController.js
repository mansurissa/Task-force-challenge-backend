import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import errorResponse from '../helpers/errorHandeler';
import successHandler from '../helpers/successHandler';
import User from '../models/userModal';

export const register = async (req, res) => {
  try {
    await bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        throw new Error();
      }

      const user = await User.create({ ...req.body, password: hash });
      return successHandler(res, 201, 'Created Successfully', user);
    });
  } catch (error) {
    return errorResponse(res, 500, 'There was problem Registering');
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await User.find({ email });
  if (foundUser) {
    try {
      await bcrypt.compare(password, foundUser[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { email: foundUser[0].email, id: foundUser[0]._id },
            process.env.JWT_KEY,
            {
              expiresIn: '8h'
            }
          );
          return successHandler(res, 200, 'succesfull loged in', {
            token,
            user: foundUser[0]
          });
        } else {
          return errorResponse(res, 401, 'incorect password');
        }
      });
    } catch (error) {
      return errorResponse(res, 500, 'Failed to login');
    }
  } else {
    return errorResponse(res, 404, 'Email or password is invalid');
  }
};
