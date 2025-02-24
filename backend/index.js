require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// CORS middleware configuration
app.use(cors({
  origin: ["https://zerodha-clonee.netlify.app/", "https://zerodha-clonee-dashboard.netlify.app/"],  // Adjust frontend URL if necessary
  credentials: true,                // Allow credentials and cookies
}));

// Middleware to handle JSON and cookies
app.use(cookieParser());
app.use(express.json());

// Authentication routes
app.use("/api/auth", authRoute);  // Authentication routes will now be under /api/auth

// Sample data routes (Holdings, Positions, Orders)
app.get('/allHoldings', async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order Saved!");
});

// Start server and MongoDB connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
