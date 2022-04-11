const {
     createUser,
     getUserByUserId,
     getUsers,
     updateUsers,
     deleteUser,
     login,
     createCategory,
     getCategories,
     getCategoryById,
     updateCategory,
     deleteCategory,
     createItems,
     getItems,
     getItemById,
     updateItem,
     deleteItem,
     createitemPrices,
     getItemPrices,
     getItemPriceById,
     updateItemPrices,
     deleteItemPrice,
     createuserrating,
     getUserRateing,
     getUserRatingById,
     updateUserRating,
     deleteUserRating
} = require("./user.controller.js")
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

 router.post("/users/", checkToken, createUser);
 router.get("/users/", checkToken, getUsers);
 router.get("/users/:id", checkToken, getUserByUserId);
 router.put("/users/", checkToken, updateUsers);
 router.delete("/users/", checkToken, deleteUser);
 router.post("/users/login", login);

router.post("/users/category", checkToken, createCategory);
router.get("/users/category/categories", checkToken, getCategories);
router.get("/users/category/categories/:id", checkToken, getCategoryById);
router.put("/users/category", checkToken, updateCategory);
router.delete("/users/category", checkToken, deleteCategory);
 
router.post("/users/items", checkToken, createItems);
router.get("/users/items/itemList", checkToken, getItems);
router.get("/users/items/itemList/:id", checkToken, getItemById);
router.put("/users/items", checkToken, updateItem);
router.delete("/users/items", checkToken, deleteItem);

router.post("/users/itemprices", checkToken, createitemPrices);
router.get("/users/items/itemprices", checkToken, getItemPrices);
router.get("/users/items/itemprices/:id", checkToken, getItemPriceById);
router.put("/users/items/itemprices", checkToken, updateItemPrices);
router.delete("/users/itemprices", checkToken, deleteItemPrice);

router.post("/users/userrating", checkToken, createuserrating);
router.get("/users/items/userrating", checkToken, getUserRateing);
router.get("/users/items/userrating/:id", checkToken, getUserRatingById);
router.put("/users/items/userrating", checkToken, updateUserRating);
router.delete("/users/items/userrating", checkToken, deleteUserRating);


module.exports = router;