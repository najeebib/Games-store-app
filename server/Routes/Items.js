import db from "../Database/Database.js";

const funcs = {
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
    },
    get_games: function(req,res)
    {
        const q = `SELECT * FROM games`;
        db.query(q, (err, data) => {
            if (err) return res.json(err);
            else return res.json(data);
        });
    },
    get_latest_games: function(req,res)
    {
        const q = `SELECT *
                    FROM games
                    WHERE (Publisher, ReleaseDate) IN (
                        SELECT Publisher, MAX(ReleaseDate) AS LatestDate
                        FROM games
                        GROUP BY Publisher
                    )
                    ORDER BY ReleaseDate DESC
                    LIMIT 3;`;
        db.query(q, (err, data) => {
            if (err) return res.json(err);
            else return res.json(data);
        });
    },
    get_top_game: function(req,res)
    {
        const q = `SELECT *
                    FROM games
                    WHERE (Publisher, Price) IN (
                        SELECT Publisher, MAX(Price) AS MaxPrice
                        FROM games
                        GROUP BY Publisher
                    )
                    ORDER BY Price DESC
                    LIMIT 3;`;
        db.query(q, (err, data) => {
            if (err) return res.json(err);
            else return res.json(data);
        });
    },
    get_user_cart:function(req,res)
    {
        const userID = req.params.userID;
        console.log(userID);
        const q = `SELECT * FROM cart WHERE UserID= ?`;
        db.query(q,[userID], (err, data) => {
            if (err) return res.json(err);
            else return res.json(data);
        });
    },
    post_to_cart: function(req,res)
    {
        const name = req.body.name;
        const price = req.body.price;
        const userID = req.body.userID;
        const gameID = req.body.gameID;
        const gameIMG = req.body.gameIMG;
        const q = "INSERT INTO cart (UserID, GameID, Name, Price,ImageName) VALUES (?, ?, ?, ?, ?)";
    
        db.query(q, [userID, gameID, name, price, gameIMG], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).json({ error: 'Game insertion failed' });
            } else {
                console.log('User inserted successfully');
                return res.status(201).json({ message: 'Game inserted to cart inserted successfully' });
            }

        });
    },
    delete_from_cart: function(req,res)
    {
        const cartID = req.body.cartID;

        const q = "SELECT CartID FROM cart WHERE CartID = ?"
        db.query(q,[cartID], (err, data) =>{
            if (err) return res.json(err);
            else
            {
                const cartId = data[0].CartID;

                const qDelete = "DELETE FROM cart WHERE CartID = ?";
                db.query(qDelete, [cartId], (error, result) => {
                    if (err) return res.json(error);
                    else res.status(201).json({ message: 'Gmae removed from cart successfully' });
                });
            } 
        })
    },
    delete_all_games_from_cart: function(req,res)
    {
        const userID = req.body.userID;

        const q = "SELECT CartID FROM cart WHERE UserID = ?"
        db.query(q,[userID], (err, data) =>{
            if (err) return res.json(err);
            else
            {
                for(let i = 0; i<data.length;i++)
                {
                    const cartId = data[i].CartID;

                    const qDelete = "DELETE FROM cart WHERE CartID = ?";
                    db.query(qDelete, [cartId], (error, result) => {
                        if (err) return res.json(error);
                        else res.status(201).json({ message: 'Gmae removed from cart successfully' });
                    });
                }
                
            } 
        })
    },
};

export default funcs;
