const { user, order, product, toping } = require("../../models");

exports.addOrder = async (req, res) => {
    try {
        const data = req.body;
        await order.create(data);

        res.send({
            status: "success",
            message: "successfully add transaction"
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server error"
        })
    }
};

exports.getOrders = async (req, res) => {
    try {
        const data = await order.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [
                {
                    model: product,
                    as: 'product',
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                },
                {
                    model: user,
                    as: 'user',
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                },
                {
                    model: toping,
                    as: "toping",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                }
            ]
        });
        res.send({
            status: "success",
            data
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "can't get the orders"
        })
    }
};

exports.getOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await order.findAll({
            where: {
                id: id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [
                {
                    model: product,
                    as: "product",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                },
                {   
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"]
                    }
                },
                {
                    model: toping,
                    as: "toping",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                }
            ]
        })

        res.send({
            status: "success",
            data
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "error",
            message: "can't get the detail transaction"
        })
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const updateData = req.body;
        await order.update(updateData, {
            where: {
                id:id
            }
        });

        const data = await order.findAll({
            where : {
                id: id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [
                {
                    model: user,
                    as: "user",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password"]
                    }
                },
                {
                    model: product,
                    as: "product",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                },
                {
                    model: toping,
                    as: "toping",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                }
            ]
        });

        res.send({
            status: "success",
            data,
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "failed update data"
        })
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        await order.destroy({
            where: {
                id: id
            }
        })
        res.send({
            status: "success",
            data: {
                id
            }
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "failed to delete"
        })
    }
};