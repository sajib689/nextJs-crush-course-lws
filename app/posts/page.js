import getPosts from '@/lib/getPosts'
import Link from 'next/link'
import React from 'react'

export default async function page() {
    const posts = await getPosts()
  return (
    <div>
        {
            posts.map(post => <Link href={`/posts/${post.id}`} key={post.id}><li >{post.title}</li></Link>)
        }
    </div>
  )
}
