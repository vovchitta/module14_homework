async function request() {
    const widthInput = document.getElementById('widthInput').value;
    const heightInput = document.getElementById('heightInput').value;

    if (isNumberInRange(widthInput) && isNumberInRange(heightInput)) {
        const apiUrl = `https://dummyimage.com/${widthInput}x${heightInput}/`;

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Произошла ошибка при получении данных.');
            }

            const imageUrl = await response.url;
            displayImage(imageUrl);
        } catch (error) {
            document.getElementById('result').innerHTML = error.message;
        }
    } else {
        document.getElementById('result').innerHTML = 'Одно из чисел вне диапазона от 100 до 300.';
    }
}

function isNumberInRange(value) {
    return !isNaN(value) && value >= 100 && value <= 300;
}

function displayImage(imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').appendChild(img);
}