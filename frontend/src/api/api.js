export async function newSend( dataObject ) {
    const response = await fetch("http://localhost:8000/sends", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObject)
    });
}