// controllers/userController.js
const users = [{ id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Smith' },];
  exports.getAllUsers = (req, res) => {
    res.json(users);
  };// Get all users
  exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }; // Get user by ID
  exports.createUser = (req, res) => {// Create new user 
    const { name } = req.body;
    if (!name) { // Validate the input
      return res.status(400).json({ message: 'Name is required' });
    }
    const newUser = {
      id: users.length + 1, // Incremental ID
      name, // Use the name provided in the request body
    };
    users.push(newUser);
    res.status(201).json(newUser); // Respond with the created user
  };
  