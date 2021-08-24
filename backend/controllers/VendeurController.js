const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Client = require('../models/Client');
const Livreur = require('../models/Livreur');
const Customer = require('../models/Customer');
const Vendeur = require('../models/Vendeur');
const Product = require('../models/Product');
const Validation = require('../models/Validation');
const {register, validate} = require('../functions/register');
const { validationRegisterVendeur, validationAddProduct } = require('../validation/validationForm');
/**
 * @param create vendeur
 * @param check validation form by joi
 * @param hash password by bcrypt
 * @param send code by email
 */

 exports.createVendeur = async (req, res ) => {
    await register(req, res,validationRegisterVendeur, Admin, Client, Livreur, Vendeur, Customer, Vendeur, Validation)
}

/**
 * @param check valid code
 * @param save vendeur details
 */

exports.validVendeur = async (req, res)=>{
const { code } = req.body;

    const object = req.cookies.user
    const details = await Validation.findOne({ idUser: object._id });
   console.log(object)
    try {
        if (details.key === code){
            const validate = new Vendeur({
                _id: object._id,
                nom: object.nom,
                prenom: object.prenom,
                email: object.email,
                tel: object.tel,
                address: object.address,
                ville: object.ville,
                codePostal: object.codePostal,
                valid: true,
                password: object.password
            })
            const saved = await validate.save()
            if(saved){
                //create a token
                const token = jwt.sign({ id: object._id, role: object.role }, process.env.SECRET_TOKEN, { expiresIn: process.env.EXPIRATION_IN })
                return res.status(201).cookie('auth_token', token, { maxAge: process.env.EXPIRATION_IN, httpOnly: true }).json({ role: object.role, isAuthenticated: true });
                //  return res.status(201).clearCookie('user').json('Your account created successfuly')
            }
        }else{
            return res.status(400).json('code doesn\'t match!');
        }
    } catch (error) {
        if(error) throw Error(error)
    }
}

/**
 * @param find vendeur
 * @param update free pack and listing
 */

exports.freePack = async ( req, res )=>{
    // const {id} = req.body;
    const findUser = await Vendeur.findOne({_id: res.auth._id,});
    if(findUser){
        const updatePack = await Vendeur.findOneAndUpdate({_id: findUser._id},{pack: 'free', listing: 40});
    }else{
        return res.status(400).json('Error request!');
    }
    return res.status(200).json('Vous avez obtenu Free Pack');
}

/**
 * @param add product
 */

 exports.addProduct = async (req, res)=>{
     const { error } = validationAddProduct(req.body);
    if (error) return res.status(400).json(error.details[0].message);
     try {
        let filesArray1 = [];
        let filesArray2 = "";

        req.files.images.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype
            }
            filesArray1.push(file);
        });
        req.files.imgPrincipal.forEach(element => {
            
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype
            }
            filesArray2 = file;
        });
       
        const product = new Product({
            ...req.body,
            idVendeur: res.auth._id,
            imgPrincipal: filesArray2.filePath,
            images: filesArray1
        })
     
        
        const saved = await product.save();
        if(saved) return res.status(201).json('Produit ajouter avec succée');
        
    } catch (error) {
        res.status(400).json(error.message);
    }
    
 
 }