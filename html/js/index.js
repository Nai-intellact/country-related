function loadCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));


}
const displayCountries = countries => {
    const allCountryHTML = countries.map(country => getCountryHTML(country));
    console.log(allCountryHTML);
    const container = document.getElementById('countries');

    container.innerHTML = allCountryHTML.join(' ');

}
const getCountryHTML = country => {
    return `
    <div class="country">
     <h2> ${country.name.common}</h2>
     <img src="${country.flags.png}" alt="this is the flag">
     <p>capital:${country.capital}</p>
     <p> region:${country.region}</p>
     <p> sub-region:${country.subregion}</p>
    </div>
    `
}

loadCountries();