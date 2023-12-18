document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem('lastRequestData')) || {};
    document.getElementById('pageInput').value = savedData.page || '';
    document.getElementById('limitInput').value = savedData.limit || '';
    if (savedData.photos) {
        images(savedData.photos);
    }
});

async function request() {
    const pageInput = document.getElementById('pageInput').value;
    const limitInput = document.getElementById('limitInput').value;

    if (!isValidInput(pageInput) || !isValidInput(limitInput)) {
        document.getElementById('result').innerHTML = 'Номер страницы и лимит должны быть числами от 1 до 10.';
        return;
    }

    const apiUrl = `https://jsonplaceholder.typicode.com/photos?_page=${pageInput}&_limit=${limitInput}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Произошла ошибка при получении данных.');
        }

        const data = await response.json();

        const requestData = { page: pageInput, limit: limitInput, photos: data };
        localStorage.setItem('lastRequestData', JSON.stringify(requestData));

        images(data);
    } catch (error) {
        document.getElementById('result').innerHTML = error.message;
    }
}

function isValidInput(value) {
    return !isNaN(value) && value >= 1 && value <= 10;
}

function images(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    data.forEach(item => {
        const img = document.createElement('img');
        img.src = item.url;
        resultDiv.appendChild(img);
    });
}
