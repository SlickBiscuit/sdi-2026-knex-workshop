const express = require("express");

const artistRoutes = require("./routes/artists");
const songRoutes = require("./routes/songs");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Music Library API"
    });
});

//API Routes

app.use("/artists", artistRoutes);
app.use("/songs", songRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});