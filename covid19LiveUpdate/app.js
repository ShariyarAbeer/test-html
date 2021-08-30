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
        <div class="card h-100">
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

// const showMore = async (itemInfo) => {
//   // console.log(itemInfo);
//   // const url = `https://api.covid19api.com/live/country/bangladesh/status/confirmed`
//   const url = `https://api.covid19api.com/live/country/${itemInfo}/status/confirmed`
//   // const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemInfo}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   const item = data.meals[0];
//   console.log(data.meals[0]);
//   const singleItem = document.getElementById("single-item");
//   singleItem.textContent = "";
//   const div = document.createElement("div");
//   div.innerHTML = `
//       <div class="card" style="width: 36rem;">
//             <img src="${item.strMealThumb}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${item.strMeal}</h5>
//                 <p class="card-text">${item.strInstructions.slice(0, 200)}</p>
//                 <a target=_block href="${item.strYoutube}" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//   `;
//   singleItem.appendChild(div);


// }