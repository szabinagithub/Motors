const {
     create,
     getUsersByUserId,
     getUsers,
     updateUsers,
     deleteUsers,
     getUsersByUserEmail,
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
} = require("./user.service.js");

const {
    genSaltSync, 
    hashSync, 
    compareSync
} = require("bcrypt");

const {
    sign
} = require("jsonwebtoken");

module.exports = {
    
    createUsers: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        console.log(body);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {

            console.log(results);

            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created user",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created user",
                data: results
            });
        });
    },
    createBrands: (req, res) => {
        const body = req.body;
        console.log(body);
        createBrands(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created category",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created category",
                data: results
            });
        });
    },
    createMotors: (req, res) => {
        const body = req.body;
        console.log(body);
        createMotors(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created item",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created item",
                data: results
            });
        });
    },
    createTypes: (req, res) => {
        const body = req.body;
        createTypes(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created itemprices",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created itemprices",
                data: results
            });
        });
    },
    createVotes: (req, res) => {
        const body = req.body;
        createVotes(body, (err, results) => {
            console.log(results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created userrating",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created userrating",
                data: results
            });
        });
    },
    getTypesById: (req, res) => {
        const id = req.params.id;
        getTypesById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getUsersByUserId: (req, res) => {
        const id = req.params.id;
        getUsersByUserId(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getBrandsById: (req, res) => {
        const id = req.params.id;
        getBrandsById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getTypes: (req, res) => {
        getTypes((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getBrands: (req, res) => {
        getBrands((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getMotors: (req, res) => {
        getMotors((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getUserVotes: (req, res) => {
        getUserVotes((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: []
                });
            }
            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No records",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Get successfully",
                data: results
            });
        });
    },
    getMotorsById: (req, res) => {
        const id = req.params.id;
        getMotorsById (id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    getUserVotesById: (req, res) => {
        const id = req.params.id;
        getUserVotesById(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "Record not found!",
                    data: {}
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Record found!",
                data: results
            });
        });
    },
    updateUsers: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUsers(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateBrands: (req, res) => {
        const body = req.body;
        updateBrands(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateMotors: (req, res) => {
        const body = req.body;
        updateMotors(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateTypes: (req, res) => {
        const body = req.body;
        updateTypes(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    updateVotes: (req, res) => {
        const body = req.body;
        updateVotes(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: -1,
                    message: "Server error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not updated",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully",
                data: results
            });
        });
    },
    deleteUsers: (req, res) => {
        const data = req.body;
        deleteUsers(data, (err, results) => {
            // console.log(results);
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteBrands: (req, res) => {
        const data = req.body;
        deleteBrands(data, (err, results) => {
            
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteMotors: (req, res) => {
        const data = req.body;
        deleteMotors(data, (err, results) => {
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteTypes: (req, res) => {
        const data = req.body;
        deleteTypes(data, (err, results) => {
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    deleteVotes: (req, res) => {
        const data = req.body;
        deleteVotes(data, (err, results) => {
            if (err) {
                res.status(500).json({
                    deletedRows: 0,
                    success: -1,
                    message: "Server error"
                })
                return;
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Record Not Found",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Deleted successfully",
                data: results
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUsersByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Invalid email or password",
                    token: "",
                    data: {}
                });
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({
                    result: results
                }, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken,
                    data: results
                });
            } else {
                return res.json({
                    success: 0,
                    message: "Invalid email or password",
                    token: "",
                    data: {}
                });
            }
        });
     }

}