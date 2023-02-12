const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});


router.get("/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
});

module.exports = router;