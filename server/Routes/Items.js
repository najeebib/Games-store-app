import db from "../Database/Database.js";

const funcs = {
    get_home: function (req, res) {
        res.json("hello");
    },
    get_user: function (req, res) {
        const email = req.query.email;
        const password = req.query.password;
        const q = `SELECT * FROM users WHERE email= ? AND password= ?`;
        db.query(q,[email,password], (err, data) => {
            if (err) return res.json(err);
            else return res.json(data);
        });
    },
};

export default funcs;
