

export default async function getComments(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        next: {
            revalidate: 10,
        }
    })
    return res.json()
}
