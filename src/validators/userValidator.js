import Joi from 'joi';

export default Joi.object({
  names: Joi.string().min(3).required(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'rw', 'co', 'test'] }
    }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});
