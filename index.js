const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let Lname = document.getElementById("Lname").value;
    let Fnac = document.getElementById("Fnac").value;

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
            'Nombre': name,
            'Apellido': Lname,
            'Fecha de nacimiento': Fnac
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
});


