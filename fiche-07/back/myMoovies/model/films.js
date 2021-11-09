"use strict";
const { parse, serialize } = require("../utils/json");
const jsonDbPath = __dirname + "/../data/films.json";

const defaultFilms = [
    {
        id: 1,
        title: "Avenger le titan",
        duration: 150,
        budget : 65456,
        link: "https://e-vinci.github.io/myjscourse/repositories"
    },
    {
        id: 2,
        title: "Pas toi",
        duration: 87,
        budget : 1596,
        link: "https://e-vinci.github.io/myjscourse/repositories"
    },
    {
        id: 3,
        title: "look me more",
        duration: 32,
        budget : 878,
        link: "https://e-vinci.github.io/myjscourse/repositories"
    },
    {
        id: 4,
        title: "Behind you or not ?",
        duration: 139,
        budget : 1564,
        link: "https://e-vinci.github.io/myjscourse/repositories"
    },
    {
        id: 5,
        title: "Take out your Ass",
        duration: 126,
        budget : 3524,
        link: "https://e-vinci.github.io/myjscourse/repositories"
    },
];

class Films {
    constructor(dbPath = jsonDbPath, defaultItems = defaultFilms) {
        this.jsonDbPath = dbPath;
        this.defaultFilms = defaultItems;
    }
    getAll(obj){
        const films = parse(this.jsonDbPath,this.defaultFilms);
        console.log("stp1");
        if(obj.min===undefined){
            console.log("stp2");
            return films;
        }else{
            console.log("stp3");
            let minFilms = [];
            films.forEach(function(film){
                if(film.duration>=obj.min){
                    minFilms.push(film);
                }
            });
            return minFilms;
        }
    }
    getOne(id) {
        const films = parse(this.jsonDbPath,this.defaultFilms);
        const foundIndex = films.findIndex((film) => film.id == id);
        if (foundIndex < 0) return;

        return films[foundIndex];
    }
    addOne(body) {
        const films = parse(this.jsonDbPath,this.defaultFilms);

        // add new resource
        const newFilm = {
            id: this.getNextId(),
            //...body, // shallow copy with the spread operator
        };
        // escape HTML chars only for props that are of type "string"
        for (const key in body) {
            if (Object.hasOwnProperty.call(body, key)) {
                const element = body[key];
                if (typeof element === "string") newFilm[key] = escape(element);
                else newFilm[key] = element;
            }
        }

        films.push(newFilm);
        serialize(this.jsonDbPath, films);
        return newFilm;
    }
    getNextId() {
        const films = parse(this.jsonDbPath,this.defaultFilms);
        let nextId;
        if (films.length === 0) nextId = 1;
        else nextId = films[films.length - 1].id + 1;

        return nextId;
    }
    deleteOne(id){
        const films = parse(this.jsonDbPath,this.defaultFilms);
        const foundIndex = films.findIndex((film) => film.id == id);
        if (foundIndex < 0) return;
        const itemRemoved = films.splice(foundIndex, 1);
        serialize(this.jsonDbPath, films);
        return itemRemoved[0];
    }

    updateOne(id,body){
        const films = parse(this.jsonDbPath,this.defaultFilms);
        const foundIndex = films.findIndex((film) => film.id == id);
        if (foundIndex < 0) return;
        const updatedFilm = { ...films[foundIndex], ...body };
        for (const key in body) {
            if (Object.hasOwnProperty.call(body, key)) {
                const element = body[key];
                updatedFilm[key] = escape(element);
            }
        }
        // replace the pizza found at index : (or use splice)
        films[foundIndex] = updatedFilm;
        serialize(this.jsonDbPath, films);
        return updatedFilm;
    }

}
module.exports = { Films };