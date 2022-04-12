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

 router.post("/users/", checkToken, createUsers);
 router.get("/users/", checkToken, getUsers);
 router.get("/users/:id", checkToken, getUsersByUserId);
 router.put("/users/", checkToken, updateUsers);
 router.delete("/users/", checkToken, deleteUsers);
 router.post("/users/login", login);

router.post("/users/brands", checkToken, createBrands);
router.get("/users/brands/brandsList", checkToken, getBrands);
router.get("/users/brands/brandsList/:id", checkToken, getBrandsById);
router.put("/users/brands", checkToken, updateBrands);
router.delete("/users/brands", checkToken, deleteBrands);
 
router.post("/users/motors", checkToken, createMotors);
router.get("/users/motors/motorsList", checkToken, getMotors);
router.get("/users/motors/motorsList/:id", checkToken, getMotorsById);
router.put("/users/motors", checkToken, updateMotors);
router.delete("/users/motors", checkToken, deleteMotors);

router.post("/users/types", checkToken, createTypes);
router.get("/users/motors/types", checkToken, getTypes);
router.get("/users/motors/types/:id", checkToken, getTypesById);
router.put("/users/motors/types", checkToken, updateTypes);
router.delete("/users/types", checkToken, deleteTypes);

router.post("/users/votes", checkToken, createVotes);
router.get("/users/motors/votes", checkToken, getUserVotes);
router.get("/users/motors/votes/:id", checkToken, getUserVotesById);
router.put("/users/motors/votes", checkToken, updateVotes);
router.delete("/users/motors/votes", checkToken, deleteVotes);


module.exports = router;