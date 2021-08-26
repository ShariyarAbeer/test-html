function ClickMe() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => showData(data));
}

function showData(data) {
    const ul = document.getElementById("ul");
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement("li");
        li.innerText = `User Name: ${user.name}
                        Email: ${user.email}`;
        ul.appendChild(li);
    }
}