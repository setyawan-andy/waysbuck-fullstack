const { toping, user } = require("../../models");

exports.addToping = async (req, res) => {
    try {
        const data = req.body;
        let dataToping = await toping.create({
            ...data,
            image: req.file.filename,
            idUser: req.user.id
        })

        dataToping = JSON.parse(JSON.stringify(dataToping))
        
        res.send({
            status: "success",
            data: {
                ...dataToping,
                image: dataToping.image
            }
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "failed to add toping"
        })
    }
};

exports.getTopings = async (req, res) => {
    try {
        let data = await toping.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })

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
            status: "failed",
            message: "Failed to load toppings"
        })
    }
};

exports.getToping = async (req, res) => {
    try {
        const { id } = req.params;
        let data = await toping.findAll({
            where: {
                id: id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
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
            data: {
                topping: data
            }
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "failed to load toping"
        })
    }
};

exports.editToping = async (req, res) => {
    try {
        const { id } = req.params;

        const updateToping = req.body;
        let data = await toping.update({
            ...updateToping,
            image: req.file.filename
        }, 
            {
            where: {
                id: id
            }
        });
        
        data = JSON.parse(JSON.stringify(data))

        res.send({
            status: "success",
            data: {
                updateToping,
                image: req.file.filename
            }
        });

    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "edit toping failed"
        })
    }
};

exports.deleteToping = async (req, res) => {
    try {
        const { id } = req.params;
        await toping.destroy({
            where: {
                id: id
            }
        });
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
            message: "failed delete data"
        })
    }
};