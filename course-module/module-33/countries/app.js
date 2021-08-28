const loadCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = (countries) => {
    // console.log(countries);
    const contryDiv = document.getElementById("contry");
    //array r jono use kore return type nai return paite hole map sure korte hoy 
    countries.forEach(country => {
        //  console.log(country);
        // const title = document.createElement("h2");
        // const capital = document.createElement("p")
        // title.innerText = country.name;
        // capital.innerText = country.capital;
        // div.appendChild(title)
        // div.appendChild(capital)
        const div = document.createElement("div")
        div.classList.add("col-lg-6")
        div.classList.add("col-md-6")
        div.classList.add("col-12")
        div.innerHTML = `
            <div class="p-3 border bg-light">
             <h3> ${country.name}</h3>
             <p> ${country.capital}</p>
              <button onclick="showMore('${country.name}')" type="button" class="btn btn-primary">Show more</button>
            </div>
      
        `
        contryDiv.appendChild(div);

    })

}
const showMore = (name) => {
    // console.log(name);
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    //  console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showCountry(data))
}
const showCountry = (countryInfo) => {
    //console.log(countryInfo);
    const infoAdd = document.getElementById("info-add")
    infoAdd.textContent = ""
    countryInfo.forEach(country => {
        console.log(country.name)

        const div = document.createElement("div");
        div.innerHTML = `
        <h1 class="m-3">Countries Info</h1>
        <div class="card m-5 p-5" style="width: 18rem;">
        <img src="${country.flag}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">name: ${country.name}</p>
            <p class="card-text">Capital: ${country.capital}</p>
            <p class="card-text">Population: ${country.population}</p>
        </div>
        `


        infoAdd.appendChild(div);
    })
}