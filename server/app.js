// // Printing-eCommerce-Shop/server/app.js

// const express = require("express");
// const bcrypt = require('bcryptjs');
// const fileUpload = require("express-fileupload");
// const productsRouter = require("./routes/products");
// const productImagesRouter = require("./routes/productImages");
// const categoryRouter = require("./routes/category");
// const searchRouter = require("./routes/search");
// const mainImageRouter = require("./routes/mainImages");
// const userRouter = require("./routes/users");
// const orderRouter = require("./routes/customer_orders");
// const slugRouter = require("./routes/slugs");
// const orderProductRouter = require('./routes/customer_order_product');
// const wishlistRouter = require('./routes/wishlist');
// var cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(fileUpload());

// app.use("/api/products", productsRouter);
// app.use("/api/categories", categoryRouter);
// app.use("/api/images", productImagesRouter);
// app.use("/api/main-image", mainImageRouter);
// app.use("/api/users", userRouter);
// app.use("/api/search", searchRouter);
// app.use("/api/orders", orderRouter);
// app.use('/api/order-product', orderProductRouter);
// app.use("/api/slugs", slugRouter);
// app.use("/api/wishlist", wishlistRouter);


// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const bcrypt = require('bcryptjs');
const fileUpload = require("express-fileupload");
const productsRouter = require("./routes/products");
const productImagesRouter = require("./routes/productImages");
const categoryRouter = require("./routes/category");
const searchRouter = require("./routes/search");
const mainImageRouter = require("./routes/mainImages");
const userRouter = require("./routes/users");
const orderRouter = require("./routes/customer_orders");
const slugRouter = require("./routes/slugs");
const orderProductRouter = require('./routes/customer_order_product');
const wishlistRouter = require('./routes/wishlist');
var cors = require("cors");

// Add global error handler for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://your-frontend-domain.vercel.app'] // Replace with your actual frontend domain
      : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);
app.use(fileUpload());

// Add basic health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Your existing routes
app.use("/api/products", productsRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/images", productImagesRouter);
app.use("/api/main-image", mainImageRouter);
app.use("/api/users", userRouter);
app.use("/api/search", searchRouter);
app.use("/api/orders", orderRouter);
app.use('/api/order-product', orderProductRouter);
app.use("/api/slugs", slugRouter);
app.use("/api/wishlist", wishlistRouter);

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Add catch-all route handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Add global promise rejection handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});