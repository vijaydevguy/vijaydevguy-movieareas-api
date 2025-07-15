export const movieIndex = (req, res) => {
  //   console.log("getiing is working");
  res.send("show movie details");
};

export const movieCreate = (req, res) => {
  // res.send("create movies ");

  //id,title,desc
  //creating movie info
  console.log(req.body);
  return res.json(req.body);
};

export const movieUpdate = (req, res) => {
  res.send("update movie details");
};

export const movieDelete = (req, res) => {
  res.send("delete movie");
};
