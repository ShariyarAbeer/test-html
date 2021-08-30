const showAllFood = async () => {
  const searchData = document.getElementById("searchData");
  const searchValue = searchData.value;
  searchData.value = ""
  // const url = `https://api.covid19api.com/live/country/bangladesh/status/confirmed`
  const url = `https://api.covid19api.com/live/country/${searchValue.toLowerCase()}/status/confirmed`
  // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
  // console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);

  const searchDataAllCountry = data.pop();
  console.log(searchDataAllCountry);
  console.log(searchDataAllCountry.Deaths);
  const section = document.getElementById("all-country");
  section.textContent = ""

  // searchDataAllCountry.forEach(country => {
  //   console.log(country);
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="text-center">
        <div class="card h-100">
          <div class="card-body">
            <h1 class="card-title">${searchDataAllCountry.Country}</h1>
            <h6 class="card-text">Country Code: ${searchDataAllCountry.CountryCode}</h6>
            <h3 class="card-title">Active Case: ${searchDataAllCountry.Active}</h3>
            <h3 class="card-title">Confirmed Case: ${searchDataAllCountry.Confirmed}</h3>
            <h3 class="card-title">Deaths: ${searchDataAllCountry.Deaths}</h3>
            <h3 class="card-title">Update Date: ${searchDataAllCountry.Date.slice(0, 10)}</h3>
            
          </div>
        </div>
      </div>
        `
  section.appendChild(div);

  // })
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