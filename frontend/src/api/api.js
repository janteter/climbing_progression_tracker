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

    return response.json();
}

export async function deleteClimb( dataObject ) {
    const response = await fetch(`http://localhost:8000/sends/${dataObject}`, {
        method: "DELETE",
    });
}