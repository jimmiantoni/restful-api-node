//Validation
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = () => {
    const schema = Joi.object({
        name: Joi.string().min(6).require(),
        email: Joi.string().min(6).require().email(),
        password: Joi.string().min(6).require()
    });
    // return Joi.validate(data, schema);
    const validation = schema.validate(req.body); 
    res.send(validation);
};

//Login Validation
const loginValidation = () => {
    const schema = Joi.object({ 
        email: Joi.string()
            .min(6)
            .require()
            .email(),
        password: Joi.string()
            .min(6)
            .require()
    });
    // return Joi.validate(data, schema);
    const validation = schema.validate(req.body); 
    res.send(validation);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;