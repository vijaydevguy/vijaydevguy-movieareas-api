import express from "express"


const app = express();
const PORT = 6969;

app.get('/',(req,res) => {
    res.json({msg: "Hello guys "});
})

//CRUD functionality of movies


//R - for reading
app.get('/movies', () =>{

})

//C - for create
app.post('/movies', () =>{

})

//U - for update
app.put('/movies/:id', () =>{

})

//D - for delete
app.delete('/movies', () =>{

})

app.listen(6969, () =>{
    console.log(`This server is running at http://localhost:${PORT}`)
})