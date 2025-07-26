import { Schema,model } from "mongoose";

//write the schema for movies
const schema = new Schema({
  // title: String,
  title:{
    type:String,
    required:true,
  },
  desc: String,
});

//create your model
const Movie = model("Movie", schema);

export default Movie;
