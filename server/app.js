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


// const PORT = process.env.PORT || 5000;
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
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(fileUpload());

// Test route
app.get('/api', (req, res) => {
    res.json({ message: 'API is running' });
});

// Routes
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

// For local development
if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export for Vercel
module.exports = app;