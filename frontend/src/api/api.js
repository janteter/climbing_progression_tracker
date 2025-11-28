export async function newSend( dataObject ) {
    const response = await fetch('http://localhost:8000/sends', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObject)
    });
}

export async function retrieveClimbs ( dataObject ){
    
    const params = new URLSearchParams({
        target_date: dataObject.target_date
    });

    const response = await fetch(`http://localhost:8000/prev_sends?${params}`, {
        method: "GET",
        headers : {
            "Content-Type" : "application/json"
        },
    });

    
    return response;
}

export async function deleteClimb( dataObject ) {
    const response = await fetch(`http://localhost:8000/sends/${dataObject}`, {
        method: "DELETE",
    });

}

export async function newClimber( dataObject ) {
    const response = await fetch('http://localhost:8000/new_climber', {
        method: "POST",
        headers : {
          "Content-Type" : "application/json"  
        },
        body: JSON.stringify(dataObject)
    });
    return response;
}

export async function login( dataObject ) {
    const formData = new FormData();
    const username = dataObject.username;
    const password = dataObject.password;

    formData.append("username", username);
    formData.append("password", password);
    console.log(formData.has("username"));
    console.log(formData.has("password"));
    
    const response = await fetch('http://localhost:8000/token', {
        method: "POST",
        body: formData
    });

}