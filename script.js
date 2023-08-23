const countriesList = document.getElementById('countriesList');

fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
        // Process the data and create country cards
        data.forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.classList.add('col-md-4', 'mb-4', 'country-card');

            countryCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${country.name}</h5>
                        <p class="card-text">Population: ${country.population}</p>
                        <p class="card-text">Area: ${country.area} sq km</p>
                    </div>
                </div>
            `;

            countriesList.appendChild(countryCard);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
