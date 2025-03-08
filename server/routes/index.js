const router = require("express").Router();

const courseRoutes = require("./course");
const categoryRoutes = require("./category");
const userRoutes = require("./user");

// create a default route for /api
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.use("/api/categories", categoryRoutes);
router.use("/api/courses", courseRoutes);
router.use("/api/users", userRoutes);

module.exports = router;
