"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const filmsFirst = prompt("Один из последних просмотренных фильмов?", ""),
      markFirst = prompt("На сколько оцените его?"),
      filmsSec = prompt("Второй из последних просмотренных фильмов?", ""),
      markSec = prompt("На сколько оцените его?");

personalMovieDB.movies[filmsFirst] = markFirst;
personalMovieDB.movies[filmsSec] = markSec;

console.log(personalMovieDB);