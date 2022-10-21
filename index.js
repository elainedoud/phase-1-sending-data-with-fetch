
    function submitData(name,email) {
        const newObject = {
            name: name,
            email: email,
        }  
        return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(newObject)
     })
        .then(response => response.json())
        .then(data => {
            document.body.textContent = data.id
        }
    )}

    