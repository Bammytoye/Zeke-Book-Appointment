export async function apiFetch(url, options = {}) {
    const res = await fetch(`http://localhost:5000/api${url}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });

    if (!res.ok) throw new Error("API error");
    return res.json();
}