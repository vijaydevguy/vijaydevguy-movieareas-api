import express from "express"
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;

//connect db
connectDB();


app.get('/',(req,res) => {
    console.log("first")
    res.json({msg: "Hello guys "});
})

//CRUD functionality of movies

app.use('/movies',movieRoutes)

app.listen(6969, () =>{
    console.log(`This server is running at http://localhost:${PORT}`)
})