import express from "express"


const app = express();
const PORT = 6969;

app.get('/',(req,res) => {
    res.json({msg: "Hello guys "});
})

app.listen(6969, () =>{
    console.log(`This server is running at http://localhost:${PORT}`)
})