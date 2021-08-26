function ClickMe() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => showData(data));
}
ClickMe();
function showData(data) {
    const allPost = document.getElementById("allPost");
    for (const user of data) {
        // console.log(user.name);
        const div = document.createElement("div");
        div.classList.add("post")

        div.innerHTML = `
        <h1>${user.title}</h1>
        <p>${user.body}</p>
        `;
        allPost.appendChild(div);
    }
}