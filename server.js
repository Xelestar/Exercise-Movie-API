const express = require("express");

const app = express();
const PORT = 3000;

const movie_list = [
    {
        id: 1,
        title: "Interstellar",
        genre: "Science Fiction",
        year: 2014
    },

    {
        id: 2,
        title: "Avengers Endgame",
        genre: "Science Fiction",
        year: 2019
    },

    {
        id: 3,
        title: "Coco",
        genre: "Animation",
        year: 2017
    },

    {
        id: 4,
        title: "Inception",
        genre: "Science Fiction",
        year: 2010
    },

];
    //Returns Movie List
    app.get("/api/movies",(req, res) => {
        res.json(movie_list);
    });

    //Returns Specific Movie by ID
    app.get("/api/movies/:id",(req, res) => {
        const id = Number(req.params.id);

        const item = movie_list.find(item =>
            item.id == id
        );

        if(!item){
            return res.status(404).json(
                {
                    message: "Movie not found"
                }
            )
        }

        res.json(item);

    });

    //Creates new movie item
    app.post("/api/movies", (req,res) =>{

        const count = movie_list.length

        /*const item = {
            id: count,
            title: ,
            genre: ,
            year:
        }*/
        
        movie_list.push(item);

    });

    app.use(express.static(__dirname));
    app.listen(PORT,()=> {
        console.log(`Server Running at http://localhost:${PORT}`);
    });