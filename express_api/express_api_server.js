const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const dataFilePath = path.join(__dirname, "users.json"); // Path to the users.json file
app.use(express.json()); // Middleware to parse JSON requests

// Helper functions to read/write JSON data
const readData = () => fs.existsSync(dataFilePath) ? JSON.parse(fs.readFileSync(dataFilePath)) : [];
const writeData = (data) => fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

// POST: Add a new user
app.post("/users", (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });
    
    const data = readData();
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    const newUser = { id, name };
    
    data.push(newUser);
    writeData(data);
    res.status(201).json(newUser);
});

// PATCH: Update a user by ID
app.patch("/users/:id", (req, res) => {
    const { name } = req.body;
    const id = parseInt(req.params.id);

    const data = readData();
    const user = data.find(u => u.id === id);
    
    if (!user) return res.status(404).json({ message: "User not found" });
    
    user.name = name;
    writeData(data);
    res.status(200).json(user);
});

// DELETE: Remove a user by ID
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const data = readData();
    const newData = data.filter(u => u.id !== id);

    if (data.length === newData.length) return res.status(404).json({ message: "User not found" });
    
    writeData(newData);
    res.status(204).send();
});

// GET: Retrieve all users or search by name
app.get("/users", (req, res) => {
    const data = readData();
    const { name } = req.query;

    if (name) {
        // Search for users by name (case-insensitive)
        const filteredUsers = data.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));

        if (filteredUsers.length === 0) {
            return res.status(404).json({ message: "No users found with the given name" });
        }

        return res.status(200).json(filteredUsers);
    }

    res.status(200).json(data);
});

// GET: Retrieve a single user by ID
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = readData().find(u => u.id === id);
    
    if (!user) return res.status(404).json({ message: "User not found" });
    
    res.status(200).json(user);
});

// Start the server
app.listen(4100, () => {
    console.log("Server is running on http://localhost:4000");
});
