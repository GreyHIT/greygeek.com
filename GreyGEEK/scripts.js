document.addEventListener('DOMContentLoaded', () => {
    const isFilmPage = window.location.pathname.includes('Film.html');

    if (isFilmPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const filmId = urlParams.get('film');

        if (filmId) {
            loadFilmData(filmId);  // Загружаем данные о фильме
        } else {
            alert("Фильм не выбран.");
            window.location.href = 'index.html';
        }
    }

    // Инициализация слайдеров
    document.querySelectorAll('.film-slider').forEach(initSlider);
});

const loadFilmData = (filmId) => {
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            const filmData = data[filmId];
            if (filmData) {
                document.querySelector('.film-title').textContent = filmData.title;
                document.querySelector('.film-year').textContent = `Год: ${filmData.year}`;
                document.querySelector('.film-country').textContent = `Страна: ${filmData.country}`;
                document.querySelector('.film-budget').textContent = `Бюджет: ${filmData.budget}`;
                document.querySelector('.film-genre').textContent = `Жанр: ${filmData.genre}`;
                document.querySelector('.film-box-office').textContent = `Сборы: ${filmData.boxOffice}`;
                document.querySelector('.film-director').textContent = `Режиссёр: ${filmData.director}`;
                document.querySelector('.film-runtime').textContent = `Время: ${filmData.runtime}`;
                document.querySelector('.film-poster').src = filmData.poster;
                document.querySelector('.film-trailer iframe').src = filmData.trailer;
                document.querySelector('.film-synopsis p').textContent = filmData.synopsis;
                document.querySelector('.film-player iframe').src = filmData.videoPlayer;

                const castContainer = document.querySelector('.film-cast-slider .slider-content');
                castContainer.innerHTML = '';
                filmData.cast.forEach(actor => {
                    const actorCard = document.createElement('div');
                    actorCard.classList.add('actor-card');
                    actorCard.innerHTML = `<img src="${actor.photo}" alt="${actor.name}"><p>${actor.name}</p>`;
                    castContainer.appendChild(actorCard);
                });

                const recommendedContainer = document.querySelector('.similar-films .slider-content');
                recommendedContainer.innerHTML = '';
                filmData.recommended.forEach(recommendation => {
                    const filmCard = document.createElement('div');
                    filmCard.classList.add('film-card');
                    filmCard.innerHTML = `<img src="${recommendation.photo}" alt="${recommendation.title}">`;
                    recommendedContainer.appendChild(filmCard);
                });
            } else {
                alert("Фильм не найден.");
                window.location.href = 'index.html';
            }
        })
        .catch(error => {
            console.error("Ошибка загрузки данных о фильме:", error);
            alert("Не удалось загрузить информацию о фильме.");
        });
};
