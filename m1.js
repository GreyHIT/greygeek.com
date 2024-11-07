// Получаем параметр film из URL
const urlParams = new URLSearchParams(window.location.search);
const filmId = urlParams.get('film');

// Проверка, что ID фильма присутствует
if (filmId) {
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            const filmData = data[filmId];
            if (filmData) {
                // Установка данных о фильме на страницу
                document.querySelector('.film-title').textContent = filmData.title;
                document.querySelector('.film-year').textContent = `Год: ${filmData.year}`;
                document.querySelector('.film-country').textContent = `Страна: ${filmData.country}`;
                document.querySelector('.film-description').textContent = filmData.description;
                document.querySelector('.film-image').src = filmData.poster;
                document.querySelector('.film-trailer iframe').src = filmData.trailer;
            } else {
                alert("Фильм не найден.");
                window.location.href = 'index.html'; // Перенаправление на главную
            }
        })
        .catch(error => {
            console.error("Ошибка загрузки данных о фильме:", error);
            alert("Не удалось загрузить информацию о фильме.");
        });
} else {
    alert("Фильм не выбран.");
    window.location.href = 'index.html'; // Перенаправление на главную
}


