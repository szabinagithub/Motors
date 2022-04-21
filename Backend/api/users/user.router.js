const {
     createUsers, 
     getUsersByUserId,
     getUsers,
     updateUsers,
     deleteUsers,
     login,
     createBrands,
     getBrands,
     getBrandsById,
     updateBrands,
     deleteBrands,
     createMotors,
     getMotors,
     getMotorsById,
     updateMotors,
     deleteMotors,
     createTypes,
     getTypes,
     getTypesById,
     updateTypes,
     deleteTypes,
     createVotes,
     getUserVotes,
     getUserVotesById,
     updateVotes,
     deleteVotes
} = require("./user.controller.js")
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.post("/users/login", login);
 router.post("/users/", checkToken, createUsers);
 router.get("/users/", checkToken, getUsers);
 router.get("/users/:id", checkToken, getUsersByUserId);
 router.put("/users/", checkToken, updateUsers);
 router.delete("/users/", checkToken, deleteUsers);

router.post("/brands", checkToken, createBrands);
router.get("/brands", checkToken, getBrands);
router.get("/brands/:id", checkToken, getBrandsById);
router.put("/brands", checkToken, updateBrands);
router.delete("/brands", checkToken, deleteBrands);
 
router.post("/motors", checkToken, createMotors);
router.get("/motors", checkToken, getMotors);
router.get("/motors/:id", checkToken, getMotorsById);
router.put("/motors", checkToken, updateMotors);
router.delete("/motors", checkToken, deleteMotors);

router.post("/types", checkToken, createTypes);
router.get("/types", checkToken, getTypes);
router.get("/types/:id", checkToken, getTypesById);
router.put("/types", checkToken, updateTypes);
router.delete("/types", checkToken, deleteTypes);

router.post("/users/votes", checkToken, createVotes);
router.get("/users/motors/votes", checkToken, getUserVotes);
router.get("/users/motors/votes/:id", checkToken, getUserVotesById);
router.put("/users/motors/votes", checkToken, updateVotes);
router.delete("/users/motors/votes", checkToken, deleteVotes);


module.exports = router;