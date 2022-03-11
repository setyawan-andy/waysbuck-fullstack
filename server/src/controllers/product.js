const { product, user } = require("../../models");

exports.addProduct = async (req, res) => {
    try {
        const data = req.body;
        let newProduct = await product.create({
            ...data,
            image: req.file.filename,
            idUser: req.user.id,
        });

        newProduct = JSON.parse(JSON.stringify(newProduct))
        res.send({
            status: "success",
            data: {
                ...newProduct,
                image : newProduct.image
            }
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "add product failed"
        });
    }
};

exports.getProducts = async (req, res) => {
    try {
        // res.send({
        //     user: {
        //         id: req.user.id,
        //         fullname: req.user.fullname,
        //         email: req.user.email
        //     }
        // })
        let data = await product.findAll({
            include: {
                model: user,
                as: "user",
                attributes:{
                    exclude: ["createdAt", "updatedAt", "password"]
                }
            },
            attributes: {
                exclude: ["idUser", "createdAt", "updatedAt"]
            }
        });

        let FILE_PATH = "http://localhost:4000/uploads/"
        data = JSON.parse(JSON.stringify(data))
        
        data = data.map(item => {
            return {
                ...item,
                image: FILE_PATH + item.image
            }
        })

        res.send({
            status: "success",
            data,
        })
    } catch (error) {
        console.log(error);
        res.send({
            status : "failed",
            message: "failed to load data"
        });
    }
};

exports.getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let data = await product.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"],
                    },
                },
            ],
            attributes: {
                exclude: ["createdAt", "updatedAt", "idUser"],
            },
        });

        data = JSON.parse(JSON.stringify(data));

        let FILE_PATH = "http://localhost:4000/uploads/"

        data = {
            ...data,
            image: FILE_PATH + data.image,
        };

        res.send({
            status: "success",
            data,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "failed to load data"
        })
    }
};

exports.editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updateProduct = {
            ...data,
            idUser: req.user.id
        }
        
        await product.update(updateProduct, {
            where: {
                id:id
            }
        });
        res.send({
            status: "success",
            data: {
                product: updateProduct,
                user: {
                    idUser: req.user.id,
                    email: req.user.email
                }
            }
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "failed to update the data"
        })
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await product.destroy({
            where: {
                id:id
            }
        })
        res.send({
            status: "success",
            data: {
                id: id
            }
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: `delete id: ${id} failed`
        })
    }
};