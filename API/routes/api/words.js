const express = require("express");
const Word = require("../../models/word");

const router = express.Router();

// @route GET api/words
// desc Get all words excluding _id and __v from results
// @access Public
router.get("/", async (req, res) => {
  Word.find({}, '-__v')
    .sort({ english: 1 })
    .then((words) => res.status(200).json(words));
});

// @route POST api/word
// desc Add new word
// @access Public
// TODO: add auth to endpoint
router.post("/", (req, res) => {
  try {
    const newWord = new Word({
      geez: req.body.geez,
      amharic: req.body.amharic,
      english: req.body.english,
      category: req.body.category,
    });
    newWord.save().then((word) => res.json(word));
  } catch (err) {
    console.error(err);
  }
});

// @route DELETE api/word/:id
// desc Deletes a word
// @access Public
// TODO: add auth to endpoint
router.delete("/:id", (req, res) => {
  try {
    Word.findById(req.params.id)
      .then((word) => {
        word.remove().then(() => res.json({ success: true }));
      })
      .catch((err) => {
        res.status(404).json({ success: false });
      });
  } catch (err) {
    console.error(err);
  }
});

// @route PATCH api/word
// desc Edit an existing word
// @access Public
// TODO: add auth to endpoint
router.patch("/:id", (req, res) => {
  try {
    const updatedWord = req.body;
    console.log(updatedWord);
    const id = req.params.id;
    // Word.update({ _id: ObjectId(id) }, { $set: updatedWord });
    // newWord.save().then((word) => res.json(word));
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
