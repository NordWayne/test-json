export function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
}
export function post(title, description) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: description,
            userId: description+title,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}