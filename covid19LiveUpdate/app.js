const showAllFood = async () => {
  const searchData = document.getElementById("searchData");
  const searchValue = searchData.value;
  searchData.value = ""
  // const url = `https://api.covid19api.com/live/country/bangladesh/status/confirmed`
  //const url = `https://api.covid19api.com/total/country/${searchValue.toLowerCase()}/status/confirmed`
  const url = `https://api.covid19api.com/total/country/${searchValue.toLowerCase()}`
  // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
  // console.log(url);
  const res = await fetch(url);
  const data = await res.json();

  // console.log(data);


  if (data.length === 0) {

    // console.log("data");
    const section = document.getElementById("all-country");
    section.textContent = ""

    // searchDataAllCountry.forEach(country => {
    //   console.log(country);
    const div = document.createElement("div");
    div.classList.add("bg-color");
    div.classList.add("rounded");
    div.innerHTML = `
      <div class="text-center">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="card-text">There is no country by this name "${searchValue}"</h6>
            </div>
        </div>
      </div>
        `
    section.appendChild(div);

  } else {
    showMore(searchValue);
    const searchDataAllCountry = data.pop();
    // console.log(searchDataAllCountry);
    // console.log(searchDataAllCountry.Deaths);
    const section = document.getElementById("all-country");
    section.textContent = ""

    // searchDataAllCountry.forEach(country => {
    //   console.log(country);
    const div = document.createElement("div");
    div.classList.add("bg-color");
    div.classList.add("rounded");
    div.innerHTML = `
      <div class="text-center">
        <div class="card h-30">
          <div class="card-body">
            <h1 class="card-title">${searchDataAllCountry.Country}</h1> <br>
            <table class="table">
        <tbody class="fw-bold">
            <tr>
                <td>Country</td>
                <td>Total</td>
            </tr>
            <tr>
                <td>Active Case:</td>
                <td>${searchDataAllCountry.Active}</td>
            </tr>
            <tr>
                <td>Confirmed Case:</td>
                <td>${searchDataAllCountry.Confirmed}</td>
            </tr>
            <tr>
                <td>Deaths:</td>
                <td>${searchDataAllCountry.Deaths}</td>
            </tr>
            <tr>
                <td>Update Date:</td>
                <td>${searchDataAllCountry.Date.slice(0, 10)}</td>
            </tr>
        </tbody>
    </table>
          </div>
        </div>
      </div>
        `
    section.appendChild(div);

    // })
  }
}

const showMore = async (searchValue) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  // today = mm + '/' + (parseInt(dd) - 1) + '/' + yyyy;
  today = yyyy + '-' + mm + '-' + (parseInt(dd) - 2);
  console.log(today);
  // console.log(itemInfo);
  // const url = `https://api.covid19api.com/live/country/bangladesh/status/confirmed`
  // const url = `https://api.covid19api.com/live/country/${searchValue}/status/confirmed`
  const url = `https://api.covid19api.com/live/country/${searchValue}/status/confirmed/date/${today}T00:00:00Z`
  // const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemInfo}`;
  const res = await fetch(url);
  const countrysData = await res.json();
  console.log(countrysData)
  countrysData.forEach(data => {
    console.log(data)
    // const item = data.meals[0];
    // console.log(data.meals[0]);
    const singleItem = document.getElementById("single-item");

    const div = document.createElement("div");
    div.classList.add("col-12");
    div.classList.add("col-lg-4");
    div.classList.add("col-md-6");
    div.classList.add("rounded");
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
            <div class="card-body">
          <h5 class="card-title">Province: ${data.Province}</h5>
          <p class="card-text">Confirmed Case: ${data.Confirmed}</p>
          <p class="card-text">Active Case: ${data.Active}</p>
          <p class="card-text">Deaths Case: ${data.Deaths}</p>
          <p class="card-text">Update Date: ${data.Date.slice(0, 10)}</p>
        </div>
      </div>
  `;
    singleItem.appendChild(div);
  });

}

// https://api.covid19api.com/live/country/bangladesh/status/confirmed/date/2021-08-29T00:00:00Z