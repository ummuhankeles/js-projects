const rowItem = document.querySelector('.row');
const searchInput = document.querySelector('#txtSearch');

// add css the search bar
searchInput.setAttribute('style', 'border-radius: 20px; padding: 10px 30px;');

// get all country
window.addEventListener('load', onLoadData);
async function onLoadData() {
    let response = await fetch('https://restcountries.com/v3.1/all').then(res => res.json()); 
    let items = "";
    console.log(response)
    response.forEach(item => {
        items += `
            <div class="col-md-3 mb-4">
                <div class="card h-100">
                    <img src="${item.flags.png}" class="card-img-top h-100">
                    <div class="card-body">
                        <h5 class="card-title">${item.name.common}</h5>
                        <div class="card-detail">
                            <a id="detail" onClick="getDetail(${item.ccn3})" style="cursor: pointer; color: blue;">Show Detail..</a>
                        </div>
                    </div>
                </div>
            </div>
        `
        rowItem.innerHTML = items;
    });
}

// filter the country
searchInput.addEventListener('input', FilteredCountry)
async function FilteredCountry() {
    let filteredData = this.value;
    let result = await fetch(`https://restcountries.com/v3.1/all`).then(res => res.json());
    let items = "";
    result.filter(index => index.name.common.toLowerCase().includes(filteredData.toLowerCase())).forEach(item => {
        items += `
            <div class="col-md-3 mb-4">
                <div class="card h-100">
                    <img src="${item.flags.png}" class="card-img-top h-100">
                    <div class="card-body">
                        <h5 class="card-title">${item.name.common}</h5>
                        <div class="card-detail">
                            <a id="detail" onClick="getDetail(${item.ccn3})" style="cursor: pointer; color: blue;">Show Detail..</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        `
        rowItem.innerHTML = items;
    })
}

//get detail the country
async function getDetail(code) {
    searchInput.style.display = "none";
    let result = await fetch(`https://restcountries.com/v3.1/alpha/${code}`).then(res => res.json());
    console.log(result);
    let items = "";
    result.forEach(item => {
        items += `
            <div class="container">
                <div class="country-flag text-center mb-3">
                    <img src="${item.flags.png}">
                </div>
                <div class="country-info d-flex justify-content-center">
                    <table class="table table-bordered h-100" style="width: 70%">
                        <tbody>
                            <tr>
                                <th>Country</th>
                                <td>${item.name.common}</td>
                            </tr>
                            <tr>
                                <th>Capital</th>
                                <td>${item.capital}</td>
                            </tr>
                            <tr>
                                <th>Population</th>
                                <td>${item.population}</td>
                            </tr>
                            <tr>
                                <th>Neighboring Countries</th>
                                <td>${item?.borders}</td>
                            </tr>
                            <tr>
                                <th>Language</th>
                                <td>${Object.values(item.languages)}</td>
                            </tr>
                            <tr>
                                <th>Continent</th>
                                <td>${item.continents}</td>
                            </tr>
                            <tr>
                                <th>Start Of Week</th>
                                <td>${(item.startOfWeek).charAt(0).toUpperCase() + (item.startOfWeek).slice(1).toLowerCase()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
        rowItem.innerHTML = items;
    });
} 