export async function apiGet(url){
    let response = await fetch(url, {
        method: "GET",
    });
    if (response.status === 200){
        return response.json();
    }
}
export async function apiDelete(url){
    let response = await fetch(url, {
        method: "DELETE",
        headers: {"Content-type": "application/json"},
    });
    if (response.status === 200) {
        return response.json();
    }
}
export async function apiPost(url, payload){
    let response = await fetch(url, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(payload)
    });
    if (response.status === 200) {
        return response.json();
    }
}