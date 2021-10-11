"use strict";
const defaultFilms = [
    {
        id: 1,
        title: "4 fromages",
        duration: 150,
        budget : 65456,
        link: "https://e-vinci.github.io/myjscourse/repositories"
    },
    {
        id: 2,
        title: "Moza",
        duration: 87,
        budget : 1596,
        link: "https://e-vinci.github.io/myjscourse/repositories"
    },
    {
        id: 3,
        title: "Poulet",
        duration: 32,
        budget : 878,
        link: "https://e-vinci.github.io/myjscourse/repositories"
    },
    {
        id: 4,
        title: "4 viandes",
        duration: 139,
        budget : 1564,
        link: "https://e-vinci.github.io/myjscourse/repositories"
    },
    {
        id: 5,
        title: "4 tomates",
        duration: 126,
        budget : 3524,
        link: "https://e-vinci.github.io/myjscourse/repositories"
    },
];

class Films {
    constructor() {
        this.defaultFilms = defaultFilms;
    }
    getAll(){
        return this.defaultFilms;
    }

}
module.exports = { Films };