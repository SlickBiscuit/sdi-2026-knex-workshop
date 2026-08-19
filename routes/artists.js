const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

// GET all artists
router.get("/", async (req, res) => {
    try {
        const artists = await knex("artist");
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET one artist
router.get("/:id", async (req, res) => {
    try {
        const artist = await knex("artist")
            .where("ArtistID", req.params.id)
            .first();

        res.json(artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CREATE an artist
router.post("/", async (req, res) => {
    try {
        const [artist] = await knex("artist")
            .insert({
                Name: req.body.Name,
                Biography: req.body.Biography,
                Genre: req.body.Genre
            })
            .returning("*");

        res.status(201).json(artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE an artist
router.put("/:id", async (req, res) => {
    try {
        const [artist] = await knex("artist")
            .where("ArtistID", req.params.id)
            .update({
                Name: req.body.Name,
                Biography: req.body.Biography,
                Genre: req.body.Genre
            })
            .returning("*");

        res.json(artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE an artist
router.delete("/:id", async (req, res) => {
    try {
        await knex("artist")
            .where("ArtistID", req.params.id)
            .del();

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;