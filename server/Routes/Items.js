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
    post_user: function(req, res)
    {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
        const birthdate = req.body.birthdate;
        const q = "INSERT INTO users (Email, Password, Username, Birthdate) VALUES (?, ?, ?, ?)";
    
        db.query(q, [email, password, name, birthdate], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).json({ error: 'User insertion failed' });
            } else {
                console.log('User inserted successfully');
                return res.status(201).json({ message: 'User inserted successfully' });
            }

        });
    }
};

export default funcs;
