const pool = require("../../config/database.js");

module.exports = {
    create: (data, callBack) => {
        let queryString = `INSERT INTO user
        (firstName,lastName,gender,email,password,phoneNumber,permission)
        VALUES
        (?,?,?,?,?,?,?)
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createCategory: (data, callBack) => {
        let queryString = `INSERT INTO category
        (id,CategoryName)
        VALUES
        (?,?)
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createItems: (data, callBack) => {
        let queryString = `INSERT INTO item
        (categoryesId,itemName,image,unit,alcoholcontent,brand)
          VALUES
          (?,?,?,?,?,?)
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createitemPrices: (data, callBack) => {
        let queryString = `INSERT INTO itemprice
        (itemId,Date,price)
        VALUES
        (?,?,?)
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    createuserrating: (data, callBack) => {
        let queryString = `INSERT INTO userrating
        (userId,comment,rating,itemId)
        VALUES
        (?,?,?,?)
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUserByUserEmail: (email, callBack) => {
        let queryString = `select * from user where email = ?`;
        let params = [email];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        });
    },
    getItemPrices: callBack => {
        const queryString = `SELECT * FROM itemprice`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUsers: callBack => {
        const queryString = `SELECT * FROM user`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getCategories: callBack => {
        const queryString = `select * from category`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getItems: callBack => {
        const queryString = `select * from item`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUserRateing: callBack => {
        const queryString = `select * from userrating`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getItemById: (id, callBack) => {
        const queryString = `SELECT * FROM item where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    getUserRatingById: (id, callBack) => {
        const queryString = `SELECT * FROM userrating where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    getItemPriceById: (id, callBack) => {
        const queryString = `SELECT * FROM itemprice WHERE id = ?`;
        const params = [id];
        // params= []
        // const queryString = `select * from registration where id=${id}`;
        // console.log(queryString);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            // return callBack(null, results[0]);
            return callBack(null, results);
        });
    },
    getUserByUserId: (id, callBack) => {
        const queryString = `SELECT * FROM user WHERE id = ?`;
        const params = [id];
        // params= []
        // const queryString = `select * from registration where id=${id}`;
        // console.log(queryString);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            // return callBack(null, results[0]);
            return callBack(null, results);
        });
    },
    getCategoryById: (id, callBack) => {
        const queryString = `select * from category where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    updateUser: (data, callBack) => {
        const queryString = `UPDATE user SET
        firstName= ?, lastName = ?, gender = ?, email = ?, password = ?,phoneNumber = ?,permission = ?
        WHERE id = ?`;
        const params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateCategory: (data, callBack) => {
        const queryString = `UPDATE category SET
        CategoryName = ?
     WHERE id = ?`;
        // const params = Object.values(data);
        const params = [
            data.CategoryName,
            data.id
        ]
        console.log("Update category:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateItem: (data, callBack) => {
        const queryString = `UPDATE item set
        categoryesId = ?, itemName = ?, Image = ?, unit = ?,alcoholcontent = ?,brand = ?
      WHERE id = ?`;
        // const params = Object.values(data);
        const params = [
            data.categoryesId,
            data.itemName,
            data.Image,
            data.unit,
            data.alcoholcontent,
            data.brand,
            data.id
        ]
        console.log("Update item:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateItemPrices: (data, callBack) => {
        const queryString = `UPDATE itemprice SET
        itemId = ?, Date = ?, price = ?
      WHERE id = ?;`;
        // const params = Object.values(data);
        const params = [
            data.itemId,
            data.Date,
            data.price,
            data.id
        ]
        console.log("Update itemprice:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateUserRating: (data, callBack) => {
        const queryString = `UPDATE userrating SET
        userId = ?, comment = ?, rating = ?, itemId = ?
      WHERE id = ?`;
        // const params = Object.values(data);
        const params = [
            data.userId,
            data.comment,
            data.rating,
            data.itemId,
            data.id
        ]
        console.log("Update userrating:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    deleteUser: (data, callBack) => {
        const queryString = `DELETE FROM user WHERE id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteCategory: (data, callBack) => {
        const queryString = `delete from category where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteItem: (data, callBack) => {
        const queryString = `delete from item where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteItemPrice: (data, callBack) => {
        const queryString = `delete from itemprice where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteUserRating: (data, callBack) => {
        const queryString = `delete from userrating where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    }
};