const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

//creating user access public
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All field are mandatory");
  }
  const userAvailable = await User.findOne({ where: { email: email } });
  if (userAvailable) {
    res.status(400);
    throw new Error("User Already Exist");
  }
  //create hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  console.log(`User created ${user}`);
  res.json({ message: "Register the user" });
});

//post api access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All field are mandate");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.name,
          email: user.email,
          id: user.id,
        },
      },
      "secretKey",
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});

//private method
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { createUser, loginUser, currentUser };
