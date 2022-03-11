const { user } = require("../../models");

const Joi = require("joi");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

// const md5 = require("md5");

exports.register = async (req, res) => {
    
    const schema = Joi.object({
        fullname : Joi.string().min(5).required(),
        email : Joi.string().email().min(6).required(),
        password : Joi.string().required(),
    })

    const { error } = schema.validate(req.body)

    if(error){
        return res.status(400).send({
            error : {
                message : error.details[0].message,
            },
        });
    }

    try {

        const userExist = await user.findOne({
            where: {
                email: req.body.email,
            },
            attributes : {
                exclude: ["createdAt", "updatedAt"]
            }
        })

        if( userExist ){
            return res.status(400).send({
                status: "Failed",
                message: "Email has been registered, Please Login"
            })
        }

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
            

        // const encrypt = (md5(req.body.password))

        // return res.send({
        //     hashedPassword
        // })

        const newUser = await user.create({
            fullname : req.body.fullname,
            email : req.body.email,
            password : hashedPassword,
            status : "customer",
        });

        const dataToken = {
            id: newUser.id,
            fullname: newUser.fullname,
            email: newUser.email
        }

        // const SECRET_KEY = "Secretbanget"
        const token = jwt.sign(dataToken, process.env.TOKEN_KEY)

        res.status(201).send({
            status: "success",
            data: {
                fullname: newUser.fullname,
                email: newUser.email,
                token,
            },
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.login = async (req, res) => {
    
    const schema = Joi.object({
        email: Joi.string().email().min(6).required(),
        password : Joi.string().required()
    });

    const { error } = schema.validate(req.body);

    if(error){
        return res.status(400).send({
            error: {
                message: error.details[0].message,
            },
        })
    }
    
    try {
        
        const userExist = await user.findOne({
            where: {
                email: req.body.email,
            },
            attributes : {
                exclude: ["createdAt", "updatedAt"],
            },
        });

        if( !userExist ){
            return res.status(400).send({
                status: "failed",
                message: "Email & Password is not exist"
            })
        }

        const isValid = await bcrypt.compare(req.body.password, userExist.password )

        if(!isValid){
            return res.status(400).send({
                status: "failed",
                message: "Credential is invalid"
            })
        }

        

        const dataToken = {
            id: userExist.id,
            fullname: userExist.fullname,
            email: userExist.email
        }

        // const SECRET_KEY = "Secretbanget"
        const token = jwt.sign(dataToken, process.env.TOKEN_KEY)

        res.status(200).send({
            status: "success",
            data: {
                id: userExist.id,
                fullname: userExist.fullname,
                email: userExist.email,
                status: userExist.status,
                token,
            },
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error"
        });
    }
};

exports.checkAuth = async (req, res) => {
    try {
        const id = req.user.id;

        const dataUser = await user.findOne({
            where: {
                id: id,
            },
            attributes: {
                exclude: ["createdAt", "updatedAt", "password"],
            },
        });

        if(!dataUser){
            return res.status(404).send({
                status: "failed",
            });
        }

        res.send({
            status: "success",
            data: {
                user: {
                    id: dataUser.id,
                    fullname: dataUser.fullname,
                    email: dataUser.email,
                    status: dataUser.status,
                },
            },
        });
    } catch (error) {
        console.log(error);
        res.status({
            status: "failed",
            message: "Server Error",
        });
    }
};