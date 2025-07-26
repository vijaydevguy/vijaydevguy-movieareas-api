import Movie from "../models/movies.model.js";

export const movieIndex = async (req, res) => {
  //   console.log("getiing is working");

  //we did this for testing purpose
  // res.send("show movie details");

  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const movieCreate = async (req, res) => {
  // res.send("create movies ");

  //id,title,desc
  //creating movie info
  console.log(req.body);

  //validate your data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  // return res.json(req.body);
};

export const movieDetail = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (movie === null) {
      return res.status(404).json({ message: "cannot find movie" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const movieUpdate = async (req, res) => {
  // res.send("update movie details");

  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },{
        new:true
      }
    );

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  //Validate the user input
  // if (req.body.title != null) {
  //   res.movie.title = req.body.title;
  // }

  // if (req.body.desc != null) {
  //   res.movie.desc = req.body.desc;
  // }

  // try {
  //   const updatedMovie = await res.movie.save();
  //   res.json(updatedMovie);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
};

export const movieDelete = (req, res) => {
  res.send("delete movie");
};
