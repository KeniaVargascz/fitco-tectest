const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");

const PORT = 3005;

app.use(express.json());

app.use(cors({
    origin: '*', 
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use("/api", userRoutes);

app.listen(PORT, () => {
    console.log(`ServerUp! http://localhost:${PORT}`);
});
