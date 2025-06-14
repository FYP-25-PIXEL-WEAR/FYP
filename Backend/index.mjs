import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcrypt";
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
    
    const query = "SELECT * FROM users WHERE username = ?";
    
    db.query(query, [username], async (err, data) => {
        if(err) {
            return res.json({success: false, error: "Database error"});
        }
        
        if(data.length > 0) {
            try {
                const match = await bcrypt.compare(password, data[0].password);
                
                if(match) {
                    return res.json({success: true});
                } else {
                    return res.json({success: false, error: "Invalid password"});
                }
            } catch (error) {
                return res.json({success: false, error: "Password comparison failed"});
            }
        }
        return res.json({success: false, error: "User not found"});
    });
});

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [username, email, hashedPassword], (err, data) => {
        if(err) {
            console.error("Database error:", err);
            return res.json(err);
        }
        return res.json({success: true});
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});