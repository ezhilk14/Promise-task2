document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'gX5r0HCSo0vWIYsuK1fuW2Bj8HQmaQAfh96o48gM'; 
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    function fetchAPOD() {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        reject('Error fetching data from NASA API');
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    fetchAPOD()
        .then(data => {
            const content = document.getElementById('content');
            content.innerHTML = `
                <h3>${data.title}</h3>
                <img src="${data.url}" alt="${data.title}">
                <p>${data.explanation}</p>
            `;
        })
        .catch(error => {
            const content = document.getElementById('content');
            content.innerHTML = `<p>${error}</p>`;
        });
});
