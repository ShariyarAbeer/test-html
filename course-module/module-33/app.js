

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displaydata(data))

}

displaydata = (data) => {
    console.log(data);
    const div = document.getElementById("showData")
    for (const datas of data) {
        const title = document.createElement("h4");
        title.innerText =
            `
        Title: ${datas.title}
        User ID: ${datas.id}
        `
        div.appendChild(title);

    }

}