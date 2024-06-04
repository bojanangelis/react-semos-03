import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import CardComponent from '../components/CardComponent'

const Post = () => {
  const [post, setPost] = useState(null)
  const params = useParams()
  console.log(params)
  useEffect(() => {
    if (params?.postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
        .then((response) => response.json())
        .then((json) => setPost(json))
    }
  }, [params?.postId])

  return <CardComponent id={post?.id} userId={post?.userId} title={post?.title} body={post?.body} />
}

export default Post
