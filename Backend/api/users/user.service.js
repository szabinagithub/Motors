const pool = require("../../config/database.js");

module.exports = {
    create: (data, callBack) => {
        let queryString = `INSERT INTO users
        (id,email,password,permission,name)
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
    createBrands: (data, callBack) => {
        let queryString = `INSERT INTO brands
        (id,brandName)
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
    createMotors: (data, callBack) => {
        let queryString = `INSERT INTO motors
        (id,name,price,brandId,motoVolume,height,typeId)
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
    createTypes: (data, callBack) => {
        let queryString = `INSERT INTO types
        (id,type)
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
    createVotes: (data, callBack) => {
        let queryString = `INSERT INTO votes
        (id,vote,userId,motoId)
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
    getUsersByUserEmail: (email, callBack) => {
        let queryString = `select * from users where email = ?`;
        let params = [email];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        });
    },
    getMotors: callBack => {
        const queryString = `SELECT * FROM motors`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUsers: callBack => {
        const queryString = `SELECT * FROM users`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getBrands: callBack => {
        const queryString = `select * from brands`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getTypes: callBack => {
        const queryString = `select * from types`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUserVotes: callBack => {
        const queryString = `select * from votes`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getBrandsById: (id, callBack) => {
        const queryString = `SELECT * FROM brands where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    getUserVotesById: (id, callBack) => {
        const queryString = `SELECT * FROM votes where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    getMotorsById: (id, callBack) => {
        const queryString = `SELECT * FROM motors WHERE id = ?`;
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
    getUsersByUserId: (id, callBack) => {
        const queryString = `SELECT * FROM users WHERE id = ?`;
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
    getTypesById: (id, callBack) => {
        const queryString = `select * from types where id=?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results[0]);
        });
    },
    updateUsers: (data, callBack) => {
        const queryString = `UPDATE users SET
        email= ?, password = ?, permission = ?, name = ?, 
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
    updateBrands: (data, callBack) => {
        const queryString = `UPDATE brands SET
        brandName = ?
     WHERE id = ?`;
        
        const params = [
            data.brandName,
            data.id
        ]
        console.log("Update brands:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateMotors: (data, callBack) => {
        const queryString = `UPDATE motors set
        name = ?, price = ?, brandId = ?, motoVolume = ?,height = ?,typeId = ?
      WHERE id = ?`;
        // const params = Object.values(data);
        const params = [
            data.name,
            data.price,
            data.brandId,
            data.motoVolume,
            data.height,
            data.typeId,
            data.id
        ]
        console.log("Update motors:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateTypes: (data, callBack) => {
        const queryString = `UPDATE types SET
        type = ?,
      WHERE id = ?;`;
        
        const params = [
            data.type,
            data.id
        ]
        console.log("Update types:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateVotes: (data, callBack) => {
        const queryString = `UPDATE votes SET
        userId = ?, vote = ?, motoId = ?
      WHERE id = ?`;
        // const params = Object.values(data);
        const params = [
            data.userId,
            data.vote,
            data.motoId,
            data.id
        ]
        console.log("Update votes:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    deleteUsers: (data, callBack) => {
        const queryString = `DELETE FROM users WHERE id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteBrands: (data, callBack) => {
        const queryString = `delete from brands where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteMotors: (data, callBack) => {
        const queryString = `delete from motors where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteTypes: (data, callBack) => {
        const queryString = `delete from types where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteVotes: (data, callBack) => {
        const queryString = `delete from votes where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    }
};