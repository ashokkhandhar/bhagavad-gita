import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import 'dotenv/config'

const app = express();
const port = 3000;
const API_URL = "https://bhagavad-gita3.p.rapidapi.com/v2";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const config = {
  params: {limit: '18'},
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
  }
};

app.get("/", async (req, res)=>{
    try {
        const responce = await axios.get(API_URL + "/chapters/", config);
        res.render("home.ejs", { chapters: responce.data });
    } catch(error){
        res.status(404).send(error.message);
    }
});

app.get("/chapter/:chapter", async (req, res)=>{
  	const req_chapter = req.params.chapter;
    try {
        const chapter = await axios.get(API_URL + `/chapters/${req_chapter}/`, config);
        const verses = await axios.get(API_URL + `/chapters/${req_chapter}/verses/`, config);
        res.render("chapter.ejs", {chapter: chapter.data, verses: verses.data});
    } catch (error) {
        console.error(error.message);
        res.status(404).send(error.message);
    }
});

app.get("/chapter/:chapter/verse/:verse", async (req, res) => {
    const req_chapter = req.params.chapter;
    const req_verse = req.params.verse;
    try {
        const verse = await axios.get(API_URL + `/chapters/${req_chapter}/verses/${req_verse}/`, config);
        res.render("verse.ejs", {verse: verse.data});
    } catch (error) {
        console.log(error.message);
        res.status(404).send(error.message);
    }
});

app.listen(port, ()=>{
    console.log(`App Started at port ${port}`);
});
