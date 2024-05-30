import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import { useEffect } from 'react'

export default function Root() {
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  console.log(location)
  console.log(pathname.includes('contacts'))

  useEffect(() => {
    if (pathname.includes('new-contact')) {
      navigate('/contacts/123')
    }
  }, [])
  // homework https://reactrouter.com/en/main/start/tutorial ovoj cel tutorial da se prekuca.
  return (
    <>
      <Header />
      <div id='detail'>
        {/* Children znaci tuka pushtame deca od strani kako na primer vo route pagot imame dete od contacts */}
        {/* Ovoj Outlet ja prikazuva children elementot vo slucajov contact.jsx */}
        <Outlet />
      </div>

      <Sidebar />
    </>
  )
}
