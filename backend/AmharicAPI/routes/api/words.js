const express = require("express");
const Word = require("../../models/word");

const router = express.Router();

// @route GET api/words
// desc Get all words
// @access Public
router.get("/", async (req, res) => {
  Word.find().then(
    (words) => res.status(200).json(words)
  );
});

// @route POST api/word
// desc Add new word
// @access Public
// TODO: add auth to endpoint
router.post("/", (req, res) => {
  const newWord = new Word({
    geez: req.body.geez,
    amharic: req.body.amharic,
    english: req.body.english,
    category: req.body.category
  });
  console.log("ADDING NEW WORD")
  newWord.save().then((word) => res.json(word));
});

// {
//   "geez": "መለወጥ",
//   "english": "Change",
//   "amharic": "Melewet",
//   "category": "verb"
// }

module.exports = router;
