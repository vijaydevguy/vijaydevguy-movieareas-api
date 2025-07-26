import express from "express";

import {
  movieCreate,
  movieDelete,
  movieIndex,
  movieDetail,
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


//showing individual movie
router.get("/:id",movieDetail);

//C - for create
router.post("/", movieCreate);

//U - for update
router.put("/:id", movieUpdate);

//D - for delete
router.delete("/:id", movieDelete);

export default router;
