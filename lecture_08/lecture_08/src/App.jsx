import { useEffect, useState } from 'react'
import './App.css'
import CardComponent from './components/CardComponent'

function App() {
  const [data, setData] = useState(null)
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  console.log(data)

  const handlePostSubmit = async () => {
    if (body.length <= 0 || title.length <= 0) {
      return
    }
    try {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => setData([json, ...data]))
    } catch (error) {
      console.log(error)
    } finally {
      setBody('')
      setTitle('')
    }
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Create post</label>
        <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' />
        <br />
        <input value={body} onChange={(e) => setBody(e.target.value)} type='text' />
        <br />

        <button onClick={handlePostSubmit} type='submit'>
          Submit post
        </button>
      </form>

      {data?.map((post, i) => (
        <CardComponent
          key={i}
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </>
  )
}
export default App
