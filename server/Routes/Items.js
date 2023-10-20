import db from "../Database/Database.js";

const funcs = {
    get_home: function (req, res) {
        res.json("hello");
    },
    get_users: function (req, res) {
        const q = "SELECT * FROM users";
        db.query(q, (err, data) => {
            if (err) return res.json(err);
            else return res.json(data);
        });
    },
};

export default funcs;
