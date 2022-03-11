const express = require("express");

const router = express.Router();


const { addUser, getUsers, getUser, updateUser, deleteUser } = require("../controllers/user")
const { addProduct, getProducts, getProduct, editProduct, deleteProduct } = require("../controllers/product");


const { register, login, checkAuth } = require("../controllers/auth");

const { auth } = require("../middlewares/auth")
const { uploadFile } = require("../middlewares/uploadFile");
const { addToping, getTopings, getToping, editToping, deleteToping } = require("../controllers/toping");
const { addOrder, getOrders, getOrder, updateOrder, deleteOrder } = require("../controllers/order");

router.post("/adduser", addUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);


router.post("/addproduct", auth, uploadFile("image"), addProduct);
router.get("/products", auth, getProducts);
router.get("/product/:id", getProduct);
router.patch("/product/:id", auth, editProduct);
router.delete("/product/:id", auth, deleteProduct );

router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

router.post("/addtoping", auth, uploadFile("image"), addToping);
router.get("/topings", getTopings);
router.get("/toping/:id", getToping);
router.patch("/toping/:id", auth, uploadFile("image"), editToping);
router.delete("/toping/:id", auth, deleteToping);


router.post("/addorder", auth, addOrder);
router.get("/orders", auth, getOrders);
router.get("/order/:id", auth, getOrder);
router.patch("/order/:id", auth, updateOrder);
router.delete("/order/:id", auth, deleteOrder);

module.exports = router;