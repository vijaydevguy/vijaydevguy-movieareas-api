export const movieIndex = (req, res) => {
  //   console.log("getiing is working");
  res.send("show movie details");
};

export const movieCreate = (req, res) => {
  res.send("create movies ");
};

export const movieUpdate = (req, res) => {
  res.send("update movie details");
};

export const movieDelete = (req, res) => {
  res.send("delete movie");
};
