
import getComments from '@/lib/getComments'
import getPost from '@/lib/getPost'
import React from 'react'
export async function generateMetadata({params}) {
    const {id} = params
    const post = await getPost(id)

    return {
        title: post.title,
        description: post.body
    }
}



export default async function page({params}) {
    const {id} = params
    const postPromise = getPost(id)
    const commentsPromise = getComments(id)

    const [post, comments] = await Promise.all([postPromise, commentsPromise])

  return (
    <div className='border border-red-400 w-96 h-96 p-12'>
        <h1>Id:{post.id}</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <hr/>
        <div className='border border-black'>
        {
            comments.map(comment => <div className='border p-10 border-yellow-500' key={comment.id}>
            
            <h1>{comment.email}</h1>
            <p>{comment.body.slice(0,25)}</p>
            <button className='bg-primary px-2 py-5 text-white'>Click Now</button>
            </div>)
        }

        </div>
    </div>
  )
}
