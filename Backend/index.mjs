import express from "express";
import mysql from "mysql2";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "FYP"
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, data) => {
        if(err) return res.json(err);
        if(data.length > 0) return res.json({success: true});
        else return res.json({success: false});
    });
});

app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;
    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [username, email, password], (err, data) => {
        if(err) return res.json(err);
        return res.json({success: true});
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});