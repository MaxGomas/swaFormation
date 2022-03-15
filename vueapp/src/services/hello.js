export async function getMessage() {

    const response = await fetch('/api/getmessage');
    return await response.json();
}

