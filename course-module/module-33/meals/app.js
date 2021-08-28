const showAllFood = async () => {
  const searchData = document.getElementById("searchData");
  const searchValue = searchData.value;
  searchData.value = ""
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
  const res = await fetch(url);
  const data = await res.json();
  const searchDataAllItem = data.meals;
  // console.log(searchDataAllItem);
  const section = document.getElementById("all-food");
  section.textContent = ""
  searchDataAllItem.forEach(items => {
    // console.log(items);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="col">
        <div class="card h-50">
          <img  src="${items.strMealThumb}" class="img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title">${items.strMeal}</h5>
            <p class="card-text">${items.strInstructions.slice(0, 200)}</p>
            <button onclick="showMore('${items.idMeal}')" type="button" class="btn btn-primary">Show more</button>
          </div>
        </div>
      </div>
        `
    section.appendChild(div);

  })
}

const showMore = async (itemInfo) => {
  // console.log(itemInfo);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemInfo}`;
  const res = await fetch(url);
  const data = await res.json();
  const item = data.meals[0];
  console.log(data.meals[0]);
  const singleItem = document.getElementById("single-item");
  singleItem.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="card" style="width: 36rem;">
            <img src="${item.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.strMeal}</h5>
                <p class="card-text">${item.strInstructions.slice(0, 200)}</p>
                <a target=_block href="${item.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  `;
  singleItem.appendChild(div);


}