const Joi = require('joi');

exports.validationRegister = data => {
    const schema = Joi.object({
        username: Joi.string().required().min(4).max(20),
        email: Joi.string().email().required(),
        role: Joi.string(),
        password: Joi.string().required().min(6)
    })
    return schema.validate(data)
}

exports.validationUpdateUser = data => {
    const schema = Joi.object({
        username: Joi.string().min(4).max(20),
        email: Joi.string().email(),
        role: Joi.string(),
        password: Joi.string().min(6)
    })
    return schema.validate(data)
}

exports.validationLogin = data => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6)
    })
    return schema.validate(data)

}