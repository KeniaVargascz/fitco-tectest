const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");

const PORT = 3005;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

sequelize.sync({ force: false })
    .then(() => console.log("Database OK!"))
    .catch(err => console.error("Error", err));

app.use("/api", userRoutes);
app.listen(PORT, () => {
    console.log(`ServerUp! http://localhost:${PORT}`);
});
