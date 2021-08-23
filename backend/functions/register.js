const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const bcrypt = require('bcrypt');
const { users } = require('./functions')
const { countDocuments } = require('../models/Admin');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');


let transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    auth: {
        type: 'custom',
        user: 'alabastaway@gmail.com',
        pass: '066Bamboutcha',
    }
}));

exports.register = async (req, res,validationForm, Admin, Client, Livreur, Vendeur, Customer, Model, validation, window) => {
    let code = "";

    const { error } = validationForm(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    try {
        const { email, password } = req.body;
        const user = new Model({ ...req.body });
        // check email if exist
        const emailExist = await users(Admin, Client, Livreur, Vendeur, Customer, email)
        if (emailExist) return res.json('Email already used!');
        // hash password with bcrypt
        const hashPass = await bcrypt.hash(password, 12);
        if (hashPass) user.password = hashPass;
        console.log(emailExist)
        if (user.role === 'client' || user.role === 'vendeur' || user.role === 'customer') {
            // generate random code
            for (let i = 0; i < 4; i++) {
                let digit = (Math.random() * 10).toFixed();
                code += digit;
            }
            console.log(code)
            // end code
            const mailOptions = { //mail options to sent email
                from: 'noReply',
                to: email,
                subject: 'Code de confirmation',
                html:
                    "<div><p> votre code de confirmation </p><p>" + code + "</p></div>",
            };

            const send = await transporter.sendMail(mailOptions);
            if (code) {
                const key = new validation({
                    idUser: user._id,
                    key: code
                });
                res.cookie('user', user)
                const saved = await key.save();
                if(saved)
                return res.status(200).json('message sent');

            } else {
                return res.json({ status: "ERROR" })
            };
        }

    } catch (err) {
        throw err;
    }
}

// exports.validate = async (req, res, validModel, Model) => {
//     const { code } = req.body;

//     const object = req.cookies.user

//     const details = await validModel.findOne({ idUser: object._id });
   
//     try {
//         if (details.key === code){
//             const validate = new Model({
//                 _id: object._id,
//                 nom: object.nom,
//                 prenom: object.prenom,
//                 email: object.email,
//                 tel: object.tel,
//                 address: object.address,
//                 ville: object.ville,
//                 valid: true,
//                 password: object.password

//             })
//             const saved = validate.save()
//             if(saved) return res.status(201).clearCookie('user').json('Your account created successfuly')
//         }
//     } catch (error) {
//         if(error) throw Error(error)
//     }

// }