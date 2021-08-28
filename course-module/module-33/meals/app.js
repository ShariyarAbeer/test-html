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
        console.log(items);
        const div = document.createElement("div");
        div.innerHTML = `
      <div class="col">
        <div class="card h-50">
          <img src="${items.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${items.strMeal}</h5>
            <p class="card-text">${items.strInstructions.slice(0, 200)}</p>
          </div>
        </div>
      </div>
        `
        section.appendChild(div);

    })


}