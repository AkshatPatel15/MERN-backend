const express = require("express");
const connectDB = require("./config/db");
const cors = require("./config/cors");
const formRoutes = require("./routes/formRoutes");
const userRoutes = require("./routes/userRoutes");
const productCategoryRoutes = require("./routes/productCategoryRoutes");
const { swaggerUi, specs } = require("./config/swaggerConfig");
const productInventoryRoutes = require("./routes/productInventoryRoutes");

const app = express();
const PORT = 5001;

app.use(cors);
app.use(express.json());

connectDB();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs)); // Serve Swagger docs

app.use(formRoutes);
app.use(userRoutes);
app.use(productCategoryRoutes);
app.use(productInventoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
