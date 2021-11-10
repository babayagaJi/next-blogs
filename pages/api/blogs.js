// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getBlogs(req, res) {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    res.status(200).json(result)
}


export async function getBlog(req, res) {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    res.status(200).json(result)
}
