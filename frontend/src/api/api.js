async function newSend({ dataObject }) {
    const response = await fetch("http://localhost:8000", {
        method: "POST",
        body: JSON.stringify({ dataObject})
    });
}