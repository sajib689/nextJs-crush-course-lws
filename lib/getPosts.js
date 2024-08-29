

export default async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?limit=10')
    return res.json()
}
