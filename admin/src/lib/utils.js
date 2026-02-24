export async function apiFetch(url, options = {}) {
    const res = await fetch(`http://localhost:5000/api${url}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || `API error: ${res.status}`);
    }
    return res.json();
}