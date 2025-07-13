import express from "express";

import {
  movieCreate,
  movieDelete,
  movieIndex,
  movieUpdate,
} from "../controllers/movies.controller.js";

const router = express.Router();

//R - for reading
//instead of app we are gonna use router

//this logic goes inside controller accoring mvc pattern

// router.get("/", (req, res) => {
//   console.log("getiing is working");
//   res.send("show movie details");
// });

router.get("/", movieIndex);

//C - for create
router.post("/", movieCreate);

//U - for update
router.put("/:id", movieUpdate);

//D - for delete
router.delete("/", movieDelete);

export default router;
