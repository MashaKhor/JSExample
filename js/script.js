"use strict";

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         this.count = +prompt("Сколько фильмов вы посмотрели?", "");

//         while(this.count == '' || this.count == null || isNaN(this.count)) {
//             this.count = +prompt("Сколько фильмов вы посмотрели? Ответьте числом", "");
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const film = prompt("Один из последних просмотренных фильмов?", "").trim(),
//                   mark = prompt("На сколько оцените его?");
//             if (film == "" || film == null || film.length > 50) {
//                 i--;
//             } else {
//                 this.movies[film] = mark;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (this.count < 10) {
//             alert('Просмотрено довольно мало фильмов');
//         } else if (this.count >= 10 && this.count <= 30) {
//             alert('Вы классический зритель');
//         } else if (this.count > 30) {
//             alert('Вы киноман');
//         } else {
//             alert('Произошла ошибка');
//         }
//     },
//     showMyDB: function() {
//         if (!this.privat) {
//             console.log(this);
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 0; i < 3; i++) {
//             const ganre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '').trim();
//             if (ganre == null || ganre == "") {
//                 i--;
//             } else {
//                 this.genres[i] = ganre;
//             }
//         };
//         this.genres.forEach((item, index)=> console.log(`Любимый жанр #${index + 1} - это ${item}`))
//     },
//     toggleVisibleMyDB: function() {
//         (!this.privat) ? this.privat = true : this.privat = false;
//     }
// };

document.addEventListener('DOMContentLoaded', () => init());

function init() {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        posterFilm = document.querySelector('.promo__bg'),
        promoFilms = document.querySelector('.promo__interactive-list');

    adv.forEach(item => item.remove());

    genre.textContent = "драма".toUpperCase();

    posterFilm.style.cssText = "background: url(../img/bg.jpg) no-repeat;";

    promoFilms.innerHTML = "";

    function addFilms(nameFilm, index) {
        return `<li class="promo__interactive-item">${index}. ${nameFilm.toUpperCase()}
                <div class="delete"></div>
            </li>`;
    }

    function showMovies() {
        promoFilms.innerHTML = "";
        movieDB.movies.sort().forEach((f, index) => {
            promoFilms.innerHTML += addFilms(f, index + 1);
        });
    }

    showMovies();

    const buttonAddFilm = document.querySelector('.add button'),
        inputNameFilm = document.querySelector('.adding__input'),
        checkBoxLike = document.querySelector('input[type=checkbox]');

    buttonAddFilm.addEventListener('click', (event) => {
        event.preventDefault();

        let nameFilm = inputNameFilm.value.trim();

        if (nameFilm != "") {
            nameFilm = (nameFilm.length > 21) ? `${nameFilm.substring(0, 22)}...` : nameFilm;
            movieDB.movies.push(nameFilm);
            showMovies();
            changeButtonDeleteMethod();

            if (checkBoxLike.checked) console.log("Добавляем любимый фильм");
        }
    });

    function changeButtonDeleteMethod() {
        const trashCan = document.querySelectorAll('.delete');

        trashCan.forEach(trash => {
            trash.addEventListener('click', (event) => {
                let nameFilmDelete = event.target.parentElement.innerText.substring(3);
                nameFilmDelete = nameFilmDelete.toLowerCase();
                nameFilmDelete = nameFilmDelete[0].toUpperCase() + nameFilmDelete.slice(1);

                const indexFilm = movieDB.movies.indexOf(nameFilmDelete);

                movieDB.movies.splice(indexFilm, 1);
                showMovies();

                changeButtonDeleteMethod();
            })
        });
    }

    changeButtonDeleteMethod();
}