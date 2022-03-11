const { user } = require("../../models");

exports.addUser = async (req, res) => {
    try {
        const data = req.body
        await user.create(data)
        res.send({
            status: "success",
            message: "add user finished"
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "add user failed"
        });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const data = await user.findAll({
            attributes : {
                exclude: ["password", "createdAt", "updatedAt"]
            }
        });
        res.send({
            status: "success",
            data,
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "error fetching data"
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await user.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude : ["password", "createdAt", "updatedAt"]
            }
        });
        res.send({
            status: "success",
            data,
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "error to load data"
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        await user.update(updateData, {
            where: {
                id: id
            }
        })
        res.send({
            status: "success",
            message: `successfully updated id : ${id}`,
            data: updateData
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: `failed to update id: ${id}`
        })
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await user.destroy({
            where: {
                id: id
            }
        })
        res.send({
            status : "success",
            message: `delete id: ${id} success`
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: `delete id: ${id} failed`
        })
    }
};