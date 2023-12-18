function request() {
    const inputValue = document.getElementById('input').value;

    if (inputValue >= 1 && inputValue <= 10) {
        const apiUrl = `https://jsonplaceholder.typicode.com/photos?_limit=${inputValue}`;

        const xhr = new XMLHttpRequest();

        xhr.open('GET', apiUrl, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                images(data);
            } else {
                document.getElementById('result').innerHTML = 'Произошла ошибка при получении данных.';
            }
        };

        xhr.send();
    } else {
        document.getElementById('result').innerHTML = 'Число вне диапазона от 1 до 10.';
    }
}

function images(data) {
    document.getElementById('result').innerHTML = '';

    data.forEach(item => {
        const img = document.createElement('img');
        img.src = item.url;
        document.getElementById('result').appendChild(img);
    });
}