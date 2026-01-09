export async function newSend( dataObject ) {
    console.log(dataObject);
    const response = await fetch('http://127.0.0.1:8000/sends', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObject),
        credentials: 'include'
    });
    return response;
}

export async function retrieveClimbs ( dataObject ){
    
    const params = new URLSearchParams({
        target_date: dataObject.target_date
    });

    const response = await fetch(`http://127.0.0.1:8000/prev_sends?${params}`, {
        method: "GET",
        headers : {
            "Content-Type" : "application/json"
        },
        credentials: 'include'
    });

    return response;
}

export async function deleteClimb( dataObject ) {
    const response = await fetch(`http://127.0.0.1:8000/sends/${dataObject}`, {
        method: "DELETE",
        credentials: 'include'
    });
}

export async function newClimber( dataObject ) {
    const response = await fetch('http://127.0.0.1:8000/new_climber', {
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
    
    const response = await fetch('http://127.0.0.1:8000/token', {
        method: "POST",
        body: formData,
        credentials: 'include'
    });
    
    return response;
}

export async function statusCheck(){
    const response = await fetch('http://127.0.0.1:8000/status', {
        method: "GET",
        credentials: 'include'
    });
    
    return response;
}