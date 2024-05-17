import { useEffect, useState } from 'react'
import './App.css'
import AlertButton from './components/AlertButton'
import Button from './components/Button'
import Form from './components/Form'
import CardComponent from './components/CardComponent'

function App() {
  // let data = []
  // data = response
  const [data, setData] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTkwZjI3YzEwZDZhY2U4ZWRjMWY0MGU4NGY5OGI2MSIsInN1YiI6IjY1Mjk4MmQ2MWYzZTYwMDEzOTlkYWUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YFBu95bqgjrJH_R7Vv8-liKTthxv1Vi1XtbRjawwdn0',
    },
  }

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err))
  }, [])
  // const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  const alertMessage = () => {
    alert('This is a new alert')
    console.log('look here -->')
  }

  return (
    <>
      {/* <Button /> */}
      {/* <AlertButton message={alertMessage} children={'Alert Button'} /> */}
      {/* <AlertButton message={alertMessage}>
        <span>Alert Button 2</span>
      </AlertButton>

      <input onChange={(e) => console.log(e.target.value)} />

      <Form /> */}
      {/* // prevent crashing the app if the server return to us empthy array. */}
      {/*  */}
      <div className='cardComponents'>
        {data?.results?.map((movie) => (
          <CardComponent
            key={movie.id} // sekogash ni treba unique key !!!! poradi performance
            img={movie.poster_path}
            title={movie.title}
            description={movie.overview}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </>
  )
}

export default App

// we have custom component for this one
// <div key={movie.id}>
//   <h2>{movie.title}</h2>
//   <img width={200} src={`${BASE_URL}${movie.poster_path}`} />
//   <p>{movie.overview}</p>
//   <p>Release Date: {movie.release_date}</p>
// </div>

{
  /* <Button />
      <AlertButton message={alertMessage} children={'Alert Button'} />
      <AlertButton message={alertMessage}>Alert Button 2</AlertButton>

      <Form /> */
}
