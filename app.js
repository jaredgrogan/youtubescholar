#App // React.js App

async function searchTopic() {
    const topic = document.getElementById('topic').value;
    const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
    });
    const data = await response.json();
    displayResults(data);
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>Results for "${data.topic}"</h2><p>${data.response}</p>`;
}
