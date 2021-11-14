"use strict"

const numberOfFilms = +prompt ('Сколько фильмов вы уже просмотрели?', ''); //How many films have you watched so far?
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?','');
const b = prompt ('На сколько оцените его','');
const c = prompt ('Один из последних просмотренных фильмов?','');
const d = prompt ('На сколько оцените его','');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log (personalMoviesDB);