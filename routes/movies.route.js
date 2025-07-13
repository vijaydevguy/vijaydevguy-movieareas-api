import express from "express";

const router = express.Router();

//R - for reading
//instead of app we are gonna use router
router.get("/", (req, res) => {
  console.log("getiing is working");
  res.send("show movie details");
});

//C - for create
router.post("/", (req, res) => {
  res.send("create movies ");
});

//U - for update
router.put("/:id", (req, res) => {
  res.send("update movie details");
});

//D - for delete
router.delete("/", (req, res) => {
  res.send("delete movie");
});

export default router;
