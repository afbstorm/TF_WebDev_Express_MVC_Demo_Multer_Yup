const yup = require('yup');

const userSchema = yup.object().shape({
    pseudo: yup.string().required().min(3).max(50),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
});

module.exports = userSchema;