const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

// GET all songs
router.get("/", async (req, res) => {
    const songs = await knex("song");
    res.json(songs);
});

// GET songs with album and artist information
router.get("/details", async (req, res) => {
    const songs = await knex("song")
        .join("album", "song.AlbumID", "album.AlbumID")
        .join("artist", "album.ArtistID", "artist.ArtistID")
        .select(
            "song.Title as Song",
            "album.Title as Album",
            "artist.Name as Artist"
        );

    res.json(songs);
});

// GET one song
router.get("/:id", async (req, res) => {
    const song = await knex("song")
        .where("SongID", req.params.id)
        .first();

    res.json(song);
});

// CREATE a song
router.post("/", async (req, res) => {
    const [song] = await knex("song")
        .insert({
            AlbumID: req.body.AlbumID,
            Title: req.body.Title
        })
        .returning("*");

    res.status(201).json(song);
});

// UPDATE a song
router.put("/:id", async (req, res) => {
    const [song] = await knex("song")
        .where("SongID", req.params.id)
        .update({
            AlbumID: req.body.AlbumID,
            Title: req.body.Title
        })
        .returning("*");

    res.json(song);
});

// DELETE a song
router.delete("/:id", async (req, res) => {
    await knex("song")
        .where("SongID", req.params.id)
        .del();

    res.status(204).send();
});

module.exports = router;