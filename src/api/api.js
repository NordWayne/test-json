export function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/50')
        .then(res => res.json())
}