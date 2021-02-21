import Joi from 'joi';

export default Joi.object({
  title: Joi.string().min(6).required(),
  description: Joi.string().min(10).required(),
  priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH').required()
});
