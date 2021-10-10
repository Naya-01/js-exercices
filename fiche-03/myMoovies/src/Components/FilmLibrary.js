"use strict";
class FilmLibrary{
    constructor() {
        this.array = [];
    }
    addFilm(film){
        if(Object.keys(film) ===null && film.constructor===Object){
            return "no possible to add the object is null";
        }else{
            this.array.push(film);
        }
    };
}