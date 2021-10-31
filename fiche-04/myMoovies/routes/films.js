var express = require('express');
var router = express.Router();
const {Films} = require("../model/films");
const filmModel = new Films();
/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log("stp0 ",req.query.min);
    return res.json(filmModel.getAll({min: req.query.min}));
});

// GET /films/{id} : Get a films from collection
router.get("/:id", function (req, res) {
    console.log(`GET /films/${req.params.id}`);

    const film = filmModel.getOne(req.params.id);
    // Send an error code '404 Not Found' if the film was not found
    if (!film) return res.status(404).end();

    return res.json(film);
});

router.post("/", function (req, res) {
    console.log("POST /films");

    // Send an error code '400 Bad request' if the body parameters are not valid
    if (
        !req.body ||
        (req.body.hasOwnProperty("title") && req.body.title.length === 0) ||
        (req.body.hasOwnProperty("duration") && req.body.duration.length === 0) ||
        (req.body.hasOwnProperty("budget") && req.body.budget.length === 0) ||
        (req.body.hasOwnProperty("link") && req.body.link.length === 0)
    )
        return res.status(400).end();

    const film = filmModel.addOne(req.body);

    return res.json(film);
});

router.delete("/:id", function (req, res, next) {
    console.log(`DELETE /films/${req.params.id}`);

    const film = filmModel.deleteOne(req.params.id);
    // Send an error code '404 Not Found' if the film was not found
    if (!film) return res.status(404).end();
    return res.json(film);
});

router.put("/:id", function (req, res, next) {
    console.log(`PUT /films/${req.params.id}`);
    const film = filmModel.updateOne(req.params.id, req.body);
    // Send an error code 'Not Found' if the film was not found :
    if (!film) return res.status(404).end();
    return res.json(film);
});

module.exports = router;
